import AppButton from "@/ultils/AppButton";
import { recipes } from "@/ultils/data";
import { useEffect, useRef, useState } from "react";
import FloatingEmojis from "./FloatingEmojis";
import RecipeListHeader from "./RecipeListHeader";
import RecipeRow from "./RecipeRow";
import { Skeleton } from "antd";

// Hàm loại bỏ dấu tiếng Việt
function removeVietnameseTones(str) {
  return str
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

const RecipeList = () => {
  // Responsive: số card mỗi hàng theo breakpoint lớn nhất (lg=6 => 4 card/hàng)
  const cardsPerRow = 4;
  const rowRefs = useRef([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Lọc recipes theo searchValue (không phân biệt hoa thường và dấu)
  const filteredRecipes = recipes.filter((r) =>
    removeVietnameseTones(r.title.toLowerCase()).includes(
      removeVietnameseTones(searchValue.toLowerCase())
    )
  );

  // Chia recipes thành từng hàng, chỉ lấy visibleCount món đầu
  const visibleRecipes = filteredRecipes.slice(0, visibleCount);
  const rows = [];
  for (let i = 0; i < visibleRecipes.length; i += cardsPerRow) {
    rows.push(visibleRecipes.slice(i, i + cardsPerRow));
  }

  useEffect(() => {
    if (!rowRefs.current) return;
    rowRefs.current.forEach((row, idx) => {
      if (row && !row.classList.contains("recipe-row-animate-show")) {
        setTimeout(() => {
          row.classList.add("recipe-row-animate-show");
        }, idx * 250);
      }
    });
  }, [rows.length, loading]);

  return (
    <div
      style={{
        position: "relative",
        padding: "40px 16px",
        overflow: "hidden",
        minHeight: "100vh",
        background: "#fcf9f6",
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
      `}</style>
      {/* Emoji động trang trí nền */}
      <FloatingEmojis />
      <RecipeListHeader
        title="Công Thức Nấu Ăn"
        onBack={() => window.history.back()}
        searchValue={searchValue}
        onSearch={setSearchValue}
      />
      {/* Container cho danh sách công thức */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(10px)",
          borderRadius: 20,
          padding: "32px 24px",
          boxShadow: "0 10px 30px rgba(255,107,53,0.1)",
          position: "relative",
          zIndex: 3,
        }}
      >
        {loading ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
              marginBottom: 24,
            }}
          >
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  background: "#fff",
                  boxShadow: "0 2px 8px #0001",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Skeleton.Image style={{ width: "100%", height: 140 }} active />
                <div style={{ padding: 16 }}>
                  <Skeleton
                    active
                    title={false}
                    paragraph={{ rows: 2, width: ["80%", "60%"] }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          rows.map((row, rowIdx) => (
            <RecipeRow
              key={rowIdx}
              row={row}
              rowIdx={rowIdx}
              rowRef={(el) => (rowRefs.current[rowIdx] = el)}
              isLastRow={rowIdx === rows.length - 1}
            />
          ))
        )}
      </div>
      <style>{`
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
      {/* Thêm một vài hình trang trí đáy trang */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "5%",
          width: "90%",
          height: "3px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,107,53,0.2), transparent)",
          borderRadius: "50%",
          zIndex: -1,
        }}
      />
      {visibleCount < filteredRecipes.length && !loading && (
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <AppButton
            onClick={() =>
              setVisibleCount((c) => Math.min(c + 4, filteredRecipes.length))
            }
            bg="#ff6b35"
            color="#fff"
            size="18px"
            radius="12px"
            style={{
              fontWeight: 700,
              padding: "10px 36px",
              boxShadow: "0 2px 12px #ffb36644",
            }}
          >
            Show More
          </AppButton>
        </div>
      )}
    </div>
  );
};

export default RecipeList;
