import React from "react";
import { Button, Typography, Space } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, SearchOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const NotFoundPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #fff8f0 0%, #fff0e6 100%)",
        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "600px",
          padding: "40px",
          borderRadius: "20px",
          background: "white",
          boxShadow: "0 15px 30px rgba(0,0,0,0.05)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Góc trang trí */}
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            background: "#ff6b35",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            opacity: "0.1",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "-30px",
            left: "-30px",
            background: "#ff8c42",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            opacity: "0.1",
          }}
        ></div>

        {/* Emoji món ăn */}
        <div
          style={{
            fontSize: "80px",
            lineHeight: 1,
            marginBottom: "20px",
            display: "inline-block",
            animation: "float 3s ease-in-out infinite",
          }}
        >
          🍳
        </div>

        <Title level={1} style={{ marginBottom: "10px", color: "#ff6b35" }}>
          Oops! Công thức không tìm thấy
        </Title>

        <Text
          style={{
            fontSize: "18px",
            display: "block",
            marginBottom: "30px",
            color: "#666",
          }}
        >
          Chúng tôi đã tìm trong mọi ngóc ngách nhà bếp, nhưng không thể tìm
          thấy trang mà bạn đang tìm kiếm.
        </Text>

        <Space size="middle" wrap style={{ justifyContent: "center" }}>
          <Link to="/">
            <Button
              type="primary"
              size="large"
              icon={<HomeOutlined />}
              style={{
                backgroundColor: "#ff6b35",
                borderColor: "#ff6b35",
                height: "48px",
                padding: "0 24px",
                borderRadius: "24px",
                fontSize: "16px",
              }}
            >
              Quay về Trang Chủ
            </Button>
          </Link>
          <Link to="/recipes">
            <Button
              size="large"
              icon={<SearchOutlined />}
              style={{
                borderColor: "#ff6b35",
                color: "#ff6b35",
                height: "48px",
                padding: "0 24px",
                borderRadius: "24px",
                fontSize: "16px",
              }}
            >
              Khám phá Công thức
            </Button>
          </Link>
        </Space>

        {/* Animation CSS */}
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
              100% { transform: translateY(0px); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default NotFoundPage;
