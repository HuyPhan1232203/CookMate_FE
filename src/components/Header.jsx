import React, { useState } from "react";
import { Layout, Menu, Button, Drawer, Typography, Space } from "antd";
import {
  MenuOutlined,
  UserOutlined,
  LoginOutlined,
  BookOutlined,
  HeartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { APP_CONTENT } from "../constants/content";

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const menuItems = [
    {
      key: "1",
      icon: <BookOutlined />,
      label: APP_CONTENT.HEADER.MENU_ITEMS.RECIPES,
    },
    {
      key: "2",
      icon: <HeartOutlined />,
      label: APP_CONTENT.HEADER.MENU_ITEMS.FAVORITES,
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
        {/* Logo */}
        <div
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
            <span
              style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}
            >
              🍳
            </span>
          </div>
          <Title level={3} style={{ margin: 0, color: "#ff6b35" }}>
            {APP_CONTENT.APP_NAME}
          </Title>
        </div>

        {/* Menu + Auth Buttons bên phải */}
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
            <Menu
              mode="horizontal"
              items={menuItems}
              style={{
                border: "none",
                background: "transparent",
                minWidth: "300px",
                justifyContent: "center",
                flex: 1,
              }}
            />
          </div>
          <div
            className="desktop-auth"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Space size="middle">
              <Button type="default" icon={<LoginOutlined />}>
                {APP_CONTENT.HEADER.BUTTONS.LOGIN}
              </Button>
              <Button 
                type="primary" 
                icon={<UserOutlined />}
                style={{
                  background: "#ff6b35",
                  borderColor: "#ff6b35",
                }}
              >
                {APP_CONTENT.HEADER.BUTTONS.REGISTER}
              </Button>
            </Space>
          </div>
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setMobileMenuVisible(false)}
        open={mobileMenuVisible}
        width={250}
      >
        <Menu mode="vertical" items={menuItems} style={{ border: "none" }} />
        <div style={{ marginTop: 20 }}>
          <Space direction="vertical" style={{ width: "100%" }}>
            <Button type="default" icon={<LoginOutlined />} block>
              {APP_CONTENT.HEADER.BUTTONS.LOGIN}
            </Button>
            <Button 
              type="primary" 
              icon={<UserOutlined />} 
              block
              style={{
                background: "#ff6b35",
                borderColor: "#ff6b35",
              }}
            >
              {APP_CONTENT.HEADER.BUTTONS.REGISTER}
            </Button>
          </Space>
        </div>
      </Drawer>

      <style jsx>{`
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
      
      <style jsx global>{`
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
