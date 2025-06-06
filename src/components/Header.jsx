import {
  BookOutlined,
  HeartOutlined,
  MenuOutlined,
  SearchOutlined,
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

  const getSelectedKey = () => {
    if (location.pathname.startsWith("/favorites")) return "1";
    if (location.pathname.startsWith("/recipes")) return "2";
    if (location.pathname.startsWith("/search")) return "3";
    return "";
  };

  const menuItems = [
    {
      key: "1",
      icon: <BookOutlined />,
      label: <Link to="/recipes">{APP_CONTENT.HEADER.MENU_ITEMS.RECIPES}</Link>,
    },
    {
      key: "2",
      icon: <HeartOutlined />,
      label: (
        <Link to="/favorites">{APP_CONTENT.HEADER.MENU_ITEMS.FAVORITES}</Link>
      ),
    },
    {
      key: "3",
      icon: <SearchOutlined />,
      label: APP_CONTENT.HEADER.MENU_ITEMS.SEARCH,
    },
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            gap: 24,
          }}
        >
          <div
            className="desktop-menu"
            style={{ display: "flex", alignItems: "center" }}
          >
            <HeaderMenu menuItems={menuItems} selectedKey={getSelectedKey()} />
          </div>
          <div
            className="desktop-auth"
            style={{ display: "flex", alignItems: "center" }}
          >
            <HeaderAuthButtons />
          </div>
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
      `}</style>
    </AntHeader>
  );
};

export default Header;
