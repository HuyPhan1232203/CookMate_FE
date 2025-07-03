import React from "react";
import defaultImage from "@/assets/images/image_detail.jpg";
const RecipeImageSection = ({ title, image }) => {
  return (
    <div
      style={{
        flex: "1 1 320px",
        minWidth: 0,
        maxWidth: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#faf7f3",
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        overflow: "hidden",
        padding: 0,
      }}
    >
      <img
        alt={title}
        src={image || defaultImage}
        style={{
          width: "95%",
          maxWidth: 480,
          height: 340,
          objectFit: "cover",
          borderRadius: 16,
          margin: 12,
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          display: "block",
        }}
      />
    </div>
  );
};

export default RecipeImageSection;
