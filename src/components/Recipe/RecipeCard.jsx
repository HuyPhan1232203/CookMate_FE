import React from "react";
import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom";

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
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        />
      }
      style={{
        width: 260,
        borderRadius: 12,
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        margin: 0,
        padding: 0,
        body: { padding: 16, minHeight: 120 },
      }}
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
        <Button
          type="primary"
          style={{
            marginTop: 12,
            background: "#ff6b35",
            borderColor: "#ff6b35",
            borderRadius: 20,
            padding: "0 24px",
            fontWeight: 500,
          }}
          onClick={() => navigate(`/recipes/${recipe.id}`)}
        >
          Xem chi tiết
        </Button>
      </div>
    </Card>
  );
};

export default RecipeCard;
