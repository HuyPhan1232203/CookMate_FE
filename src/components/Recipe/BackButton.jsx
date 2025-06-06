import AppButton from "@/ultils/AppButton";
import { ArrowLeftOutlined } from "@ant-design/icons";

const BackButton = ({ onClick, style, className }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 580;
  return (
    <AppButton
      onClick={onClick}
      style={{
        position: "absolute",
        left: isMobile ? 20 : 60,
        top: isMobile ? 8 : 10,
        background: isMobile ? "rgba(255,255,255,0.7)" : "none",
        border: "none",
        padding: isMobile ? 8 : 0,
        margin: 0,
        borderRadius: isMobile ? "50%" : 0,
        boxShadow: isMobile ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
        cursor: "pointer",
        zIndex: 10,
        outline: "none",
        lineHeight: 1,
        ...style,
      }}
      aria-label="Quay lại"
      className={className || "back-glow-btn"}
    >
      <ArrowLeftOutlined
        style={{
          fontSize: isMobile ? 26 : 36,
          color: "#ff6b35",
          textShadow: "0 0 12px #ffb366, 0 0 24px #fff",
        }}
      />
    </AppButton>
  );
};

export default BackButton;
