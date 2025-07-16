import React from "react";
import { Avatar, Dropdown, Space, Typography, Button, message } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  HeartOutlined,
  BookOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "@redux/feature/userSlice";

const { Text } = Typography;

const UserProfile = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    // Cập nhật Redux state
    dispatch(clearUser());
    message.success("Đăng xuất thành công!");
    navigate("/");

    // Force a slight delay to ensure localStorage is cleared before reload
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const getAvatarSrc = () => {
    if (user?.avatar) {
      return user.avatar;
    }
    return null;
  };

  const getDisplayName = () => {
    if (user?.username) {
      return user.username;
    }
    return user?.email?.split("@")[0] || "User";
  };

  const getRoleColor = () => {
    switch (user?.role) {
      case "admin":
        return "#ff4d4f";
      case "chef":
        return "#52c41a";
      default:
        return "#1890ff";
    }
  };

  const getRoleText = () => {
    switch (user?.role) {
      case "admin":
        return "Admin";
      case "chef":
        return "Chef";
      default:
        return "User";
    }
  };

  const menuItems = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "Thông tin cá nhân",
      onClick: () => navigate(`/users/${userId}`),
    },
    {
      key: "my-recipes",
      icon: <BookOutlined />,
      label: "Công thức của tôi",
      onClick: () => navigate("/my-recipes"),
    },
    {
      key: "favorites",
      icon: <HeartOutlined />,
      label: "Yêu thích",
      onClick: () => navigate("/favorites"),
    },
    {
      type: "divider",
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Cài đặt",
      onClick: () => navigate("/settings"),
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Đăng xuất",
      onClick: handleLogout,
      danger: true,
    },
  ];

  const userInfo = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        cursor: "pointer",
        padding: "8px 12px",
        borderRadius: "8px",
        transition: "background-color 0.2s ease",
      }}
    >
      <Avatar
        size={40}
        src={getAvatarSrc()}
        icon={!getAvatarSrc() && <UserOutlined />}
        style={{
          backgroundColor: getAvatarSrc() ? "transparent" : "#ff6b35",
          border: "2px solid #f0f0f0",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <Text
          style={{
            fontWeight: "600",
            fontSize: "14px",
            color: "#333",
            lineHeight: "1.2",
          }}
        >
          {getDisplayName()}
        </Text>
        <Text
          style={{
            fontSize: "12px",
            color: getRoleColor(),
            fontWeight: "500",
            lineHeight: "1.2",
          }}
        >
          {getRoleText()}
        </Text>
      </div>

      <DownOutlined
        style={{
          fontSize: "12px",
          color: "#999",
          marginLeft: "4px",
        }}
      />
    </div>
  );

  return (
    <Dropdown
      menu={{ items: menuItems }}
      trigger={["click"]}
      placement="bottomRight"
      arrow={{
        pointAtCenter: true,
      }}
      overlayStyle={{
        minWidth: "200px",
      }}
    >
      {userInfo}
    </Dropdown>
  );
};

export default UserProfile;
