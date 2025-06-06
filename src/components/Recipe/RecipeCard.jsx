import React from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import AppButton from "../../ultils/AppButton";

const RecipeCard = ({ recipe, description }) => {
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      cover={
        <img
          alt={recipe.title}
          src={recipe.image}
          style={{
            height: 220,
            objectFit: "cover",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            width: "100%",
            display: "block",
          }}
        />
      }
      style={{
        width: 260,
        borderRadius: 20,
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
      bodyStyle={{ padding: 16, minHeight: 120 }}
    >
      <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 4 }}>
        {recipe.title}
      </div>
      <div
        style={{ color: "#666", fontSize: 14, minHeight: 36, marginBottom: 8 }}
      >
        {description}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AppButton
          style={{
            marginTop: 12,
            borderRadius: 20,
            padding: "8px 24px",
            fontWeight: 500,
          }}
          onClick={() => navigate(`/recipes/${recipe.id}`)}
        >
          Xem chi tiết
        </AppButton>
      </div>
    </Card>
  );
};

export default RecipeCard;
