import React from "react";
import { Row, Col, Typography, Button, Space } from "antd";
import { SearchOutlined, BookOutlined } from "@ant-design/icons";
import { HERO } from "@/constants/HomePage/HeroSection";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

const HeroSection = ({ onFindRecipesClick }) => {
  const navigate = useNavigate();

  return (
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
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
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
                  onClick={onFindRecipesClick}
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
                  onClick={() => navigate("/recipes")}
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
                  🍗
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

      <style>
        {`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}
      </style>
    </div>
  );
};

export default HeroSection;
