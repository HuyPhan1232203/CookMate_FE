import AppButton from "@/ultils/AppButton";
import { ArrowLeftOutlined } from "@ant-design/icons";

const BackButton = ({ onClick, style, className }) => (
  <AppButton
    onClick={onClick}
    style={{
      position: "absolute",
      left: "60px",
      top: "10px",
      transform: "none",
      background: "none",
      border: "none",
      padding: 0,
      margin: 0,
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
        fontSize: 36,
        color: "#ff6b35",
        textShadow: "0 0 12px #ffb366, 0 0 24px #fff",
      }}
    />
  </AppButton>
);

export default BackButton;
