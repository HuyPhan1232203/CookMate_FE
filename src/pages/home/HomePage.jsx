import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Input,
  Button,
  Tag,
  Space,
  Typography,
  Rate,
  Avatar,
  Form,
  message,
  Spin,
  Empty,
  Divider,
  List,
} from "antd";
import {
  SearchOutlined,
  BookOutlined,
  RocketOutlined,
  HeartOutlined,
  RobotOutlined,
  ClockCircleOutlined,
  SafetyOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  PlusOutlined,
  CloseOutlined,
  FireOutlined,
  UserOutlined,
  ShareAltOutlined,
  StarFilled,
  CommentOutlined,
  MailOutlined,
  CheckCircleOutlined,
  GiftOutlined,
  MobileOutlined,
  CloudDownloadOutlined,
} from "@ant-design/icons";
import "../../styles/animation.css";

const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;

const HomePage = () => {
  // States for ingredients input
  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  // Constants - replacing imports with direct values
  const HERO = {
    TITLE: "Nấu ăn thông minh với",
    TITLE_HIGHLIGHT: "CookMate AI",
    SUBTITLE:
      "Khám phá hàng ngàn công thức nấu ăn phù hợp với nguyên liệu bạn có. Hệ thống AI thông minh sẽ gợi ý những món ăn ngon nhất cho bạn!",
    BUTTONS: {
      PRIMARY: "Tìm công thức ngay",
      SECONDARY: "Xem thư viện công thức",
    },
    STATS: {
      RECIPES: { NUMBER: "1000+", LABEL: "Công thức" },
      USERS: { NUMBER: "50K+", LABEL: "Người dùng" },
      RATING: { NUMBER: "4.8★", LABEL: "Đánh giá" },
    },
  };

  const INGREDIENTS = {
    TITLE: "🥘 Tìm công thức từ nguyên liệu có sẵn",
    SUBTITLE:
      "Nhập các nguyên liệu bạn có, chúng tôi sẽ gợi ý những món ăn ngon nhất cho bạn!",
    CARD_TITLE: "🛒 Nguyên liệu của bạn",
    INPUT_PLACEHOLDER: "Thêm nguyên liệu...",
    BUTTON_ADD: "Thêm",
    BUTTON_SEARCH: " Tìm công thức",
  };

  const RECIPES = {
    TITLE: "🔥 Công thức nổi bật",
    SUBTITLE:
      "Khám phá những công thức được yêu thích nhất từ cộng đồng CookMate",
    DIFFICULTY: { EASY: "Dễ", MEDIUM: "Trung bình", HARD: "Khó" },
  };

  const TESTIMONIALS = {
    TITLE: "💬 Người dùng nói gì về CookMate",
    SUBTITLE:
      "Hơn 50,000 người dùng đã tin tưởng và sử dụng CookMate trong hành trình nấu ăn của họ",
    STATS: {
      RATING: { NUMBER: "4.8/5", LABEL: "Đánh giá trung bình" },
      USERS: { NUMBER: "50K+", LABEL: "Người dùng hài lòng" },
      RECOMMENDATION: { NUMBER: "98%", LABEL: "Tỷ lệ giới thiệu" },
    },
  };

  // Mock data
  const ingredientSuggestions = [
    "🍖 Thịt heo",
    "🍗 Thịt gà",
    "🐟 Cá",
    "🦐 Tôm",
    "🥚 Trứng",
    "🍅 Cà chua",
    "🧅 Hành tây",
    "🥕 Cà rót",
    "🥬 Rau cải",
    "🌶️ Ớt",
    "🧄 Tỏi",
    "🫚 Gừng",
    "🌾 Gạo",
    "🍜 Mì",
    "🥔 Khoai tây",
  ];

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

  // Functions for ingredients input
  const handleAddIngredient = () => {
    if (inputValue.trim() && !ingredients.includes(inputValue.trim())) {
      setIngredients([...ingredients, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveIngredient = (ingredient) => {
    setIngredients(ingredients.filter((item) => item !== ingredient));
  };

  const handleSearch = () => {
    if (ingredients.length === 0) {
      message.warning("Vui lòng thêm ít nhất một nguyên liệu!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setSuggestions(mockRecipes);
      setLoading(false);
      message.success(`Tìm thấy ${mockRecipes.length} công thức phù hợp!`);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion) => {
    const ingredient = suggestion.replace(/[^a-zA-ZÀ-ỹ\s]/g, "").trim();
    if (!ingredients.includes(ingredient)) {
      setIngredients([...ingredients, ingredient]);
    }
  };

  const handleEmailSubmit = (values) => {
    console.log("Email subscription:", values);
    form.resetFields();
  };

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
    <div>
      {/* HeroSection - Inline */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #ff6b35 0%, #ff8c42 50%, #ffa726 100%)",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          padding: "60px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.1,
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            zIndex: 1,
            position: "relative",
          }}
        >
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                <div>
                  <Title
                    level={1}
                    style={{
                      color: "white",
                      fontSize: "3.5rem",
                      fontWeight: "bold",
                      marginBottom: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {HERO.TITLE}
                    <span
                      style={{
                        background:
                          "linear-gradient(45deg, #fff 30%, #ffeb3b 90%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        display: "block",
                      }}
                    >
                      {HERO.TITLE_HIGHLIGHT}
                    </span>
                  </Title>
                </div>

                <Paragraph
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "1.2rem",
                    lineHeight: 1.6,
                    maxWidth: "500px",
                  }}
                >
                  {HERO.SUBTITLE}
                </Paragraph>

                <Space size="middle" wrap>
                  <Button
                    type="primary"
                    size="large"
                    icon={<SearchOutlined />}
                    style={{
                      background: "white",
                      borderColor: "white",
                      color: "#ff6b35",
                      fontWeight: "bold",
                      height: "50px",
                      padding: "0 32px",
                      fontSize: "16px",
                    }}
                  >
                    {HERO.BUTTONS.PRIMARY}
                  </Button>
                  <Button
                    size="large"
                    icon={<BookOutlined />}
                    style={{
                      background: "transparent",
                      borderColor: "white",
                      color: "white",
                      fontWeight: "bold",
                      height: "50px",
                      padding: "0 32px",
                      fontSize: "16px",
                    }}
                  >
                    {HERO.BUTTONS.SECONDARY}
                  </Button>
                </Space>

                <Row gutter={24} style={{ marginTop: 40 }}>
                  <Col span={8}>
                    <div style={{ textAlign: "center" }}>
                      <Title level={2} style={{ color: "white", margin: 0 }}>
                        {HERO.STATS.RECIPES.NUMBER}
                      </Title>
                      <span style={{ color: "rgba(255,255,255,0.8)" }}>
                        {HERO.STATS.RECIPES.LABEL}
                      </span>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div style={{ textAlign: "center" }}>
                      <Title level={2} style={{ color: "white", margin: 0 }}>
                        {HERO.STATS.USERS.NUMBER}
                      </Title>
                      <span style={{ color: "rgba(255,255,255,0.8)" }}>
                        {HERO.STATS.USERS.LABEL}
                      </span>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div style={{ textAlign: "center" }}>
                      <Title level={2} style={{ color: "white", margin: 0 }}>
                        {HERO.STATS.RATING.NUMBER}
                      </Title>
                      <span style={{ color: "rgba(255,255,255,0.8)" }}>
                        {HERO.STATS.RATING.LABEL}
                      </span>
                    </div>
                  </Col>
                </Row>
              </Space>
            </Col>

            <Col xs={24} lg={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "500px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "400px",
                    height: "400px",
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    backdropFilter: "blur(10px)",
                    border: "2px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "120px",
                      animation: "float 3s ease-in-out infinite",
                    }}
                  >
                    🍳
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "20%",
                      right: "10%",
                      fontSize: "30px",
                      animation: "float 2s ease-in-out infinite reverse",
                    }}
                  >
                    🥕
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "20%",
                      left: "15%",
                      fontSize: "25px",
                      animation: "float 2.5s ease-in-out infinite",
                    }}
                  >
                    🧄
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "40%",
                      left: "5%",
                      fontSize: "20px",
                      animation: "float 3.5s ease-in-out infinite reverse",
                    }}
                  >
                    🌶️
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* IngredientsInput Section - Inline */}
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
                }}
                styles={{
                  header: {
                    background:
                      "linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)",
                    color: "white",
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
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
                    Nguyên liệu đã chọn ({ingredients.length}):
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
                        Chưa có nguyên liệu nào được chọn
                      </Text>
                    )}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <Text strong style={{ display: "block", marginBottom: 12 }}>
                    💡 Gợi ý nguyên liệu phổ biến:
                  </Text>
                  <Space size={[8, 8]} wrap>
                    {ingredientSuggestions.map((suggestion, index) => (
                      <Tag
                        key={index}
                        color="blue"
                        style={{
                          cursor: "pointer",
                          padding: "4px 8px",
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
                title="🍽️ Công thức phù hợp"
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
                }}
              >
                {loading ? (
                  <div style={{ textAlign: "center", padding: "60px 0" }}>
                    <Spin size="large" />
                    <Text style={{ display: "block", marginTop: 16 }}>
                      Đang tìm kiếm công thức phù hợp...
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
                                  {recipe.calories} cal
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
                                <Text
                                  style={{ marginLeft: 8, fontSize: "12px" }}
                                >
                                  {recipe.rating} ⭐ •{" "}
                                  {recipe.matchingIngredients} nguyên liệu phù
                                  hợp
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
                    description="Chưa có kết quả tìm kiếm"
                    style={{ padding: "60px 0" }}
                  >
                    <Text type="secondary">
                      Thêm nguyên liệu và nhấn "Tìm công thức" để xem gợi ý
                    </Text>
                  </Empty>
                )}
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* FeaturesSection - Inline */}
      <div style={{ padding: "100px 20px", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <Title
              level={2}
              style={{ color: "#333", marginBottom: 16, fontSize: "2.5rem" }}
            >
              ✨ Tính năng nổi bật
            </Title>
            <Paragraph
              style={{
                fontSize: "18px",
                color: "#666",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              CookMate mang đến trải nghiệm nấu ăn hoàn toàn mới với công nghệ
              AI tiên tiến và giao diện thân thiện với người dùng.
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {[
              {
                icon: (
                  <RobotOutlined style={{ fontSize: 48, color: "#ff6b35" }} />
                ),
                title: "AI Thông Minh",
                description:
                  "Hệ thống AI tiên tiến phân tích nguyên liệu và gợi ý công thức phù hợp nhất với sở thích của bạn.",
                gradient: "linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)",
              },
              {
                icon: (
                  <HeartOutlined style={{ fontSize: 48, color: "#ff6b35" }} />
                ),
                title: "Yêu Thích Cá Nhân",
                description:
                  "Lưu trữ và quản lý các công thức yêu thích, tạo danh sách riêng cho từng dịp đặc biệt.",
                gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              },
              {
                icon: (
                  <ClockCircleOutlined
                    style={{ fontSize: 48, color: "#ff6b35" }}
                  />
                ),
                title: "Tiết Kiệm Thời Gian",
                description:
                  "Tìm công thức nhanh chóng dựa trên thời gian nấu, độ khó và số lượng người ăn.",
                gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
              },
              {
                icon: (
                  <SafetyOutlined style={{ fontSize: 48, color: "#ff6b35" }} />
                ),
                title: "An Toàn Sức Khỏe",
                description:
                  "Thông tin dinh dưỡng chi tiết, cảnh báo dị ứng và gợi ý chế độ ăn phù hợp.",
                gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
              },
              {
                icon: (
                  <TeamOutlined style={{ fontSize: 48, color: "#ff6b35" }} />
                ),
                title: "Cộng Đồng",
                description:
                  "Chia sẻ công thức, đánh giá và học hỏi từ cộng đồng những người yêu thích nấu ăn.",
                gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
              },
              {
                icon: (
                  <ThunderboltOutlined
                    style={{ fontSize: 48, color: "#ff6b35" }}
                  />
                ),
                title: "Cập Nhật Liên Tục",
                description:
                  "Thư viện công thức được cập nhật thường xuyên với những món ăn mới và xu hướng ẩm thực.",
                gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
              },
            ].map((feature, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card
                  hoverable
                  style={{
                    borderRadius: 20,
                    border: "none",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    height: "100%",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                  }}
                  styles={{
                    body: {
                      padding: "32px 24px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    },
                  }}
                >
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: feature.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 24px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 4,
                        borderRadius: "50%",
                        background: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {feature.icon}
                    </div>
                  </div>

                  <div style={{ textAlign: "center", flex: 1 }}>
                    <Title
                      level={4}
                      style={{
                        color: "#333",
                        marginBottom: 16,
                        fontSize: "1.3rem",
                      }}
                    >
                      {feature.title}
                    </Title>
                    <Paragraph
                      style={{
                        color: "#666",
                        fontSize: "15px",
                        lineHeight: 1.6,
                      }}
                    >
                      {feature.description}
                    </Paragraph>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          <div
            style={{
              textAlign: "center",
              marginTop: 80,
              padding: "40px",
              background: "linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)",
              borderRadius: 20,
              color: "white",
            }}
          >
            <Title level={3} style={{ color: "white", marginBottom: 16 }}>
              🚀 Sẵn sàng khám phá?
            </Title>
            <Paragraph
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "16px",
                marginBottom: 0,
              }}
            >
              Hãy bắt đầu hành trình nấu ăn thú vị cùng CookMate ngay hôm nay!
            </Paragraph>
          </div>
        </div>
      </div>

      {/* RecipeShowcase - Inline */}
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
            {[
              {
                id: 1,
                name: "Phở Bò Hà Nội",
                description:
                  "Món phở truyền thống với nước dùng đậm đà, thịt bò tươi ngon và bánh phở mềm mại.",
                image: "🍜",
                time: "2 giờ",
                difficulty: "Khó",
                calories: 450,
                rating: 4.8,
                reviews: 156,
                chef: "Chef Minh",
                tags: ["Truyền thống", "Món chính", "Bò"],
              },
              {
                id: 2,
                name: "Gà Teriyaki Nhật Bản",
                description:
                  "Gà nướng teriyaki với vị ngọt đậm đà, thơm lừng và hấp dẫn không thể chối từ.",
                image: "🍗",
                time: "45 phút",
                difficulty: "Trung bình",
                calories: 380,
                rating: 4.6,
                reviews: 89,
                chef: "Chef Hana",
                tags: ["Nhật Bản", "Nướng", "Gà"],
              },
              {
                id: 3,
                name: "Cơm Âm Phủ",
                description:
                  "Món cơm đặc biệt với nhiều loại nguyên liệu bổ dưỡng, đẹp mắt và ngon miệng.",
                image: "🍚",
                time: "1 giờ",
                difficulty: "Trung bình",
                calories: 520,
                rating: 4.7,
                reviews: 124,
                chef: "Chef Lan",
                tags: ["Sáng tạo", "Cơm", "Dinh dưỡng"],
              },
              {
                id: 4,
                name: "Bánh Mì Thịt Nướng",
                description:
                  "Bánh mì giòn tan với thịt nướng thơm phức, rau củ tươi mát và nước sốt đặc biệt.",
                image: "🥖",
                time: "30 phút",
                difficulty: "Dễ",
                calories: 320,
                rating: 4.5,
                reviews: 203,
                chef: "Chef Đức",
                tags: ["Đường phố", "Nhanh", "Thịt nướng"],
              },
              {
                id: 5,
                name: "Lẩu Thái Chua Cay",
                description:
                  "Lẩu Thái với vị chua cay đặc trưng, tôm tươi, nấm và rau củ đầy màu sắc.",
                image: "🍲",
                time: "1.5 giờ",
                difficulty: "Trung bình",
                calories: 280,
                rating: 4.9,
                reviews: 78,
                chef: "Chef Thai",
                tags: ["Thái Lan", "Lẩu", "Cay"],
              },
              {
                id: 6,
                name: "Chè Đậu Xanh",
                description:
                  "Món chè truyền thống với đậu xanh mềm ngọt, nước cốt dừa thơm béo.",
                image: "🍨",
                time: "1 giờ",
                difficulty: "Dễ",
                calories: 220,
                rating: 4.4,
                reviews: 67,
                chef: "Chef Mai",
                tags: ["Tráng miệng", "Truyền thống", "Chè"],
              },
            ].map((recipe) => (
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
                  bodyStyle={{ padding: 0 }}
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
                      {recipe.name}
                    </Title>
                    <Text
                      type="secondary"
                      style={{
                        fontSize: "13px",
                        display: "block",
                        marginBottom: 12,
                      }}
                    >
                      by {recipe.chef}
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
                            {recipe.time}
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
                          {recipe.difficulty}
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
                          ({recipe.reviews})
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
        </div>
      </div>

      {/* TestimonialsSection - Inline */}
      <div style={{ padding: "100px 20px", background: "#f8f9fa" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <Title
              level={2}
              style={{ color: "#333", marginBottom: 16, fontSize: "2.5rem" }}
            >
              {TESTIMONIALS.TITLE}
            </Title>
            <Paragraph
              style={{
                fontSize: "18px",
                color: "#666",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              {TESTIMONIALS.SUBTITLE}
            </Paragraph>

            <Row gutter={48} style={{ marginTop: 40 }}>
              <Col xs={24} sm={8}>
                <div style={{ textAlign: "center" }}>
                  <Title level={2} style={{ color: "#ff6b35", margin: 0 }}>
                    {TESTIMONIALS.STATS.RATING.NUMBER}
                  </Title>
                  <Text style={{ color: "#666" }}>
                    {TESTIMONIALS.STATS.RATING.LABEL}
                  </Text>
                </div>
              </Col>
              <Col xs={24} sm={8}>
                <div style={{ textAlign: "center" }}>
                  <Title level={2} style={{ color: "#ff6b35", margin: 0 }}>
                    {TESTIMONIALS.STATS.USERS.NUMBER}
                  </Title>
                  <Text style={{ color: "#666" }}>
                    {TESTIMONIALS.STATS.USERS.LABEL}
                  </Text>
                </div>
              </Col>
              <Col xs={24} sm={8}>
                <div style={{ textAlign: "center" }}>
                  <Title level={2} style={{ color: "#ff6b35", margin: 0 }}>
                    {TESTIMONIALS.STATS.RECOMMENDATION.NUMBER}
                  </Title>
                  <Text style={{ color: "#666" }}>
                    {TESTIMONIALS.STATS.RECOMMENDATION.LABEL}
                  </Text>
                </div>
              </Col>
            </Row>
          </div>

          <Row gutter={[24, 24]}>
            {[
              {
                id: 1,
                name: "Nguyễn Minh Anh",
                role: "Mẹ bỉm sữa",
                avatar: "👩‍💼",
                rating: 5,
                comment:
                  "CookMate đã giúp tôi tìm ra rất nhiều món ăn ngon từ những nguyên liệu đơn giản trong tủ lạnh. Đặc biệt hữu ích cho những bữa cơm gia đình!",
                highlight: "Tiết kiệm thời gian",
              },
              {
                id: 2,
                name: "Trần Văn Đức",
                role: "Sinh viên đại học",
                avatar: "👨‍🎓",
                rating: 5,
                comment:
                  "Là sinh viên sống xa nhà, CookMate như người bạn đồng hành giúp tôi nấu những món ăn ngon mà không tốn kém. AI gợi ý rất chính xác!",
                highlight: "Phù hợp sinh viên",
              },
              {
                id: 3,
                name: "Lê Thị Hương",
                role: "Chuyên gia dinh dưỡng",
                avatar: "👩‍⚕️",
                rating: 5,
                comment:
                  "Tôi rất ấn tượng với tính năng tính toán calories và giá trị dinh dưỡng của CookMate. Đây là công cụ tuyệt vời cho người quan tâm đến sức khỏe.",
                highlight: "Thông tin dinh dưỡng chính xác",
              },
              {
                id: 4,
                name: "Phạm Hoàng Nam",
                role: "Đầu bếp chuyên nghiệp",
                avatar: "👨‍🍳",
                rating: 4,
                comment:
                  "Với kinh nghiệm 10 năm trong ngành, tôi thấy CookMate có thư viện công thức phong phú và hướng dẫn chi tiết. Rất phù hợp cho người mới bắt đầu.",
                highlight: "Thư viện phong phú",
              },
              {
                id: 5,
                name: "Võ Thanh Lan",
                role: "Nhân viên văn phòng",
                avatar: "👩‍💻",
                rating: 5,
                comment:
                  "Sau một ngày làm việc mệt mỏi, CookMate giúp tôi nhanh chóng tìm ra món ăn phù hợp với thời gian và nguyên liệu có sẵn. Rất tiện lợi!",
                highlight: "Giao diện thân thiện",
              },
              {
                id: 6,
                name: "Hoàng Minh Tuấn",
                role: "Food blogger",
                avatar: "📝",
                rating: 5,
                comment:
                  "CookMate không chỉ gợi ý công thức mà còn giúp tôi khám phá những món ăn mới lạ để review. Tính năng AI thực sự thông minh và hữu ích.",
                highlight: "Khám phá món mới",
              },
            ].map((testimonial) => (
              <Col xs={24} sm={12} lg={8} key={testimonial.id}>
                <Card
                  style={{
                    borderRadius: 16,
                    border: "none",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                    height: "100%",
                    position: "relative",
                    background: "white",
                  }}
                  styles={{
                    body: {
                      padding: "24px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    },
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: -10,
                      right: 20,
                      background: "linear-gradient(135deg, #ff6b35, #ff8c42)",
                      color: "white",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                    }}
                  >
                    <CommentOutlined />
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <Space align="center" style={{ marginBottom: 12 }}>
                      <div
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "20px",
                        }}
                      >
                        {testimonial.avatar}
                      </div>
                      <div>
                        <Title level={5} style={{ margin: 0, color: "#333" }}>
                          {testimonial.name}
                        </Title>
                        <Text type="secondary" style={{ fontSize: "13px" }}>
                          {testimonial.role}
                        </Text>
                      </div>
                    </Space>

                    <Rate
                      disabled
                      defaultValue={testimonial.rating}
                      style={{ fontSize: "16px" }}
                    />
                  </div>

                  <div style={{ flex: 1 }}>
                    <Paragraph
                      style={{
                        color: "#666",
                        fontSize: "15px",
                        lineHeight: 1.6,
                        fontStyle: "italic",
                        marginBottom: 16,
                      }}
                    >
                      "{testimonial.comment}"
                    </Paragraph>
                    <Tag color="orange" style={{ fontSize: "12px" }}>
                      {testimonial.highlight}
                    </Tag>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* CallToActionSection - Inline */}
      <div
        style={{
          padding: "120px 20px",
          background: "linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            transform: "rotate(45deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-30px",
            left: "-30px",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
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
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      background: "rgba(255,255,255,0.2)",
                      padding: "8px 16px",
                      borderRadius: 20,
                      marginBottom: 24,
                    }}
                  >
                    <GiftOutlined
                      style={{ color: "#ffeb3b", marginRight: 8 }}
                    />
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      Miễn phí 30 ngày đầu
                    </Text>
                  </div>

                  <Title
                    level={1}
                    style={{
                      color: "white",
                      marginBottom: 20,
                      fontSize: "3rem",
                      fontWeight: "bold",
                      lineHeight: 1.2,
                    }}
                  >
                    Bắt đầu hành trình
                    <span
                      style={{
                        display: "block",
                        background: "linear-gradient(45deg, #ffeb3b, #ff9800)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      nấu ăn thông minh
                    </span>
                    ngay hôm nay!
                  </Title>
                </div>

                <Paragraph
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "18px",
                    lineHeight: 1.6,
                    marginBottom: 30,
                  }}
                >
                  Tham gia cùng hàng ngàn người đã tin tưởng CookMate. Khám phá
                  thế giới ẩm thực với sự hỗ trợ của AI tiên tiến!
                </Paragraph>

                <div style={{ marginBottom: 30 }}>
                  <Row gutter={[12, 12]}>
                    {[
                      "Gợi ý công thức thông minh từ AI",
                      "Thư viện 1000+ công thức đa dạng",
                      "Tính toán dinh dưỡng tự động",
                      "Lưu trữ công thức yêu thích",
                      "Chia sẻ với cộng đồng",
                      "Cập nhật xu hướng ẩm thực mới",
                    ].map((feature, index) => (
                      <Col span={12} key={index}>
                        <Space align="start" size="small">
                          <CheckCircleOutlined
                            style={{
                              color: "#4caf50",
                              fontSize: "16px",
                              marginTop: 2,
                            }}
                          />
                          <Text
                            style={{
                              color: "rgba(255,255,255,0.9)",
                              fontSize: "14px",
                            }}
                          >
                            {feature}
                          </Text>
                        </Space>
                      </Col>
                    ))}
                  </Row>
                </div>

                <Space size="middle" wrap>
                  <Button
                    type="primary"
                    size="large"
                    icon={<RocketOutlined />}
                    style={{
                      background: "linear-gradient(135deg, #ff6b35, #ff8c42)",
                      borderColor: "transparent",
                      fontWeight: "bold",
                      height: "50px",
                      padding: "0 32px",
                      fontSize: "16px",
                      borderRadius: 25,
                      boxShadow: "0 4px 15px rgba(255, 107, 53, 0.4)",
                    }}
                  >
                    Dùng thử miễn phí
                  </Button>
                  <Button
                    size="large"
                    icon={<MobileOutlined />}
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      borderColor: "rgba(255,255,255,0.3)",
                      color: "white",
                      fontWeight: "bold",
                      height: "50px",
                      padding: "0 32px",
                      fontSize: "16px",
                      borderRadius: 25,
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    Tải ứng dụng
                  </Button>
                </Space>

                <div style={{ marginTop: 40 }}>
                  <Row gutter={24}>
                    <Col span={8}>
                      <div style={{ textAlign: "center" }}>
                        <Title
                          level={3}
                          style={{ color: "#ffeb3b", margin: 0 }}
                        >
                          50K+
                        </Title>
                        <Text
                          style={{
                            color: "rgba(255,255,255,0.8)",
                            fontSize: "12px",
                          }}
                        >
                          Người dùng
                        </Text>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div style={{ textAlign: "center" }}>
                        <Title
                          level={3}
                          style={{ color: "#4caf50", margin: 0 }}
                        >
                          1K+
                        </Title>
                        <Text
                          style={{
                            color: "rgba(255,255,255,0.8)",
                            fontSize: "12px",
                          }}
                        >
                          Công thức
                        </Text>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div style={{ textAlign: "center" }}>
                        <Title
                          level={3}
                          style={{ color: "#ff9800", margin: 0 }}
                        >
                          4.8★
                        </Title>
                        <Text
                          style={{
                            color: "rgba(255,255,255,0.8)",
                            fontSize: "12px",
                          }}
                        >
                          Đánh giá
                        </Text>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Space>
            </Col>

            <Col xs={24} lg={12}>
              <Card
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 20,
                  color: "white",
                }}
              >
                <Title
                  level={3}
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginBottom: 24,
                  }}
                >
                  📧 Đăng ký nhận thông tin mới nhất
                </Title>
                <Text
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    display: "block",
                    textAlign: "center",
                    marginBottom: 24,
                  }}
                >
                  Nhận những công thức mới, tips nấu ăn và ưu đãi đặc biệt
                </Text>
                <Form form={form} onFinish={handleEmailSubmit}>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Vui lòng nhập email!" },
                      { type: "email", message: "Email không hợp lệ!" },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Nhập email của bạn..."
                      prefix={<MailOutlined />}
                      style={{ borderRadius: 12 }}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      block
                      style={{
                        background: "white",
                        color: "#ff6b35",
                        borderColor: "white",
                        fontWeight: "bold",
                        borderRadius: 12,
                        height: 50,
                      }}
                    >
                      Đăng ký ngay
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
