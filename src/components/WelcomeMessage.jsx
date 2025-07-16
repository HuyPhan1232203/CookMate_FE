import React, { useState, useEffect } from "react";
import { Card, Typography, Avatar, Space, Tag } from "antd";
import { UserOutlined, CrownOutlined, StarOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const WelcomeMessage = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = () => {
      const userData = localStorage.getItem("user");
      const authStatus = localStorage.getItem("isAuthenticated");

      if (userData && authStatus === "true") {
        try {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
          setIsAuthenticated(true);
          // eslint-disable-next-line no-unused-vars
        } catch (error) {
          setUser(null);
          setIsAuthenticated(false);
        }
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();

    // Listen for changes
    const interval = setInterval(checkAuthStatus, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isAuthenticated || !user) {
    return null;
  }

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const getRoleIcon = () => {
    switch (user.role) {
      case "admin":
        return <CrownOutlined style={{ color: "#ff4d4f" }} />;
      case "chef":
        return <StarOutlined style={{ color: "#52c41a" }} />;
      default:
        return <UserOutlined style={{ color: "#1890ff" }} />;
    }
  };

  const getRoleColor = () => {
    switch (user.role) {
      case "admin":
        return "#ff4d4f";
      case "chef":
        return "#52c41a";
      default:
        return "#1890ff";
    }
  };

  const getRoleText = () => {
    switch (user.role) {
      case "admin":
        return "Admin";
      case "chef":
        return "Chef";
      default:
        return "User";
    }
  };

  return (
    <Card
      style={{
        background:
          "linear-gradient(135deg, #ff6b35 0%, #ff8c42 50%, #ffa726 100%)",
        border: "none",
        borderRadius: "16px",
        marginBottom: "24px",
        overflow: "hidden",
      }}
      bodyStyle={{ padding: "24px" }}
    >
      <div style={{ position: "relative" }}>
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100px",
            height: "100px",
            opacity: 0.1,
            fontSize: "80px",
          }}
        >
          🍳
        </div>

        <Space align="start" size={16}>
          <Avatar
            size={64}
            src={user.avatar}
            icon={!user.avatar && <UserOutlined />}
            style={{
              backgroundColor: user.avatar
                ? "transparent"
                : "rgba(255,255,255,0.3)",
              border: "3px solid rgba(255,255,255,0.3)",
            }}
          />

          <div>
            <Title
              level={3}
              style={{
                color: "white",
                margin: 0,
                marginBottom: "4px",
                textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                fontSize: "24px",
              }}
            >
              {getGreeting()}, {user.username}! 👋
            </Title>

            <Space size={8} style={{ marginBottom: "8px" }}>
              <Tag
                icon={getRoleIcon()}
                color={getRoleColor()}
                style={{
                  borderRadius: "20px",
                  padding: "4px 12px",
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                {getRoleText()}
              </Tag>
            </Space>

            <Text
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "14px",
                textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                display: "block",
                lineHeight: "1.4",
              }}
            >
              What do you want to cook today? Discover amazing recipes from
              CookMate! 🍽️
            </Text>
          </div>
        </Space>
      </div>
    </Card>
  );
};

export default WelcomeMessage;
