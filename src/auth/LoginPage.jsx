import React, { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { APP_CONTENT } from "@constants/content";
import LoginHeader from "./components/LoginHeader";
import LoginForm from "./components/LoginForm";
import BackgroundDecoration from "./components/BackgroundDecoration";
import LoginLayout from "./components/LoginLayout";

import { endpoints } from "@/config/api";
import api from "@/config/axios";
import { useDispatch } from "react-redux";
import { setUser } from "@redux/feature/userSlice";

const LoginPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (values) => {
    try {
      setLoading(true);

      // Match the API's expected request format
      const response = await api.post(endpoints.auth.login, {
        usernameOrEmail: values.email,
        password: values.password,
      });

      console.log(response);

      // Handle successful login
      if (response.data && response.data.access_token) {
        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("userId", response.data.user.userId);
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("isAuthenticated", "true");
        // Cập nhật Redux state
        dispatch(setUser(response.data.user));

        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.access_token}`;

        messageApi.success(
          `Chào mừng ${response.data.user.fullName || "bạn"}!`
        );
        navigate("/");
      } else {
        messageApi.error("Đăng nhập không thành công. Vui lòng thử lại.");
      }
    } catch (error) {
      // Handle error response
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại.";

      messageApi.error(errorMessage);
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginLayout>
      {contextHolder}
      <BackgroundDecoration />
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <LoginHeader
          title="Chào mừng trở lại!"
          subtitle={`Đăng nhập để tiếp tục hành trình nấu ăn với ${APP_CONTENT.APP_NAME}`}
        />
        <LoginForm handleLogin={handleLogin} loading={loading} />
      </div>
    </LoginLayout>
  );
};

export default LoginPage;
