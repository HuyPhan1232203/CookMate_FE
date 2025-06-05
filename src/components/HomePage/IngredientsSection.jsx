import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Input,
  Button,
  Tag,
  Card,
  Empty,
  Spin,
  Space,
  List,
  Divider,
  Rate,
} from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  ClockCircleOutlined,
  FireOutlined,
} from "@ant-design/icons";
import { INGREDIENTS } from "@/constants/HomePage/IngredientsSection";

const { Title, Text } = Typography;

const IngredientsSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  // Mock data for ingredient suggestions
  const ingredientSuggestions = [
    "🍖 Thịt heo",
    "🍗 Thịt gà",
    "🐟 Cá",
    "🦐 Tôm",
    "🥚 Trứng",
    "🍅 Cà chua",
    "🧅 Hành tây",
    "🥕 Cà rốt",
    "🥬 Rau cải",
    "🌶️ Ớt",
    "🧄 Tỏi",
    "🫚 Gừng",
    "🌾 Gạo",
    "🍜 Mì",
    "🥔 Khoai tây",
  ];

  // Mock recipes for suggestions
  const mockRecipes = [
    {
      id: 1,
      name: "Thịt heo xào cà chua",
      time: "30 phút",
      difficulty: "Dễ",
      calories: 350,
      image: "🍖🍅",
      rating: 4.5,
      matchingIngredients: 3,
    },
    {
      id: 2,
      name: "Canh chua cá",
      time: "45 phút",
      difficulty: "Trung bình",
      calories: 280,
      image: "🐟🍲",
      rating: 4.7,
      matchingIngredients: 4,
    },
    {
      id: 3,
      name: "Cơm chiên dương châu",
      time: "20 phút",
      difficulty: "Dễ",
      calories: 420,
      image: "🍚🥚",
      rating: 4.3,
      matchingIngredients: 2,
    },
  ];

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

  // Handle search
  const handleSearch = () => {
    if (ingredients.length === 0) {
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSuggestions(mockRecipes);
      setLoading(false);
    }, 1500);
  };

  // Get appropriate color for difficulty level
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Dễ":
        return "#52c41a";
      case "Trung bình":
        return "#faad14";
      case "Khó":
        return "#ff4d4f";
      default:
        return "#d9d9d9";
    }
  };

  return (
    <div
      style={{
        padding: "80px 20px",
        background: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
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
            <Card
              title={INGREDIENTS.CARD_TITLE}
              style={{
                borderRadius: 16,
                border: "none",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                marginBottom: 24,
                height: "100%", // Ensure the card takes full height of its container
              }}
              styles={{
                header: {
                  background:
                    "linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)",
                  color: "white",
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                },
                body: {
                  display: "flex",
                  flexDirection: "column",
                  height: "calc(100% - 58px)", // Adjust for header height
                },
              }}
            >
              <div style={{ marginBottom: 20 }}>
                <Space.Compact style={{ width: "100%" }}>
                  <Input
                    placeholder={INGREDIENTS.INPUT_PLACEHOLDER}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onPressEnter={handleAddIngredient}
                    style={{ borderRadius: "8px 0 0 8px", height: 40 }}
                  />
                  <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={handleAddIngredient}
                    style={{
                      borderRadius: "0 8px 8px 0",
                      height: 40,
                      background: "#ff6b35",
                      borderColor: "#ff6b35",
                    }}
                  >
                    {INGREDIENTS.BUTTON_ADD}
                  </Button>
                </Space.Compact>
              </div>

              <div style={{ marginBottom: 20 }}>
                <Text strong style={{ display: "block", marginBottom: 12 }}>
                  {`${INGREDIENTS.SELECTED_INGREDIENTS} (${ingredients.length}):`}
                </Text>
                <div style={{ minHeight: 60 }}>
                  {ingredients.length > 0 ? (
                    <Space size="small" wrap>
                      {ingredients.map((ingredient, index) => (
                        <Tag
                          key={index}
                          closable
                          onClose={() => handleRemoveIngredient(ingredient)}
                          color="orange"
                          style={{
                            padding: "4px 12px",
                            borderRadius: 20,
                            fontSize: "14px",
                          }}
                        >
                          {ingredient}
                        </Tag>
                      ))}
                    </Space>
                  ) : (
                    <Text type="secondary">
                      {INGREDIENTS.EMPTY_INGREDIENTS}
                    </Text>
                  )}
                </div>
              </div>

              <div style={{ marginBottom: 24 }}>
                <Text strong style={{ display: "block", marginBottom: 12 }}>
                  {INGREDIENTS.POPULAR_SUGGESTIONS}
                </Text>
                <Space size={[8, 8]} wrap>
                  {ingredientSuggestions.map((suggestion, index) => (
                    <Tag
                      key={index}
                      color="#ff6b35"
                      style={{
                        cursor: "pointer",
                        padding: "4px 10px",
                        borderRadius: 12,
                      }}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </Tag>
                  ))}
                </Space>
              </div>

              <Button
                type="primary"
                size="large"
                icon={<SearchOutlined />}
                onClick={handleSearch}
                loading={loading}
                style={{
                  width: "100%",
                  height: 50,
                  borderRadius: 8,
                  fontSize: "16px",
                  background: "#ff6b35",
                  borderColor: "#ff6b35",
                  boxShadow: "0 4px 12px rgba(255, 107, 53, 0.3)",
                }}
              >
                {INGREDIENTS.BUTTON_SEARCH}
              </Button>
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Card
              title={INGREDIENTS.RECIPE_CARD_TITLE}
              style={{
                borderRadius: 16,
                border: "none",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                height: "100%",
              }}
              styles={{
                header: {
                  background:
                    "linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)",
                  color: "white",
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                },
                body: {
                  display: "flex",
                  alignItems: "center", // Center content vertically when empty/loading
                  justifyContent: "center",
                  minHeight: ingredients.length > 0 ? "400px" : "auto", // Minimum height when there are ingredients
                },
              }}
            >
              {loading ? (
                <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <Spin size="large" />
                  <Text style={{ display: "block", marginTop: 16 }}>
                    {INGREDIENTS.LOADING_TEXT}
                  </Text>
                </div>
              ) : suggestions.length > 0 ? (
                <List
                  dataSource={suggestions}
                  renderItem={(recipe) => (
                    <List.Item style={{ border: "none", padding: "16px 0" }}>
                      <Card
                        size="small"
                        hoverable
                        style={{ width: "100%", borderRadius: 12 }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 16,
                          }}
                        >
                          <div
                            style={{
                              fontSize: "40px",
                              background:
                                "linear-gradient(45deg, #ff6b35, #ffa726)",
                              borderRadius: 12,
                              padding: "12px",
                              minWidth: 70,
                              textAlign: "center",
                            }}
                          >
                            {recipe.image}
                          </div>
                          <div style={{ flex: 1 }}>
                            <Title
                              level={5}
                              style={{ margin: 0, marginBottom: 8 }}
                            >
                              {recipe.name}
                            </Title>
                            <Space split={<Divider type="vertical" />}>
                              <Space>
                                <ClockCircleOutlined />
                                {recipe.time}
                              </Space>
                              <Space>
                                <FireOutlined />
                                {`${recipe.calories} ${INGREDIENTS.CAL_SUFFIX}`}
                              </Space>
                              <Tag
                                color={getDifficultyColor(recipe.difficulty)}
                              >
                                {recipe.difficulty}
                              </Tag>
                            </Space>
                            <div style={{ marginTop: 8 }}>
                              <Rate
                                disabled
                                value={Math.floor(recipe.rating)}
                                size="small"
                              />
                              <Text style={{ marginLeft: 8, fontSize: "12px" }}>
                                {`${recipe.rating} ⭐ • ${recipe.matchingIngredients} ${INGREDIENTS.MATCHING_TEXT}`}
                              </Text>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </List.Item>
                  )}
                />
              ) : (
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description={INGREDIENTS.EMPTY_RESULTS}
                  style={{ padding: "60px 0" }}
                >
                  <Text type="secondary">{INGREDIENTS.EMPTY_SUGGESTION}</Text>
                </Empty>
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default IngredientsSection;
