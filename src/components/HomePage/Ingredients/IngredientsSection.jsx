import React, { useState } from "react";
import { Row, Col, Typography, message } from "antd";
import { INGREDIENTS } from "@/constants/HomePage/IngredientsSection";
import { endpoints } from "@/config/api";
import api from "@/config/axios";

import IngredientsInput from "./IngredientsInput";
import RecipeList from "./RecipeList";
import RecipeDetailModal from "./RecipeDetailModal";

const { Title, Text } = Typography;

const IngredientsSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  // Modal states
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [cookingSteps, setCookingSteps] = useState([]);
  const [stepsLoading, setStepsLoading] = useState(false);

  // Handle adding an ingredient
  const handleAddIngredient = () => {
    if (inputValue.trim() && !ingredients.includes(inputValue.trim())) {
      setIngredients([...ingredients, inputValue.trim()]);
      setInputValue("");
    }
  };

  // Handle removing an ingredient
  const handleRemoveIngredient = (ingredient) => {
    setIngredients(ingredients.filter((item) => item !== ingredient));
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    const ingredient = suggestion.replace(/[^a-zA-ZÀ-ỹ\s]/g, "").trim();
    if (!ingredients.includes(ingredient)) {
      setIngredients([...ingredients, ingredient]);
    }
  };

  // Fetch cooking steps for a recipe
  const fetchCookingSteps = async (recipeId) => {
    try {
      setStepsLoading(true);
      const response = await api.get(endpoints.ai.cookingSteps(recipeId));

      console.log("Cooking steps response:", response.data);

      if (response.data && Array.isArray(response.data)) {
        // Sort steps by stepNumber to ensure correct order
        const sortedSteps = response.data.sort((a, b) => a.step - b.step);
        setCookingSteps(sortedSteps);
      } else {
        setCookingSteps([]);
        messageApi.warning("Không tìm thấy hướng dẫn nấu ăn cho món này.");
      }
    } catch (error) {
      console.error("Error fetching cooking steps:", error);
      setCookingSteps([]);

      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Không thể tải hướng dẫn nấu ăn. Vui lòng thử lại!";
      messageApi.error(errorMessage);
    } finally {
      setStepsLoading(false);
    }
  };

  // Handle recipe card click
  const handleRecipeClick = async (recipe) => {
    setSelectedRecipe(recipe);
    setModalVisible(true);
    setCookingSteps([]);

    // Fetch cooking steps for the selected recipe
    if (recipe.id) {
      await fetchCookingSteps(recipe.id);
    }
  };

  // Handle modal close
  const handleModalClose = () => {
    setModalVisible(false);
    setSelectedRecipe(null);
    setCookingSteps([]);
  };

  // Handle search with real API
  const handleSearch = async () => {
    if (ingredients.length === 0) {
      messageApi.warning("Vui lòng thêm ít nhất một nguyên liệu!");
      return;
    }

    try {
      setLoading(true);

      // Check if user is authenticated
      const token = localStorage.getItem("token");
      if (!token) {
        messageApi.error("Vui lòng đăng nhập để sử dụng tính năng này!");
        return;
      }

      // Call the AI recipe generation API
      const response = await api.post(endpoints.ai.generateRecipes, {
        ingredients: ingredients,
      });

      console.log("API Response:", response.data);

      // Handle successful response
      if (response.data) {
        // Transform the API response to match our component's expected format
        const transformedRecipes = Array.isArray(response.data)
          ? response.data.map(transformRecipe)
          : [transformRecipe(response.data)];

        setSuggestions(transformedRecipes);
        messageApi.success(
          `Tìm thấy ${transformedRecipes.length} công thức phù hợp!`
        );
      } else {
        setSuggestions([]);
        messageApi.info(
          "Không tìm thấy công thức nào phù hợp với nguyên liệu của bạn."
        );
      }
    } catch (error) {
      console.error("Search error:", error);
      setSuggestions([]);

      // Handle different types of errors
      if (error.response?.status === 401) {
        messageApi.error("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại!");
        // Clear auth data
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("isAuthenticated");
      } else if (error.response?.status === 400) {
        messageApi.error(
          "Thông tin nguyên liệu không hợp lệ. Vui lòng kiểm tra lại!"
        );
      } else {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "Không thể tạo công thức. Vui lòng thử lại sau!";
        messageApi.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  // Transform API response to match component format
  const transformRecipe = (apiRecipe) => {
    return {
      id: apiRecipe.id,
      name: apiRecipe.name,
      time: apiRecipe.cookingTime || "30 phút",
      difficulty: mapComplexityToDifficulty(apiRecipe.complexity),
      calories: apiRecipe.totalCalories || 300,
      image: getRecipeEmoji(apiRecipe.name), // Generate emoji based on recipe name
      rating: apiRecipe.rating || 4.0,
      matchingIngredients:
        apiRecipe.ingredients?.length || ingredients.length,
      description: apiRecipe.description,
      origin: apiRecipe.origin,
      servings: apiRecipe.servings,
      fullIngredients: apiRecipe.ingredients,
    };
  };

  // Map API complexity to Vietnamese difficulty
  const mapComplexityToDifficulty = (complexity) => {
    switch (complexity?.toLowerCase()) {
      case "easy":
      case "1":
        return "Dễ";
      case "medium":
      case "2":
        return "Trung bình";
      case "hard":
      case "3":
        return "Khó";
      default:
        return "Trung bình";
    }
  };

  // Generate emoji based on recipe name (simple heuristic)
  const getRecipeEmoji = (recipeName) => {
    const name = recipeName?.toLowerCase() || "";
    if (name.includes("thịt heo") || name.includes("heo")) return "🍖";
    if (name.includes("thịt gà") || name.includes("gà")) return "🍗";
    if (name.includes("cá")) return "🐟";
    if (name.includes("tôm")) return "🦐";
    if (name.includes("canh") || name.includes("súp")) return "🍲";
    if (name.includes("cơm")) return "🍚";
    if (name.includes("mì") || name.includes("phở")) return "🍜";
    if (name.includes("xào")) return "🥘";
    return "🍽️"; // Default food emoji
  };

  return (
    <div
      style={{
        padding: "80px 20px",
        background: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      {contextHolder}
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <Title level={2} style={{ color: "#333", marginBottom: 16 }}>
            {INGREDIENTS.TITLE}
          </Title>
          <Text style={{ fontSize: "16px", color: "#666" }}>
            {INGREDIENTS.SUBTITLE}
          </Text>
        </div>

        <Row gutter={[32, 32]}>
          <Col xs={24} lg={12}>
            <IngredientsInput
              inputValue={inputValue}
              setInputValue={setInputValue}
              ingredients={ingredients}
              onAddIngredient={handleAddIngredient}
              onRemoveIngredient={handleRemoveIngredient}
              onSuggestionClick={handleSuggestionClick}
              onSearch={handleSearch}
              loading={loading}
              INGREDIENTS={INGREDIENTS}
            />
          </Col>

          <Col xs={24} lg={12}>
            <RecipeList
              loading={loading}
              suggestions={suggestions}
              onRecipeClick={handleRecipeClick}
              INGREDIENTS={INGREDIENTS}
            />
          </Col>
        </Row>
      </div>

      <RecipeDetailModal
        visible={modalVisible}
        onClose={handleModalClose}
        selectedRecipe={selectedRecipe}
        cookingSteps={cookingSteps}
        stepsLoading={stepsLoading}
      />
    </div>
  );
};

export default IngredientsSection; 