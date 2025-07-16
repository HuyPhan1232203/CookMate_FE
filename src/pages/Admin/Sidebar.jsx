import React from "react";
import { Menu, Layout } from "antd";
import { DashboardOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

function Sidebar() {
  const navigate = useNavigate();
  return (
    <Sider width={200} style={{ background: '#fff', minHeight: '100vh' }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[window.location.pathname.includes('user') ? 'user' : 'dashboard']}
        style={{ height: '100%', borderRight: 0 }}
        onClick={({ key }) => {
          if (key === 'dashboard') navigate('/admin/dashboard');
          if (key === 'user') navigate('/admin/user');
        }}
        items={[
          {
            key: 'dashboard',
            icon: <DashboardOutlined />,
            label: 'Dashboard',
          },
          {
            key: 'user',
            icon: <UserOutlined />,
            label: 'User Management',
          },
        ]}
      />
    </Sider>
  );
}

export default Sidebar;
