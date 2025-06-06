import { ShimmerTitle } from "@/styles/RecipeStyle/RecipeList.styled";
import BackButton from "./BackButton";
import { Typography } from "antd";
import React from "react";

const { Title } = Typography;

const RecipeListHeader = ({ title, onBack, searchValue, onSearch }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 580;
  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: 40,
        marginTop: 30,
        position: "relative",
        zIndex: 5,
      }}
    >
      <BackButton onClick={onBack} />
      <ShimmerTitle>
        <Title
          level={2}
          style={{
            margin: 0,
            color: "#ff6b35",
            fontSize: "36px",
            marginLeft: isMobile ? 500 : 0,
            transition: "margin-left 0.2s",
          }}
        >
          {title}
        </Title>
      </ShimmerTitle>
      {/* Search input */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "16px auto 0 auto",
          maxWidth: isMobile ? "95%" : 400,
          width: "100%",
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#ff9a44",
            fontSize: 20,
            pointerEvents: "none",
          }}
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" stroke="#ff9a44" strokeWidth="2" />
            <path
              d="M20 20L16.65 16.65"
              stroke="#ff9a44"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Tìm món ăn..."
          value={searchValue}
          onChange={(e) => onSearch && onSearch(e.target.value)}
          style={{
            padding: "10px 16px 10px 44px",
            borderRadius: 24,
            border: "1.5px solid #ff9a44",
            fontSize: 16,
            width: "100%",
            outline: "none",
            boxShadow: "0 2px 12px #ffb36622",
            background: "#fffdfa",
            color: "#ff6b35",
            transition: "border 0.2s, box-shadow 0.2s",
            fontWeight: 500,
            letterSpacing: 0.2,
            "::placeholder": {
              color: "#ffb366",
              opacity: 1,
            },
          }}
          onFocus={(e) => (e.target.style.border = "2px solid #ff6b35")}
          onBlur={(e) => (e.target.style.border = "1.5px solid #ff9a44")}
        />
      </div>
      <div
        style={{
          margin: "8px auto",
          width: "80px",
          height: "3px",
          background:
            "linear-gradient(90deg, transparent, #ff9a44, #ff6b35, transparent)",
          borderRadius: 20,
          animation: "underlineMove 3s linear infinite alternate",
          backgroundSize: "200% 100%",
        }}
      />
      <style>{`
        @keyframes underlineMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .back-glow-btn:hover .anticon {
          color: #ff8c42;
          transform: scale(1.18);
          text-shadow: 0 0 18px #ffb366, 0 0 32px #fff;
          transition: all 0.18s cubic-bezier(.4,2,.6,1);
        }
        .back-glow-btn .anticon {
          transition: all 0.18s cubic-bezier(.4,2,.6,1);
        }
      `}</style>
    </div>
  );
};

export default RecipeListHeader;
