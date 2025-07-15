import React from "react";
import defaultImage from "@/assets/images/image_food.jpg";

const HistoryRecipeCard = ({ recipe }) => (
  <div
    style={{
      borderRadius: 20,
      background: "#fff",
      boxShadow: "0 4px 24px rgba(255,107,53,0.18)",
      padding: 0,
      margin: 8,
      minHeight: 260, // tăng chiều cao tổng thể
      minWidth: 220,
      maxWidth: 270,
      // border: "2px solid #ff6b35", // bỏ border viền
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      overflow: "hidden",
    }}
  >
    <img
      src={recipe.image || defaultImage}
      alt={recipe.name}
      style={{
        width: "100%",
        height: 180, // tăng chiều cao ảnh
        objectFit: "cover",
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        background: "#f5f5f5",
      }}
    />
    <div style={{ padding: 16, width: "100%" }}>
      <div
        style={{
          fontWeight: 700,
          fontSize: 18,
          color: "#ff6b35",
          marginBottom: 6,
        }}
      >
        {recipe.name || "Không rõ tên"}
      </div>
      <div
        style={{ color: "#666", fontSize: 14, marginBottom: 8, minHeight: 36 }}
      >
        {recipe.description || "Không có mô tả"}
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <span
          style={{
            background: "#ffe0b2",
            color: "#d35400",
            borderRadius: 8,
            padding: "2px 10px",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          {recipe.complexity || "?"}
        </span>
        <span
          style={{
            background: "#e0f7fa",
            color: "#00796b",
            borderRadius: 8,
            padding: "2px 10px",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          ⏱ {recipe.cookingTime ? `${recipe.cookingTime} phút` : "?"}
        </span>
        {recipe.aiRating && (
          <span
            style={{
              background: "#fff3e0",
              color: "#ff9800",
              borderRadius: 8,
              padding: "2px 10px",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            ⭐ {recipe.aiRating}
          </span>
        )}
        <span
          style={{
            background: "#e3f2fd",
            color: "#1976d2",
            borderRadius: 8,
            padding: "2px 10px",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          {recipe.origin || "?"}
        </span>
      </div>
    </div>
  </div>
);

export default HistoryRecipeCard;
