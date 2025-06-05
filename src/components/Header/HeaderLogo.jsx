import React from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { APP_CONTENT } from "../../constants/content";

const { Title } = Typography;

const HeaderLogo = () => (
  <Link
    to="/"
    style={{ display: "flex", alignItems: "center", flex: "0 0 auto" }}
  >
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #ff6b35, #ff8c42)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
      }}
    >
      <span style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
        🍳
      </span>
    </div>
    <Title level={3} style={{ margin: 0, color: "#ff6b35" }}>
      {APP_CONTENT.APP_NAME}
    </Title>
  </Link>
);

export default HeaderLogo;
