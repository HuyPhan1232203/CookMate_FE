import React from "react";
import { Typography } from "antd";
import "../styles/loginStyles.css";

const { Title, Text } = Typography;

const LoginHeader = ({ title, subtitle }) => {
  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "32px",
      }}
      className="animate-fadeInUp"
    >
      <div
        style={{
          fontSize: "3rem",
          marginBottom: "16px",
        }}
      >
        🍳
      </div>
      <Title
        level={2}
        style={{
          color: "white",
          marginBottom: "8px",
          fontWeight: "bold",
          textShadow: "0 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        {title}
      </Title>
      <Text
        style={{
          color: "rgba(255,255,255,0.9)",
          fontSize: "16px",
          textShadow: "0 1px 2px rgba(0,0,0,0.3)",
        }}
      >
        {subtitle}
      </Text>
    </div>
  );
};

export default LoginHeader;
