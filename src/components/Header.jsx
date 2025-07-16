import {
  BookOutlined,
  HeartOutlined,
  MenuOutlined,
  SearchOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
import { APP_CONTENT } from "@constants/content";
import { Button, Layout, Typography } from "antd";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderAuthButtons from "./Header/HeaderAuthButtons";
import HeaderLogo from "./Header/HeaderLogo";
import HeaderMenu from "./Header/HeaderMenu";
import HeaderMobileDrawer from "./Header/HeaderMobileDrawer";

const { Header: AntHeader } = Layout;

const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path) => currentPath.startsWith(path);

  // Lấy role từ localStorage
  let role = "guest";
  try {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      if (user && user.role) role = user.role;
    }
  } catch (e) {
    role = "guest";
  }

  const menuItemBase = {
    color: "#222",
    fontWeight: 600,
    fontSize: 16,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    padding: "0 12px",
    height: 64,
    position: "relative",
    transition: "color 0.25s cubic-bezier(.4,2,.6,1)",
    borderBottom: "2.5px solid transparent",
    background: "none",
    cursor: "pointer",
    outline: "none",
  };
  const menuItemActive = {
    color: "#ff6b35",
    background: "none",
  };

  const getSelectedKey = () => {
    if (location.pathname.startsWith("/favorites")) return "favorites";
    if (location.pathname.startsWith("/recipes")) return "recipes";
    if (location.pathname.startsWith("/search")) return "search";
    return "";
  };

  const menuItems = [
    {
      key: "recipes",
      icon: <BookOutlined />,
      label: <Link to="/recipes">{APP_CONTENT.HEADER.MENU_ITEMS.RECIPES}</Link>,
    },
    {
      key: "favorites",
      icon: <HeartOutlined />,
      label: (
        <Link to="/favorites">{APP_CONTENT.HEADER.MENU_ITEMS.FAVORITES}</Link>
      ),
    },
    {
      key: "history",
      icon: <HistoryOutlined />,
      label: <Link to="/history">History</Link>,
    },
    // {
    //   key: "search",
    //   icon: <SearchOutlined />,
    //   label: APP_CONTENT.HEADER.MENU_ITEMS.SEARCH,
    // },
  ];

  return (
    <AntHeader
      style={{
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        padding: "0 20px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: 64,
          paddingLeft: 32,
          paddingRight: 32,
        }}
      >
        <HeaderLogo />
        {/* Giữa: Menu */}
        <div
          style={{
            flex: "1 1 0",
            display: "flex",
            justifyContent: "flex-end",
            minWidth: 0,
            marginRight: 32,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {/* Recipes luôn hiển thị, Favorites & History chỉ cho user thường */}
            <Link
              to="/recipes"
              style={{
                ...menuItemBase,
                ...(isActive("/recipes") && menuItemActive),
              }}
            >
              <BookOutlined
                style={{
                  marginRight: 6,
                  transition: "color 0.25s cubic-bezier(.4,2,.6,1)",
                }}
              />
              Recipes
              {isActive("/recipes") && (
                <span
                  style={{
                    position: "absolute",
                    left: 12,
                    right: 12,
                    bottom: 6,
                    height: 3,
                    borderRadius: 2,
                    background:
                      "linear-gradient(90deg,#ff9a44 0%,#ff6b35 100%)",
                    boxShadow: "0 2px 8px #ff6b3533",
                    transition: "all 0.35s cubic-bezier(.4,2,.6,1)",
                    transformOrigin: "center",
                    animation: "underlineMove 0.5s cubic-bezier(.4,2,.6,1)",
                  }}
                />
              )}
            </Link>
            {/* Favorites & History chỉ cho user thường */}
            {role !== "admin" && role !== "guest" && (
              <>
                <Link
                  to="/favorites"
                  style={{
                    ...menuItemBase,
                    ...(isActive("/favorites") && menuItemActive),
                  }}
                >
                  <HeartOutlined
                    style={{
                      marginRight: 6,
                      transition: "color 0.25s cubic-bezier(.4,2,.6,1)",
                    }}
                  />
                  Favorites
                  {isActive("/favorites") && (
                    <span
                      style={{
                        position: "absolute",
                        left: 12,
                        right: 12,
                        bottom: 6,
                        height: 3,
                        borderRadius: 2,
                        background:
                          "linear-gradient(90deg,#ff9a44 0%,#ff6b35 100%)",
                        boxShadow: "0 2px 8px #ff6b3533",
                        transition: "all 0.35s cubic-bezier(.4,2,.6,1)",
                        transformOrigin: "center",
                        animation: "underlineMove 0.5s cubic-bezier(.4,2,.6,1)",
                      }}
                    />
                  )}
                </Link>
                <Link
                  to="/history"
                  style={{
                    ...menuItemBase,
                    ...(isActive("/history") && menuItemActive),
                  }}
                >
                  <HistoryOutlined
                    style={{
                      marginRight: 6,
                      transition: "color 0.25s cubic-bezier(.4,2,.6,1)",
                    }}
                  />
                  History
                  {isActive("/history") && (
                    <span
                      style={{
                        position: "absolute",
                        left: 12,
                        right: 12,
                        bottom: 6,
                        height: 3,
                        borderRadius: 2,
                        background:
                          "linear-gradient(90deg,#ff9a44 0%,#ff6b35 100%)",
                        boxShadow: "0 2px 8px #ff6b3533",
                        transition: "all 0.35s cubic-bezier(.4,2,.6,1)",
                        transformOrigin: "center",
                        animation: "underlineMove 0.5s cubic-bezier(.4,2,.6,1)",
                      }}
                    />
                  )}
                </Link>
              </>
            )}
            {/* Blog menu item */}
            <Link
              to="/blog"
              style={{
                ...menuItemBase,
                ...(isActive("/blog") && menuItemActive),
              }}
            >
              <BookOutlined
                style={{
                  marginRight: 6,
                  transition: "color 0.25s cubic-bezier(.4,2,.6,1)",
                }}
              />
              Blog
              {isActive("/blog") && (
                <span
                  style={{
                    position: "absolute",
                    left: 12,
                    right: 12,
                    bottom: 6,
                    height: 3,
                    borderRadius: 2,
                    background:
                      "linear-gradient(90deg,#ff9a44 0%,#ff6b35 100%)",
                    boxShadow: "0 2px 8px #ff6b3533",
                    transition: "all 0.35s cubic-bezier(.4,2,.6,1)",
                    transformOrigin: "center",
                    animation: "underlineMove 0.5s cubic-bezier(.4,2,.6,1)",
                  }}
                />
              )}
            </Link>
            {/* Dashboard & UserManage chỉ cho admin */}
            {role === "admin" && (
              <>
                <Link
                  to="/admin/dashboard"
                  style={{
                    ...menuItemBase,
                    ...(isActive("/admin/dashboard") && menuItemActive),
                  }}
                >
                  <BookOutlined
                    style={{
                      marginRight: 6,
                      transition: "color 0.25s cubic-bezier(.4,2,.6,1)",
                    }}
                  />
                  Dashboard
                  {isActive("/admin/dashboard") && (
                    <span
                      style={{
                        position: "absolute",
                        left: 12,
                        right: 12,
                        bottom: 6,
                        height: 3,
                        borderRadius: 2,
                        background:
                          "linear-gradient(90deg,#ff9a44 0%,#ff6b35 100%)",
                        boxShadow: "0 2px 8px #ff6b3533",
                        transition: "all 0.35s cubic-bezier(.4,2,.6,1)",
                        transformOrigin: "center",
                        animation: "underlineMove 0.5s cubic-bezier(.4,2,.6,1)",
                      }}
                    />
                  )}
                </Link>
                <Link
                  to="/admin/user"
                  style={{
                    ...menuItemBase,
                    ...(isActive("/admin/user") && menuItemActive),
                  }}
                >
                  <BookOutlined
                    style={{
                      marginRight: 6,
                      transition: "color 0.25s cubic-bezier(.4,2,.6,1)",
                    }}
                  />
                  User Management
                  {isActive("/admin/user") && (
                    <span
                      style={{
                        position: "absolute",
                        left: 12,
                        right: 12,
                        bottom: 6,
                        height: 3,
                        borderRadius: 2,
                        background:
                          "linear-gradient(90deg,#ff9a44 0%,#ff6b35 100%)",
                        boxShadow: "0 2px 8px #ff6b3533",
                        transition: "all 0.35s cubic-bezier(.4,2,.6,1)",
                        transformOrigin: "center",
                        animation: "underlineMove 0.5s cubic-bezier(.4,2,.6,1)",
                      }}
                    />
                  )}
                </Link>
              </>
            )}
          </div>
        </div>
        <div
          className="desktop-auth"
          style={{ display: "flex", alignItems: "center" }}
        >
          <HeaderAuthButtons />
        </div>
        <Button
          className="mobile-menu-btn"
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setMobileMenuVisible(true)}
          style={{
            display: "none",
          }}
        />
      </div>
      <HeaderMobileDrawer
        open={mobileMenuVisible}
        onClose={() => setMobileMenuVisible(false)}
        menuItems={menuItems}
        selectedKey={getSelectedKey()}
      />

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu,
          .desktop-auth {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>

      <style>{`
        /* Menu hover and active states */
        .ant-menu-horizontal > .ant-menu-item:hover::after,
        .ant-menu-horizontal > .ant-menu-item-selected::after {
          border-bottom-color: #ff6b35 !important;
        }

        .ant-menu-horizontal > .ant-menu-item:hover,
        .ant-menu-horizontal > .ant-menu-item-selected {
          color: #ff6b35 !important;
        }

        .ant-menu-horizontal > .ant-menu-item::after {
          border-bottom: 2px solid transparent;
          transition: border-bottom-color 0.3s ease;
        }

        .ant-menu-horizontal > .ant-menu-item:hover::after {
          border-bottom-color: #ff6b35 !important;
        }

        /* Menu item icon color on hover */
        .ant-menu-horizontal > .ant-menu-item:hover .anticon {
          color: #ff6b35 !important;
        }

        @keyframes underlineMove {
          0% { transform: scaleX(0.2); opacity: 0.5; }
          60% { transform: scaleX(1.1); opacity: 1; }
          100% { transform: scaleX(1); opacity: 1; }
        }
      `}</style>
    </AntHeader>
  );
};

export default Header;
