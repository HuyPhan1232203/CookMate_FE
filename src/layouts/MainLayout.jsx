import React from "react";
import { Layout } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";

const { Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Content style={{ flex: 1 }}>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
