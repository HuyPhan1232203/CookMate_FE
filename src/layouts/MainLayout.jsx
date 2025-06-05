import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

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
