import React from "react";
import { Button, Space } from "antd";
import { LoginOutlined, UserOutlined } from "@ant-design/icons";
import { APP_CONTENT } from "../../constants/content";

const HeaderAuthButtons = () => (
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
);

export default HeaderAuthButtons;
