import React from "react";
import { Card } from "antd";
import { useParams } from "react-router-dom";
import NotFoundPage from "@/pages/NotFoundPage";
import { recipes } from "@/constants/Recipe/ListDetail";
import RecipeImageSection from "./RecipeImageSection";
import RecipeInfoSection from "./RecipeInfoSection";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return <NotFoundPage />;

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "calc(100vh - 120px)",
        backgroundImage: `url(${recipe.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "48px 0",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.28) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1000,
          width: "100%",
          borderRadius: 24,
          boxShadow: "0 4px 32px rgba(0,0,0,0.13)",
          background: "rgba(80,80,80,0.13)",
          backdropFilter: "blur(8px)",
          padding: 0,
          overflow: "hidden",
          margin: "0 16px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -60,
            left: -60,
            width: 180,
            height: 180,
            background:
              "radial-gradient(circle at 60% 40%, #ffb366 60%, transparent 100%)",
            borderRadius: "50%",
            opacity: 0.18,
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: -80,
            width: 220,
            height: 220,
            background:
              "radial-gradient(circle at 40% 60%, #ff6b35 60%, transparent 100%)",
            borderRadius: "50%",
            opacity: 0.13,
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 30,
            right: 60,
            fontSize: 60,
            opacity: 0.1,
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          🍳
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 80,
            fontSize: 48,
            opacity: 0.1,
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          🥕
        </div>
        <div style={{ position: "relative", zIndex: 3 }}>
          <Card
            style={{
              width: "100%",
              borderRadius: 16,
              boxShadow: "0 2px 24px rgba(0,0,0,0.10)",
              minHeight: 400,
              background: "transparent",
            }}
            styles={{
              body: { padding: 0, background: "transparent" },
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "stretch",
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 2px 24px rgba(0,0,0,0.10)",
                minHeight: 400,
                overflow: "hidden",
              }}
            >
              <RecipeImageSection title={recipe.title} image={recipe.image} />
              <RecipeInfoSection recipe={recipe} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
