import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Typography,
  Card,
  Button,
  Tag,
  Space,
  Rate,
  Divider,
  Modal,
} from "antd";
import {
  ClockCircleOutlined,
  FireOutlined,
  HeartOutlined,
  ShareAltOutlined,
  StarFilled,
} from "@ant-design/icons";
import { RECIPES } from "@/constants/HomePage/RecipeShowcase";
import { Link, useNavigate } from "react-router-dom";
import api from "@/config/axios";
const { Title, Paragraph, Text } = Typography;

const RecipesShowcase = () => {
  const [top6Recipes, setTop6Recipes] = useState([]);
  const navigate = useNavigate();
  // Lấy role từ localStorage
  let role = "guest";
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.role) role = user.role;
  } catch {
    /* ignore */
  }

  const handleFavorite = () => {
    if (role === "guest") {
      Modal.info({
        title: "Notice",
        content: "You need to log in to use this feature!",
        okText: "Log in",
        onOk: () => navigate("/login"),
      });
      return;
    }
    // TODO: Handle favorite for user/admin here
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await api.get("/recipes");
        // Sort phía FE lấy 6 món rating cao nhất
        const sorted = res.data.data
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 6);
        setTop6Recipes(sorted);
      } catch {
        setTop6Recipes([]);
      }
    };
    fetchRecipes();
  }, []);

  // Render difficulty badge
  const getDifficultyColor = (difficulty) => {
    const colorMap = {
      EASY: "#52c41a",
      MEDIUM: "#faad14",
      HARD: "#f5222d",
    };
    return colorMap[difficulty] || "#faad14";
  };

  return (
    <div
      style={{
        padding: "100px 20px",
        background: "linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 0 0 8 0 8 8 0 8 0 8 0s0-8 0-8-8 0-8 0z'/%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.3,
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <Title
            level={2}
            style={{ color: "white", marginBottom: 16, fontSize: "2.5rem" }}
          >
            {RECIPES.TITLE}
          </Title>
          <Paragraph
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.9)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            {RECIPES.SUBTITLE}
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          {top6Recipes.map((recipe) => (
            <Col xs={24} sm={12} lg={8} key={recipe.id}>
              <Card
                hoverable
                style={{
                  borderRadius: 16,
                  border: "none",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  height: "100%",
                  overflow: "hidden",
                  background: "white",
                }}
                styles={{ body: { padding: 0 } }}
                cover={
                  <div
                    style={{
                      height: 200,
                      background:
                        "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "80px",
                      position: "relative",
                    }}
                  >
                    {recipe.image}
                    <div
                      style={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        background: "rgba(0,0,0,0.7)",
                        color: "white",
                        padding: "4px 8px",
                        borderRadius: 12,
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <StarFilled style={{ color: "#ffd700" }} />
                      {recipe.aiRating}
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        background: "rgba(255,255,255,0.9)",
                        color: "#ff4d4f",
                        padding: "6px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: "16px",
                      }}
                    >
                      <HeartOutlined />
                    </div>
                  </div>
                }
              >
                <div style={{ padding: "20px" }}>
                  <Title
                    level={4}
                    style={{ margin: 0, marginBottom: 8, color: "#333" }}
                  >
                    {recipe.name}
                  </Title>
                  {/* <Text
                    type="secondary"
                    style={{
                      fontSize: "13px",
                      display: "block",
                      marginBottom: 12,
                    }}
                  >
                    by {recipe.author}
                  </Text> */}
                  <Paragraph
                    style={{
                      color: "#666",
                      fontSize: "14px",
                      marginBottom: 16,
                      lineHeight: 1.5,
                    }}
                  >
                    {recipe.description}
                  </Paragraph>

                  <div style={{ marginBottom: 16 }}>
                    <Space wrap>
                      {recipe.tags &&
                        recipe.tags.map((tag) => (
                          <Tag
                            key={tag}
                            color="orange"
                            style={{ fontSize: "11px", padding: "2px 6px" }}
                          >
                            {tag}
                          </Tag>
                        ))}
                    </Space>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 16,
                    }}
                  >
                    <Space split={<Divider type="vertical" />}>
                      <Space>
                        <ClockCircleOutlined style={{ color: "#666" }} />
                        <Text style={{ fontSize: "12px" }}>
                          {recipe.cookingTime}
                        </Text>
                      </Space>
                      {/* <Space>
                        <FireOutlined style={{ color: "#ff6b35" }} />
                        <Text style={{ fontSize: "12px" }}>
                          {recipe.calories}
                        </Text>
                      </Space> */}
                      <Tag
                        color={getDifficultyColor(recipe.difficulty)}
                        style={{ margin: 0, fontSize: "11px" }}
                      >
                        {/* {RECIPES.DIFFICULTY[recipe.difficulty]} */}
                        {recipe.complexity}
                      </Tag>
                    </Space>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Rate
                        disabled
                        value={recipe.aiRating}
                        allowHalf
                        style={{ fontSize: "14px" }}
                      />
                      <Text
                        style={{
                          fontSize: "12px",
                          color: "#999",
                          marginLeft: 8,
                        }}
                      >
                        ({recipe.aiRating})
                      </Text>
                    </div>
                    <Space>
                      <Button
                        type="text"
                        icon={<HeartOutlined />}
                        size="small"
                        onClick={handleFavorite}
                      />
                      <Button
                        type="text"
                        icon={<ShareAltOutlined />}
                        size="small"
                      />
                    </Space>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link to="/recipes">
            <Button
              size="large"
              style={{
                padding: "0 32px",
                height: "48px",
                fontSize: "16px",
                borderRadius: "24px",
                background: "white",
                border: "none",
                color: "#ff6b35",
                fontWeight: "bold",
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
              }}
            >
              {RECIPES.BUTTONS.VIEW_MORE}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipesShowcase;
