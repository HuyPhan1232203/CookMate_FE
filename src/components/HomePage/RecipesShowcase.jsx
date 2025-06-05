import React from "react";
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
} from "antd";
import {
  ClockCircleOutlined,
  FireOutlined,
  HeartOutlined,
  ShareAltOutlined,
  StarFilled,
} from "@ant-design/icons";
import { RECIPES } from "@/constants/HomePage/RecipeShowcase";

const { Title, Paragraph, Text } = Typography;

const RecipesShowcase = () => {
  // Mock data for featured recipes
  const featuredRecipes = [
    {
      id: 1,
      title: "Phở Bò Hà Nội",
      image: "🍜",
      cookTime: "2 giờ",
      difficulty: "HARD",
      calories: 450,
      rating: 4.8,
      ratingCount: 156,
      author: "Chef Minh",
      authorAvatar: "https://via.placeholder.com/50",
      description:
        "Món phở truyền thống với nước dùng đậm đà, thịt bò tươi ngon và bánh phở mềm mại.",
      isFeatured: true,
      tags: ["Truyền thống", "Món chính", "Bò"],
    },
    {
      id: 2,
      title: "Gà Teriyaki Nhật Bản",
      image: "🍗",
      cookTime: "45 phút",
      difficulty: "MEDIUM",
      calories: 380,
      rating: 4.6,
      ratingCount: 89,
      author: "Chef Hana",
      authorAvatar: "https://via.placeholder.com/50",
      description:
        "Gà nướng teriyaki với vị ngọt đậm đà, thơm lừng và hấp dẫn không thể chối từ.",
      isFeatured: false,
      tags: ["Nhật Bản", "Nướng", "Gà"],
    },
    {
      id: 3,
      title: "Cơm Âm Phủ",
      image: "🍚",
      cookTime: "1 giờ",
      difficulty: "MEDIUM",
      calories: 520,
      rating: 4.7,
      ratingCount: 124,
      author: "Chef Lan",
      authorAvatar: "https://via.placeholder.com/50",
      description:
        "Món cơm đặc biệt với nhiều loại nguyên liệu bổ dưỡng, đẹp mắt và ngon miệng.",
      isFeatured: true,
      tags: ["Sáng tạo", "Cơm", "Dinh dưỡng"],
    },
    {
      id: 4,
      title: "Bánh Mì Thịt Nướng",
      image: "🥖",
      cookTime: "30 phút",
      difficulty: "EASY",
      calories: 320,
      rating: 4.5,
      ratingCount: 203,
      author: "Chef Đức",
      authorAvatar: "https://via.placeholder.com/50",
      description:
        "Bánh mì giòn tan với thịt nướng thơm phức, rau củ tươi mát và nước sốt đặc biệt.",
      isFeatured: false,
      tags: ["Đường phố", "Nhanh", "Thịt nướng"],
    },
    {
      id: 5,
      title: "Lẩu Thái Chua Cay",
      image: "🍲",
      cookTime: "1.5 giờ",
      difficulty: "MEDIUM",
      calories: 280,
      rating: 4.9,
      ratingCount: 78,
      author: "Chef Thai",
      authorAvatar: "https://via.placeholder.com/50",
      description:
        "Lẩu Thái với vị chua cay đặc trưng, tôm tươi, nấm và rau củ đầy màu sắc.",
      isFeatured: false,
      tags: ["Thái Lan", "Lẩu", "Cay"],
    },
    {
      id: 6,
      title: "Chè Đậu Xanh",
      image: "🍨",
      cookTime: "1 giờ",
      difficulty: "EASY",
      calories: 220,
      rating: 4.4,
      ratingCount: 67,
      author: "Chef Mai",
      authorAvatar: "https://via.placeholder.com/50",
      description:
        "Món chè truyền thống với đậu xanh mềm ngọt, nước cốt dừa thơm béo.",
      isFeatured: false,
      tags: ["Tráng miệng", "Truyền thống", "Chè"],
    },
  ];

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
          {featuredRecipes.map((recipe) => (
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
                      {recipe.rating}
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
                    {recipe.title}
                  </Title>
                  <Text
                    type="secondary"
                    style={{
                      fontSize: "13px",
                      display: "block",
                      marginBottom: 12,
                    }}
                  >
                    by {recipe.author}
                  </Text>
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
                      {recipe.tags.map((tag) => (
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
                          {recipe.cookTime}
                        </Text>
                      </Space>
                      <Space>
                        <FireOutlined style={{ color: "#ff6b35" }} />
                        <Text style={{ fontSize: "12px" }}>
                          {recipe.calories}
                        </Text>
                      </Space>
                      <Tag
                        color={getDifficultyColor(recipe.difficulty)}
                        style={{ margin: 0, fontSize: "11px" }}
                      >
                        {RECIPES.DIFFICULTY[recipe.difficulty]}
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
                        value={Math.floor(recipe.rating)}
                        style={{ fontSize: "14px" }}
                      />
                      <Text
                        style={{
                          fontSize: "12px",
                          color: "#999",
                          marginLeft: 8,
                        }}
                      >
                        ({recipe.ratingCount})
                      </Text>
                    </div>
                    <Space>
                      <Button
                        type="text"
                        icon={<HeartOutlined />}
                        size="small"
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
        </div>
      </div>
    </div>
  );
};

export default RecipesShowcase;
