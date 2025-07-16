// BlogPage.jsx - Trang danh sách blog
// Để sử dụng: import BlogPage vào router hoặc menu
import React, { useEffect, useState } from "react";
import { Card, Row, Col, Typography, Avatar, Spin, Alert, Empty, Modal, Form, Input, message, Popconfirm, Button } from "antd";
import { UserOutlined, CalendarOutlined } from "@ant-design/icons";
import api from "@/config/axios";
import image from "@/assets/images/image_food.jpg";
import BackButton from "@/components/Recipe/BackButton";
import styled from "styled-components";
import { ShimmerTitle } from "@/styles/RecipeStyle/RecipeList.styled";

const { Title, Text, Paragraph } = Typography;

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editBlog, setEditBlog] = useState(null);
  const [form] = Form.useForm();

  // Lấy role từ localStorage
  let role = "guest";
  try {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      if (user && user.role) role = user.role;
    }
  } catch {}

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

  // Lọc blog theo search
  const filteredPosts = posts.filter(
    (post) =>
      post.title?.toLowerCase().includes(search.toLowerCase()) ||
      post.content?.toLowerCase().includes(search.toLowerCase()) ||
      post.description?.toLowerCase().includes(search.toLowerCase())
  );

  // Thêm/xử lý blog
  const handleCreateOrEdit = async (values) => {
    try {
      if (editBlog) {
        await api.put(`https://cookmate-api.lighttail.com/blog/${editBlog.id}`, values);
        message.success("Blog updated!");
      } else {
        await api.post("https://cookmate-api.lighttail.com/blog", values);
        message.success("Blog created!");
      }
      setShowModal(false);
      setEditBlog(null);
      form.resetFields();
      // Reload blogs
      const response = await api.get("https://cookmate-api.lighttail.com/blog");
      setPosts(response.data);
    } catch (err) {
      message.error("Error saving blog!");
    }
  };
  const handleDelete = async (id) => {
    try {
      await api.delete(`https://cookmate-api.lighttail.com/blog/${id}`);
      message.success("Blog deleted!");
      setPosts((prev) => prev.filter((b) => b.id !== id));
    } catch {
      message.error("Error deleting blog!");
    }
  };

  return (
    <div
      style={{ padding: "60px 0", background: "#f8f9fa", minHeight: "100vh" }}
    >
      <div style={{ maxWidth: 1100, margin: "0px auto 32px auto" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 24,
            boxShadow: "0 8px 32px rgba(255,107,53,0.10)",
            padding: 40,
          }}
        >
          {/* Header Blog giống Recipes */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
              marginBottom: 24,
              position: "relative",
              zIndex: 5,
            }}
          >
            {/* Trái: BackButton */}
            <div style={{ minWidth: 60, flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
              <BackButton onClick={() => window.location.href = "/"} />
            </div>
            {/* Giữa: Tiêu đề */}
            <div style={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
              <ShimmerTitle as="h2" style={{ margin: 0, color: "#ff6b35", fontSize: 36, fontWeight: 700, letterSpacing: 1, fontFamily: 'inherit' }}>
                Food Blog
              </ShimmerTitle>
            </div>
            {/* Phải: Nút New Blog */}
            <div style={{ minWidth: 120, flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
              {role === "admin" && (
                <Button
                  type="primary"
                  style={{
                    background: "#ff6b35",
                    border: "none",
                    fontWeight: 700,
                    borderRadius: 12,
                    fontSize: 18,
                    padding: "0 16px",
                    height: 40,
                    minWidth: 120,
                    boxShadow: "0 2px 8px #ffb36633",
                  }}
                  onClick={() => { setShowModal(true); setEditBlog(null); }}
                >
                  + New Blog
                </Button>
              )}
            </div>
          </div>
          {/* Modal tạo/sửa blog */}
          <Modal
            open={showModal}
            title={editBlog ? "Edit Blog" : "Create New Blog"}
            onCancel={() => { setShowModal(false); setEditBlog(null); form.resetFields(); }}
            onOk={() => form.submit()}
            okText={editBlog ? "Save" : "Create"}
            cancelText="Cancel"
          >
            <Form form={form} layout="vertical" onFinish={handleCreateOrEdit} initialValues={editBlog || {}}>
              <Form.Item name="title" label="Title" rules={[{ required: true, message: "Please enter title" }]}> <Input /> </Form.Item>
              <Form.Item name="content" label="Content" rules={[{ required: true, message: "Please enter content" }]}> <Input.TextArea rows={4} /> </Form.Item>
              <Form.Item name="imageUrl" label="Image URL"> <Input /> </Form.Item>
            </Form>
          </Modal>
          {/* Search input giống Recipes */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "16px auto 0 auto",
              maxWidth: 400,
              width: "100%",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#ff9a44",
                fontSize: 20,
                pointerEvents: "none",
              }}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" stroke="#ff9a44" strokeWidth="2" />
                <path
                  d="M20 20L16.65 16.65"
                  stroke="#ff9a44"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search for blog..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: "10px 16px 10px 44px",
                borderRadius: 24,
                border: "1.5px solid #ff9a44",
                fontSize: 16,
                width: "100%",
                outline: "none",
                boxShadow: "0 2px 12px #ffb36622",
                background: "#fffdfa",
                color: "#ff6b35",
                transition: "border 0.2s, box-shadow 0.2s",
                fontWeight: 500,
                letterSpacing: 0.2,
              }}
              onFocus={(e) => (e.target.style.border = "2px solid #ff6b35")}
              onBlur={(e) => (e.target.style.border = "1.5px solid #ff9a44")}
            />
          </div>
          <div
            style={{
              margin: "8px auto 32px auto",
              width: "80px",
              height: "3px",
              background:
                "linear-gradient(90deg, transparent, #ff9a44, #ff6b35, transparent)",
              borderRadius: 20,
              animation: "underlineMove 3s linear infinite alternate",
              backgroundSize: "200% 100%",
            }}
          />
          <style>{`
            @keyframes underlineMove {
              0% { background-position: 0% 50%; }
              100% { background-position: 100% 50%; }
            }
          `}</style>
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
          ) : filteredPosts.length === 0 ? (
            <Empty description="No blog posts yet" style={{ margin: "60px 0" }} />
          ) : (
            <Row gutter={[32, 32]}>
              {filteredPosts.map((post) => (
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
                    actions={role === "admin" ? [
                      <Button key="edit" type="link" onClick={() => { setEditBlog(post); setShowModal(true); form.setFieldsValue(post); }}>Edit</Button>,
                      <Popconfirm key="delete" title="Delete this blog?" onConfirm={() => handleDelete(post.id)} okText="Yes" cancelText="No">
                        <Button type="link" danger>Delete</Button>
                      </Popconfirm>
                    ] : []}
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
                        gap: 16,
                        marginTop: 16,
                      }}
                    >
                      <Avatar
                        size={32}
                        icon={<UserOutlined />}
                        style={{ background: "#ff8c42" }}
                      />
                      <Text style={{ color: "#888", fontWeight: 500 }}>CookMate Blog</Text>
                      <CalendarOutlined style={{ color: "#bbb", marginLeft: 8, marginRight: 4 }} />
                      <Text style={{ color: "#bbb" }}>{new Date(post.createdAt).toLocaleDateString()}</Text>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
