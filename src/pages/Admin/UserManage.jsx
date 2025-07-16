import api from "@/config/axios";
import { Button, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BackButton from "@/components/Recipe/BackButton";
import styled from "styled-components";
import { ShimmerTitle } from "@/styles/RecipeStyle/RecipeList.styled";

function UserManage() {
  const [data, setData] = useState([]);
  const fetchUser = async () => {
    try {
      const res = await api.get("users");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const res = await api.delete(`users/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      fetchUser();
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  // Đảm bảo body không có margin/padding
  React.useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
    };
  }, []);
  const col = [
    {
      title: "Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Action",
      dataIndex: "userId",
      key: "userId",
      render: (item) => {
        return (
          <div>
            <Button onClick={() => handleDelete(item)}>
              <FaTrash />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', margin: 0, padding: 0, marginLeft: '-50vw', marginRight: '-50vw' }}>
        <Header />
      </div>
      <div
        style={{
          padding: "60px 0 40px 0",
          background: "#f8f9fa",
          minHeight: "100vh",
          marginTop: 0,
        }}
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
            {/* Header User Management giống Dashboard */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
                marginTop: 10,
                marginBottom: 24,
                position: "relative",
                zIndex: 5,
              }}
            >
              <div style={{ minWidth: 60 }}>
                <BackButton onClick={() => window.location.href = "/"} />
              </div>
              <ShimmerTitle style={{ fontSize: 38, fontWeight: 800, color: "#ff6b35", letterSpacing: 1, fontFamily: 'inherit', margin: 0 }}>
                User Management
              </ShimmerTitle>
            </div>
            {/* Table wrapper giữ nguyên */}
            <div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 8px 32px rgba(255,107,53,0.10)', padding: 0, maxWidth: 1100, margin: '0 auto' }}>
              <Table showHeader columns={col} dataSource={data}></Table>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', margin: 0, padding: 0, marginLeft: '-50vw', marginRight: '-50vw' }}>
        <Footer />
      </div>
    </>
  );
}

export default UserManage;
