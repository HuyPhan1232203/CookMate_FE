import React, { useState, useEffect } from "react";
import { Button, Space } from "antd";
import { LoginOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { APP_CONTENT } from "../../constants/content";
import UserProfile from "./UserProfile";

const HeaderAuthButtons = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status
    const checkAuthStatus = () => {
      const userData = localStorage.getItem('user');
      const authStatus = localStorage.getItem('isAuthenticated');
      
      if (userData && authStatus === 'true') {
        try {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
          setIsAuthenticated(true);
        } catch (error) {
          console.error('Error parsing user data:', error);
          // Clear invalid data
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          localStorage.removeItem('isAuthenticated');
        }
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    };

    // Check on component mount
    checkAuthStatus();

    // Listen for storage changes (when login/logout happens)
    const handleStorageChange = (e) => {
      if (e.key === 'user' || e.key === 'isAuthenticated') {
        checkAuthStatus();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Also check periodically in case of changes within same tab
    const interval = setInterval(checkAuthStatus, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  // If user is authenticated, show user profile
  if (isAuthenticated && user) {
    return <UserProfile user={user} />;
  }

  // If not authenticated, show login/register buttons
  return (
    <Space size="middle">
      <Link to="/login">
        <Button type="default" icon={<LoginOutlined />}>
          {APP_CONTENT.HEADER.BUTTONS.LOGIN}
        </Button>
      </Link>
      <Link to="/register">
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
      </Link>
    </Space>
  );
};

export default HeaderAuthButtons;
