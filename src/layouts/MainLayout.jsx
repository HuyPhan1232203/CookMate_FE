import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
