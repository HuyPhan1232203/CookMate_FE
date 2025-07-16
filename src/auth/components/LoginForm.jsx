import React from "react";
import { Button, Form, Input, Card, Typography, Checkbox, message } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { TEST_ACCOUNTS } from "@/data/mockUsers";
import "../styles/loginStyles.css";

const { Text } = Typography;

const LoginForm = ({ handleLogin, loading }) => {
  const [form] = Form.useForm();

  return (
    <Card
      style={{
        borderRadius: "16px",
        boxShadow: "0 20px 40px rgba(255, 107, 53, 0.15)",
        border: "none",
      }}
      className="animate-fadeInUp animate-delay-1"
    >
      <Form
        form={form}
        name="login"
        onFinish={handleLogin}
        layout="vertical"
        size="large"
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Vui lòng nhập email!" },
            { type: "email", message: "Email không hợp lệ!" },
          ]}
        >
          <Input
            prefix={<UserOutlined style={{ color: "#ff6b35" }} />}
            placeholder="Nhập email của bạn"
            style={{ borderRadius: "8px" }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Mật khẩu"
          rules={[
            { required: true, message: "Vui lòng nhập mật khẩu!" },
            { min: 5, message: "Mật khẩu phải có ít nhất 5 ký tự!" },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined style={{ color: "#ff6b35" }} />}
            placeholder="Nhập mật khẩu của bạn"
            style={{ borderRadius: "8px" }}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Ghi nhớ đăng nhập</Checkbox>
            </Form.Item>
            <Link to="/forgot-password" style={{ color: "#ff6b35" }}>
              Quên mật khẩu?
            </Link>
          </div>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            block
            style={{
              height: "48px",
              borderRadius: "8px",
              background: "#ff6b35",
              borderColor: "#ff6b35",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </Button>
        </Form.Item>

        <TestAccountsSection form={form} />

        <div
          style={{
            textAlign: "center",
            marginTop: "24px",
          }}
        >
          <Text style={{ color: "#666" }}>
            Chưa có tài khoản?{" "}
            <Link
              to="/register"
              style={{
                color: "#ff6b35",
                fontWeight: "600",
              }}
            >
              Đăng ký ngay
            </Link>
          </Text>
        </div>
      </Form>
    </Card>
  );
};

// Extract test accounts section to its own component
const TestAccountsSection = ({ form }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "16px",
        backgroundColor: "#fafafa",
        borderRadius: "8px",
        border: "1px solid #e8e8e8",
      }}
    >
      <Text
        style={{
          color: "#666",
          fontSize: "14px",
          fontWeight: "bold",
          display: "block",
          marginBottom: "12px",
        }}
      >
        🧪 Tài khoản test (click để điền tự động):
      </Text>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {TEST_ACCOUNTS.map((account, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 12px",
              backgroundColor: "#fff",
              borderRadius: "6px",
              cursor: "pointer",
              border: "1px solid #e8e8e8",
              transition: "all 0.2s ease",
            }}
            onClick={() => {
              form.setFieldsValue({
                email: account.email,
                password: account.password,
              });
              message.info(`Đã điền tài khoản ${account.role}`);
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f0f0f0";
              e.currentTarget.style.borderColor = "#ff6b35";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.borderColor = "#e8e8e8";
            }}
          >
            <div>
              <Text
                style={{
                  color: "#333",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {account.email}
              </Text>
              <br />
              <Text style={{ color: "#666", fontSize: "11px" }}>
                {account.description}
              </Text>
            </div>
            <div style={{ textAlign: "right" }}>
              <Text
                style={{
                  color: "#ff6b35",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              >
                {account.role}
              </Text>
              <br />
              <Text
                style={{
                  color: "#999",
                  fontSize: "10px",
                  fontFamily: "monospace",
                }}
              >
                {account.password}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginForm;
