/* eslint-disable no-unused-vars */
import AppButton from "@/ultils/AppButton";
// import { recipes } from "@/ultils/data"; // Bỏ mock data
import { useEffect, useRef, useState } from "react";
import FloatingEmojis from "./FloatingEmojis";
import RecipeListHeader from "./RecipeListHeader";
import RecipeRow from "./RecipeRow";
import { Skeleton, message } from "antd";
import api from "@/config/axios";

// Hàm loại bỏ dấu tiếng Việt
function removeVietnameseTones(str) {
  return str
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

const RecipeList = () => {
  const cardsPerRow = 4;
  const rowRefs = useRef([]);
  const [recipes, setRecipes] = useState([]);
  const [meta, setMeta] = useState({ totalPages: 1, currentPage: 1 });
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(null);

  // Fetch API khi đổi trang hoặc search
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);
    const fetchRecipes = async () => {
      try {
        const res = await api.get(`/recipes?page=${meta.currentPage}&limit=12`);
        if (isMounted) {
          setRecipes(res.data.data);
          setMeta(res.data.meta);
        }
      } catch (err) {
        setError("Không thể tải danh sách công thức!");
        message.error("Không thể tải danh sách công thức!");
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchRecipes();
    return () => {
      isMounted = false;
    };
  }, [meta.currentPage]);

  // Lọc recipes theo searchValue (không phân biệt hoa thường, dấu)
  const filteredRecipes = recipes.filter((r) =>
    removeVietnameseTones((r.name || r.title || "").toLowerCase()).includes(
      removeVietnameseTones(searchValue.toLowerCase())
    )
  );

  // Chia filteredRecipes thành từng hàng
  const rows = [];
  for (let i = 0; i < filteredRecipes.length; i += cardsPerRow) {
    rows.push(filteredRecipes.slice(i, i + cardsPerRow));
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
        ) : error ? (
          <div style={{ color: "red", textAlign: "center", margin: 32 }}>
            {error}
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
      {/* Phân trang */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          marginTop: 32,
        }}
      >
        <AppButton
          onClick={() =>
            meta.currentPage > 1 &&
            setMeta((m) => ({ ...m, currentPage: m.currentPage - 1 }))
          }
          bg="#ff6b35"
          color="#fff"
          size="16px"
          radius="12px"
          disabled={meta.currentPage === 1}
        >
          Prev
        </AppButton>
        <span style={{ alignSelf: "center", fontWeight: 600, fontSize: 16 }}>
          Trang {meta.currentPage} / {meta.totalPages}
        </span>
        <AppButton
          onClick={() =>
            meta.currentPage < meta.totalPages &&
            setMeta((m) => ({ ...m, currentPage: m.currentPage + 1 }))
          }
          bg="#ff6b35"
          color="#fff"
          size="16px"
          radius="12px"
          disabled={meta.currentPage === meta.totalPages}
        >
          Next
        </AppButton>
      </div>
    </div>
  );
};

export default RecipeList;
