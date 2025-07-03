import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  Avatar,
  Typography,
  Descriptions,
  Skeleton,
  message,
  Tag,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  IdcardOutlined,
  SafetyCertificateOutlined,
  HomeOutlined,
  FireOutlined,
  CoffeeOutlined,
  SmileOutlined,
  CrownOutlined,
} from "@ant-design/icons";
import api from "@/config/axios";
import { endpoints } from "@/config/api";
import Cook3DIcons from "@/components/Profile/Cook3DIcons";

const { Title, Text } = Typography;

export const ProfilePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await api.get(endpoints.users.detail(id));
        setUser(res.data);
      } catch {
        setError("Không thể tải thông tin người dùng!");
        message.error("Không thể tải thông tin người dùng!");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchUser();
  }, [id]);

  const getRoleColor = (role) => {
    switch (role) {
      case "admin":
        return "red";
      case "chef":
        return "green";
      default:
        return "blue";
    }
  };

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Cook3DIcons />
      <div
        style={{
          position: "relative",
          width: 520,
          display: "flex",
          justifyContent: "center",
          overflow: "visible",
          zIndex: 2,
        }}
      >
        <Card
          style={{
            width: 520,
            borderRadius: 32,
            boxShadow: "0 12px 40px rgba(255, 140, 0, 0.15)",
            border: "2px solid #ffe0b2",
            transition:
              "box-shadow 0.3s, transform 0.4s cubic-bezier(.25,.8,.25,1)",
            willChange: "transform",
            background: "rgba(255,255,255,0.98)",
            overflow: "visible",
          }}
          bordered={false}
          bodyStyle={{ padding: 44, position: "relative" }}
          hoverable
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "perspective(800px) rotateY(8deg) scale(1.03)";
            e.currentTarget.style.boxShadow =
              "0 24px 60px 0 rgba(255, 140, 0, 0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow =
              "0 12px 40px rgba(255, 140, 0, 0.15)";
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginBottom: 18,
            }}
          >
            <button
              onClick={() => navigate("/")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "#ff9800",
                color: "#fff",
                border: "none",
                borderRadius: 24,
                padding: "8px 22px",
                fontWeight: 600,
                fontSize: 16,
                boxShadow: "0 2px 8px rgba(255,152,0,0.18)",
                cursor: "pointer",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#ffb347";
                e.currentTarget.style.transform = "scale(1.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ff9800";
                e.currentTarget.style.transform = "none";
              }}
            >
              <HomeOutlined style={{ fontSize: 20 }} />
              Trang chủ
            </button>
          </div>
          {loading ? (
            <Skeleton avatar paragraph={{ rows: 4 }} active />
          ) : error ? (
            <Text type="danger">{error}</Text>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: 32,
                }}
              >
                <Avatar
                  size={110}
                  src={user.avatar}
                  icon={!user.avatar && <UserOutlined />}
                  style={{
                    background: "#ff9800",
                    marginBottom: 18,
                    border: "4px solid #fff3e0",
                    boxShadow: "0 4px 16px rgba(255, 152, 0, 0.18)",
                  }}
                />
                <Title level={3} style={{ margin: 0, color: "#d35400" }}>
                  {user.username}
                </Title>
                <Tag
                  color={getRoleColor(user.role)}
                  style={{
                    marginTop: 10,
                    fontWeight: 600,
                    fontSize: 16,
                    borderRadius: 10,
                    padding: "3px 16px",
                    letterSpacing: 1,
                    background: "#fff7e6",
                    color: "#d35400",
                    border: "1px solid #ffd699",
                  }}
                >
                  <IdcardOutlined style={{ marginRight: 6 }} />
                  {user.role === "admin"
                    ? "Quản trị viên"
                    : user.role === "chef"
                    ? "Đầu bếp"
                    : "Người dùng"}
                </Tag>
                {user.isDeleted && (
                  <Tag color="red" style={{ marginTop: 10, borderRadius: 10 }}>
                    <SafetyCertificateOutlined /> Đã bị khóa
                  </Tag>
                )}
              </div>
              <Descriptions
                column={1}
                bordered
                size="middle"
                style={{ borderRadius: 16, background: "#fff8f0" }}
                labelStyle={{ fontWeight: 500, color: "#d35400", width: 140 }}
                contentStyle={{ color: "#333", fontSize: 17 }}
              >
                <Descriptions.Item
                  label={
                    <span>
                      <MailOutlined style={{ color: "#ff9800" }} /> Email
                    </span>
                  }
                >
                  {user.email}
                </Descriptions.Item>
                <Descriptions.Item
                  label={
                    <span>
                      <UserOutlined style={{ color: "#ff9800" }} /> User ID
                    </span>
                  }
                >
                  {user.userId}
                </Descriptions.Item>
                <Descriptions.Item label={<span>Trạng thái</span>}>
                  {user.isDeleted ? (
                    <Tag color="red" style={{ borderRadius: 10 }}>
                      Đã xóa
                    </Tag>
                  ) : (
                    <Tag color="green" style={{ borderRadius: 10 }}>
                      Đang hoạt động
                    </Tag>
                  )}
                </Descriptions.Item>
              </Descriptions>
            </>
          )}
        </Card>
      </div>
    </div>
  );
};
