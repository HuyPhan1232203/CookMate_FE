import React from "react";
import "../styles/loginStyles.css";

const LoginLayout = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #ff6b35 0%, #ff8c42 50%, #ffa726 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default LoginLayout;
