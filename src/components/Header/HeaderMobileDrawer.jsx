import React from "react";
import { Drawer, Menu, Button, Space } from "antd";
import { LoginOutlined, UserOutlined } from "@ant-design/icons";
import { APP_CONTENT } from "../../constants/content";

const HeaderMobileDrawer = ({ open, onClose, menuItems, selectedKey }) => (
  <Drawer
    title="Menu"
    placement="right"
    onClose={onClose}
    open={open}
    width={250}
  >
    <Menu
      mode="vertical"
      items={menuItems}
      selectedKeys={[selectedKey]}
      style={{ border: "none" }}
    />
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
);

export default HeaderMobileDrawer;
