import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const { Content } = Layout;

export default function MainLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
}
