import React from "react";
import { Row, Col, Typography, Card } from "antd";
import {
  RobotOutlined,
  HeartOutlined,
  ClockCircleOutlined,
  SafetyOutlined,
  TeamOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { FEATURES } from "@/constants/HomePage/FeatueSection";

const { Title, Paragraph } = Typography;

const FeaturesSection = () => {
  const featureItems = [
    {
      icon: <RobotOutlined style={{ fontSize: 48, color: "#ff6b35" }} />,
      title: FEATURES.ITEMS[0].title,
      description: FEATURES.ITEMS[0].description,
      gradient: "linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)",
    },
    {
      icon: <HeartOutlined style={{ fontSize: 48, color: "#ff6b35" }} />,
      title: FEATURES.ITEMS[1].title,
      description: FEATURES.ITEMS[1].description,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      icon: <ClockCircleOutlined style={{ fontSize: 48, color: "#ff6b35" }} />,
      title: FEATURES.ITEMS[2].title,
      description: FEATURES.ITEMS[2].description,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      icon: <SafetyOutlined style={{ fontSize: 48, color: "#ff6b35" }} />,
      title: FEATURES.ITEMS[3].title,
      description: FEATURES.ITEMS[3].description,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      icon: <TeamOutlined style={{ fontSize: 48, color: "#ff6b35" }} />,
      title: FEATURES.ITEMS[4].title,
      description: FEATURES.ITEMS[4].description,
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      icon: <ThunderboltOutlined style={{ fontSize: 48, color: "#ff6b35" }} />,
      title: FEATURES.ITEMS[5].title,
      description: FEATURES.ITEMS[5].description,
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    },
  ];

  return (
    <div style={{ padding: "100px 20px", background: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <Title
            level={2}
            style={{ color: "#333", marginBottom: 16, fontSize: "2.5rem" }}
          >
            {FEATURES.TITLE}
          </Title>
          <Paragraph
            style={{
              fontSize: "18px",
              color: "#666",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            {FEATURES.SUBTITLE}
          </Paragraph>
        </div>

        <Row gutter={[32, 32]}>
          {featureItems.map((feature, index) => (
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
            {FEATURES.CTA.TITLE}
          </Title>
          <Paragraph
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "16px",
              marginBottom: 24,
            }}
          >
            {FEATURES.CTA.SUBTITLE}
          </Paragraph>
          <button
            style={{
              background: "white",
              color: "#ff6b35",
              border: "none",
              borderRadius: 8,
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
            }}
          >
            {FEATURES.CTA.BUTTON}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
