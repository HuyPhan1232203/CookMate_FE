import React from "react";
import { Typography, Tag, Rate } from "antd";
import { useNavigate } from "react-router-dom";
import AppButton from "@/ultils/AppButton";

const RecipeInfoSection = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        flex: "1 1 320px",
        minWidth: 0,
        maxWidth: "50%",
        padding: 32,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "auto",
        boxSizing: "border-box",
      }}
    >
      <Typography.Title level={2} style={{ marginBottom: 12, fontSize: 32 }}>
        {recipe.title}
      </Typography.Title>
      <p style={{ marginBottom: 18, fontSize: 17, color: "#444" }}>
        {recipe.description}
      </p>
      <div
        style={{
          margin: "12px 0",
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        <Tag color="orange">Tác giả: {recipe.author}</Tag>
        <Tag color="blue">Độ khó: {recipe.difficulty}</Tag>
        <Tag color="green">Chuẩn bị: {recipe.prepTime}</Tag>
        <Tag color="purple">Nấu: {recipe.cookTime}</Tag>
      </div>
      <div style={{ margin: "12px 0" }}>
        <Rate allowHalf disabled defaultValue={recipe.rating} />
        <span style={{ marginLeft: 8, fontSize: 16 }}>{recipe.rating}/5</span>
      </div>
      <div style={{ margin: "18px 0 10px 0" }}>
        <Typography.Title level={4} style={{ marginBottom: 8, fontSize: 20 }}>
          Nguyên liệu
        </Typography.Title>
        <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
          {recipe.ingredients && recipe.ingredients.length > 0 ? (
            recipe.ingredients.map((item, idx) => (
              <li key={idx} style={{ fontSize: 15, marginBottom: 4 }}>
                {item}
              </li>
            ))
          ) : (
            <li style={{ fontSize: 15, marginBottom: 4 }}>
              Không có thông tin nguyên liệu
            </li>
          )}
        </ul>
      </div>
      <div style={{ margin: "18px 0 0 0" }}>
        <Typography.Title level={4} style={{ marginBottom: 8, fontSize: 20 }}>
          Các bước thực hiện
        </Typography.Title>
        <ol style={{ paddingLeft: 20, marginBottom: 0 }}>
          {recipe.steps && recipe.steps.length > 0 ? (
            recipe.steps.map((step, idx) => (
              <li key={idx} style={{ fontSize: 15, marginBottom: 8 }}>
                {step}
              </li>
            ))
          ) : (
            <li style={{ fontSize: 15, marginBottom: 8 }}>
              Không có hướng dẫn thực hiện
            </li>
          )}
        </ol>
      </div>
      <div style={{ textAlign: "left", marginTop: 24 }}>
        <AppButton
          onClick={() => navigate(-1)}
          bg="#ff6b35"
          color="#fff"
          radius="10px"
          padding="8px 16px"
          style={{ fontWeight: 500, fontSize: 16 }}
        >
          ← Quay lại danh sách
        </AppButton>
      </div>
    </div>
  );
};

export default RecipeInfoSection;
