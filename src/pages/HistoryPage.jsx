import React, { useState } from "react";
import { useSelector } from "react-redux";
import HistoryRecipeCard from "@/components/Recipe/HistoryRecipeCard";
import RecipeListHeader from "@/components/Recipe/RecipeListHeader";
import { useNavigate } from "react-router-dom";

// Hàm loại bỏ dấu tiếng Việt
function removeVietnameseTones(str) {
  return str
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

const HistoryPage = () => {
  let userId = null;
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    userId = user?.id || user?.userId;
  } catch (e) {
    console.log(e);
  }
  const history = useSelector((state) =>
    userId ? state.history.history[userId] || [] : []
  );
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  // Lọc danh sách theo search
  const filteredHistory = history.filter((r) =>
    removeVietnameseTones((r.name || r.title || "").toLowerCase()).includes(
      removeVietnameseTones(searchValue.toLowerCase())
    )
  );

  const cardsPerRow = 4;
  // Chia filteredHistory thành từng hàng (không dùng state)
  const rows = [];
  for (let i = 0; i < filteredHistory.length; i += cardsPerRow) {
    rows.push(filteredHistory.slice(i, i + cardsPerRow));
  }

  return (
    <div
      style={{
        position: "relative",
        padding: "40px 16px",
        minHeight: "100vh",
        background: "#fcf9f6",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 250,
          background: "linear-gradient(135deg, #ff9a44 0%, #ff6b35 100%)",
          zIndex: -1,
          borderBottomLeftRadius: "60% 40%",
          borderBottomRightRadius: "60% 40%",
          transform: "scaleX(1.2)",
          animation: "headerGradientMove 8s ease-in-out infinite alternate",
          backgroundSize: "200% 100%",
        }}
      />
      <style>{`
        @keyframes headerGradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .recipe-row-animate {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1);
        }
        .recipe-row-animate-show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          borderRadius: 20,
          padding: "32px 24px",
          boxShadow: "0 10px 30px rgba(255,107,53,0.1)",
          position: "relative",
          zIndex: 3,
        }}
      >
        <RecipeListHeader
          title="Lịch sử xem công thức"
          searchValue={searchValue}
          onSearch={setSearchValue}
          onBack={() => navigate("/recipes")}
        />
        {filteredHistory.length === 0 ? (
          <div
            style={{
              color: "#888",
              fontSize: 18,
              textAlign: "center",
              marginTop: 60,
            }}
          >
            Không tìm thấy công thức nào phù hợp.
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 30,
              justifyContent: "center",
            }}
          >
            {filteredHistory.map((recipe) => (
              <HistoryRecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
