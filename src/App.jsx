import React from "react";
import { store } from "../redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import { Provider } from "react-redux";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import axios config để khởi tạo interceptors
import './utils/axiosConfig';

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<LoginPage />} />
            
            {/* Protected routes */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              } />
              {/* Các route khác sẽ được thêm vào đây */}
            </Route>
          </Routes>
          
          {/* Toast notifications */}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </Router>
      </AuthProvider>
    </Provider>
  );
}
