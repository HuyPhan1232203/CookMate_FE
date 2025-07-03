import React from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import AppButton from "@ultils/AppButton";
import defaultImage from "@/assets/images/image_food.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "@redux/feature/favoriteSlice";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.favorites);
  const isFavorite = favorites.some((item) => item.id === recipe.id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFavorite(recipe.id));
    } else {
      dispatch(addFavorite(recipe));
    }
  };

  return (
    <Card
      hoverable
      cover={
        <img
          alt={recipe.name}
          src={recipe.image || defaultImage}
          style={{
            height: 200,
            objectFit: "cover",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            width: "100%",
            display: "block",
            background: "#f5f5f5",
          }}
        />
      }
      style={{
        width: 270,
        borderRadius: 20,
        boxShadow: "0 4px 18px rgba(255,107,53,0.10)",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        border: "none",
        background: "#fffdfa",
        transition: "box-shadow 0.2s",
      }}
      bodyStyle={{ padding: 16, minHeight: 120 }}
    >
      <div style={{ position: "absolute", top: 12, right: 18, zIndex: 2 }}>
        <button
          onClick={handleFavoriteClick}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            outline: "none",
            fontSize: 26,
            color: isFavorite ? "#ff4d4f" : "#bbb",
            transition: "color 0.2s",
          }}
          aria-label={isFavorite ? "Bỏ yêu thích" : "Thêm vào yêu thích"}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>
      <div style={{ minHeight: 90, marginBottom: 8 }}>
        <div
          style={{
            fontWeight: 700,
            fontSize: 18,
            marginBottom: 4,
            color: "#ff6b35",
            minHeight: 28,
            maxHeight: 44,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            lineHeight: "1.2",
          }}
        >
          {recipe.name}
        </div>
        <div
          style={{
            color: "#666",
            fontSize: 14,
            minHeight: 36,
            maxHeight: 42,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            lineHeight: "1.3",
          }}
        >
          {recipe.description}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: 8,
          marginBottom: 8,
          flexWrap: "wrap",
          minHeight: 32,
        }}
      >
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
          {recipe.complexity}
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
          ⏱ {recipe.cookingTime} phút
        </span>
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
          {recipe.origin}
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AppButton
          style={{
            marginTop: 8,
            borderRadius: 20,
            padding: "8px 24px",
            fontWeight: 600,
            fontSize: 15,
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
