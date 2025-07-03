import React from "react";
import { Menu } from "antd";

const HeaderMenu = ({ menuItems, selectedKey }) => (
  <Menu
    mode="horizontal"
    items={menuItems}
    selectedKeys={[selectedKey]}
    style={{
      border: "none",
      background: "transparent",
    }}
  />
);

export default HeaderMenu;
