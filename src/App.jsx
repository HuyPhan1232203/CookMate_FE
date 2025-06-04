import React from "react";
import { store } from "../redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/home/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { Layout } from "antd";

const { Content } = Layout;

const theme = { 
  token: {
    colorPrimary: '#ff6b35',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1890ff',
    borderRadius: 8,
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
};

export default function App() {
  return (
    <Provider store={store} theme={theme}>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Header />
          <Content>
            <Routes>
              <Route index path="/" element={<HomePage />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </Router>
    </Provider>
  );
}
