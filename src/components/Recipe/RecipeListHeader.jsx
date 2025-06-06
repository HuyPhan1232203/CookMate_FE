import { ShimmerTitle } from "@/styles/RecipeStyle/RecipeList.styled";
import BackButton from "./BackButton";
import { Typography } from "antd";

const { Title } = Typography;

const RecipeListHeader = ({ title, onBack }) => (
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
        style={{ margin: 0, color: "#ff6b35", fontSize: "36px" }}
      >
        {title}
      </Title>
    </ShimmerTitle>
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

export default RecipeListHeader;
