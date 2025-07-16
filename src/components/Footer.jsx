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
              Smart recipe suggestion system, helping you create delicious
              dishes from available ingredients.
            </Text>
          </Col>

          {/* Quick Links */}
          <Col xs={24} sm={12} md={6}>
            <Title level={5} style={{ color: "white", marginBottom: 16 }}>
              Quick Links
            </Title>
            <Space direction="vertical" size="small">
              <Link style={{ color: "#8c8c8c" }}>Home</Link>
              <Link style={{ color: "#8c8c8c" }}>Recipes</Link>
              <Link style={{ color: "#8c8c8c" }}>Favorites</Link>
              <Link style={{ color: "#8c8c8c" }}>Search</Link>
              <Link style={{ color: "#8c8c8c" }}>About Us</Link>
            </Space>
          </Col>

          {/* Support */}
          <Col xs={24} sm={12} md={6}>
            <Title level={5} style={{ color: "white", marginBottom: 16 }}>
              Support
            </Title>
            <Space direction="vertical" size="small">
              <Link style={{ color: "#8c8c8c" }}>Help Center</Link>
              <Link style={{ color: "#8c8c8c" }}>Terms of Service</Link>
              <Link style={{ color: "#8c8c8c" }}>Privacy Policy</Link>
              <Link style={{ color: "#8c8c8c" }}>FAQ</Link>
              <Link style={{ color: "#8c8c8c" }}>Contact</Link>
            </Space>
          </Col>

          {/* Contact Info */}
          <Col xs={24} sm={12} md={6}>
            <Title level={5} style={{ color: "white", marginBottom: 16 }}>
              Contact
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
                <Text style={{ color: "#8c8c8c" }}>
                  Ho Chi Minh City, Vietnam
                </Text>
              </div>
            </Space>

            {/* Social Media */}
            <div style={{ marginTop: 20 }}>
              <Title level={5} style={{ color: "white", marginBottom: 12 }}>
                Follow us
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
            © 2024 CookMate. All rights reserved.
          </Text>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
