import React from "react";
import { Result, Button } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function AccessDeniedPage() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff7f2",
      }}
    >
      <Result
        icon={<WarningOutlined style={{ color: "#ff6b35", fontSize: 64 }} />}
        status="403"
        title={<span style={{ color: "#ff6b35" }}>403 - Access Denied</span>}
        subTitle={
          <span style={{ color: "#333" }}>
            You do not have permission to access this page.
            <br />
            Redirecting to the homepage...
          </span>
        }
        extra={
          <Button
            type="primary"
            style={{ background: "#ff6b35", borderColor: "#ff6b35" }}
            size="large"
            onClick={() => navigate("/")}
          >
            Go to Homepage
          </Button>
        }
        style={{ background: "#fff7f2", borderRadius: 16, padding: 32 }}
      />
    </div>
  );
}
