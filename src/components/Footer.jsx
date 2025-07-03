import React from "react";
import { Layout, Row, Col, Typography, Space, Divider } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Footer: AntFooter } = Layout;
const { Title, Text, Link } = Typography;

const Footer = () => {
  return (
    <AntFooter
      style={{
        background: "#001529",
        color: "white",
        padding: "40px 20px 20px",
        marginTop: "auto",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[32, 32]}>
          {/* Company Info */}
          <Col xs={24} sm={12} md={6}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #ff6b35, #ff8c42)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 8,
                }}
              >
                <span style={{ color: "white", fontSize: "16px" }}>🍳</span>
              </div>
              <Title level={4} style={{ margin: 0, color: "#ff6b35" }}>
                CookMate
              </Title>
            </div>
            <Text style={{ color: "#8c8c8c" }}>
              Hệ thống gợi ý công thức nấu ăn thông minh, giúp bạn tạo ra những
              món ăn ngon từ nguyên liệu có sẵn.
            </Text>
          </Col>

          {/* Quick Links */}
          <Col xs={24} sm={12} md={6}>
            <Title level={5} style={{ color: "white", marginBottom: 16 }}>
              Liên kết nhanh
            </Title>
            <Space direction="vertical" size="small">
              <Link style={{ color: "#8c8c8c" }}>Trang chủ</Link>
              <Link style={{ color: "#8c8c8c" }}>Công thức</Link>
              <Link style={{ color: "#8c8c8c" }}>Yêu thích</Link>
              <Link style={{ color: "#8c8c8c" }}>Tìm kiếm</Link>
              <Link style={{ color: "#8c8c8c" }}>Về chúng tôi</Link>
            </Space>
          </Col>

          {/* Support */}
          <Col xs={24} sm={12} md={6}>
            <Title level={5} style={{ color: "white", marginBottom: 16 }}>
              Hỗ trợ
            </Title>
            <Space direction="vertical" size="small">
              <Link style={{ color: "#8c8c8c" }}>Trung tâm trợ giúp</Link>
              <Link style={{ color: "#8c8c8c" }}>Điều khoản sử dụng</Link>
              <Link style={{ color: "#8c8c8c" }}>Chính sách bảo mật</Link>
              <Link style={{ color: "#8c8c8c" }}>FAQ</Link>
              <Link style={{ color: "#8c8c8c" }}>Liên hệ</Link>
            </Space>
          </Col>

          {/* Contact Info */}
          <Col xs={24} sm={12} md={6}>
            <Title level={5} style={{ color: "white", marginBottom: 16 }}>
              Liên hệ
            </Title>
            <Space direction="vertical" size="small">
              <div style={{ display: "flex", alignItems: "center" }}>
                <MailOutlined style={{ marginRight: 8, color: "#ff6b35" }} />
                <Text style={{ color: "#8c8c8c" }}>contact@cookmate.vn</Text>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <PhoneOutlined style={{ marginRight: 8, color: "#ff6b35" }} />
                <Text style={{ color: "#8c8c8c" }}>+84 123 456 789</Text>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <EnvironmentOutlined
                  style={{ marginRight: 8, color: "#ff6b35" }}
                />
                <Text style={{ color: "#8c8c8c" }}>Hà Nội, Việt Nam</Text>
              </div>
            </Space>

            {/* Social Media */}
            <div style={{ marginTop: 20 }}>
              <Title level={5} style={{ color: "white", marginBottom: 12 }}>
                Theo dõi chúng tôi
              </Title>
              <Space size="middle">
                <FacebookOutlined
                  style={{ fontSize: 20, color: "#8c8c8c", cursor: "pointer" }}
                  onMouseEnter={(e) => (e.target.style.color = "#1890ff")}
                  onMouseLeave={(e) => (e.target.style.color = "#8c8c8c")}
                />
                <TwitterOutlined
                  style={{ fontSize: 20, color: "#8c8c8c", cursor: "pointer" }}
                  onMouseEnter={(e) => (e.target.style.color = "#1890ff")}
                  onMouseLeave={(e) => (e.target.style.color = "#8c8c8c")}
                />
                <InstagramOutlined
                  style={{ fontSize: 20, color: "#8c8c8c", cursor: "pointer" }}
                  onMouseEnter={(e) => (e.target.style.color = "#ff6b35")}
                  onMouseLeave={(e) => (e.target.style.color = "#8c8c8c")}
                />
                <YoutubeOutlined
                  style={{ fontSize: 20, color: "#8c8c8c", cursor: "pointer" }}
                  onMouseEnter={(e) => (e.target.style.color = "#ff4d4f")}
                  onMouseLeave={(e) => (e.target.style.color = "#8c8c8c")}
                />
              </Space>
            </div>
          </Col>
        </Row>

        <Divider style={{ borderColor: "#434343", margin: "32px 0 20px" }} />

        <div style={{ textAlign: "center" }}>
          <Text style={{ color: "#8c8c8c" }}>
            © 2024 CookMate. Tất cả quyền được bảo lưu.
          </Text>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
