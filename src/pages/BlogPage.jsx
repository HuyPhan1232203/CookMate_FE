// BlogPage.jsx - Trang danh sách blog
// Để sử dụng: import BlogPage vào router hoặc menu
import React, { useEffect, useState } from "react";
import { Card, Row, Col, Typography, Avatar, Spin, Alert, Empty } from "antd";
import { UserOutlined, CalendarOutlined } from "@ant-design/icons";
import api from "@/config/axios";
import image from "@/assets/images/image_food.jpg";

const { Title, Text, Paragraph } = Typography;

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get(
          "https://cookmate-api.lighttail.com/blog"
        );
        setPosts(response.data);
      } catch (err) {
        setError("Unable to load blog list. Please try again!");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div
      style={{ padding: "60px 0", background: "#f8f9fa", minHeight: "100vh" }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: 40 }}>
          📝 Food Blog
        </Title>
        {loading ? (
          <div style={{ textAlign: "center", margin: "60px 0" }}>
            <Spin size="large" />
          </div>
        ) : error ? (
          <Alert
            type="error"
            message={error}
            showIcon
            style={{ marginBottom: 32 }}
          />
        ) : posts.length === 0 ? (
          <Empty description="No blog posts yet" style={{ margin: "60px 0" }} />
        ) : (
          <Row gutter={[32, 32]}>
            {posts.map((post) => (
              <Col xs={24} md={12} key={post.id}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={post.title}
                      src={image || post.imageUrl}
                      style={{
                        height: 200,
                        objectFit: "cover",
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      }}
                    />
                  }
                  style={{
                    borderRadius: 12,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  }}
                  bodyStyle={{ padding: 20 }}
                >
                  <Title level={4} style={{ marginBottom: 8 }}>
                    {post.title}
                  </Title>
                  <Paragraph ellipsis={{ rows: 2 }}>
                    {post.content || post.description || ""}
                  </Paragraph>
                  <div style={{ margin: "12px 0" }}>
                    {/* Nếu có tags thì hiển thị, nếu không thì bỏ qua */}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginTop: 8,
                    }}
                  >
                    <Avatar
                      size={32}
                      icon={<UserOutlined />}
                      style={{ background: "#ff8c42" }}
                    />
                    <Text strong>{post.author || "CookMate Blog"}</Text>
                    <span style={{ color: "#aaa" }}>
                      <CalendarOutlined style={{ marginRight: 4 }} />
                      {post.createdAt
                        ? new Date(post.createdAt).toLocaleDateString("vi-VN")
                        : ""}
                    </span>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
