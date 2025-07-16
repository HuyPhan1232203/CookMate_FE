import { App as AntApp } from "antd";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import MainLayout from "@layouts/MainLayout";
import { persistor, store } from "@redux/store";
import { ProfilePage } from "./pages/ProfilePage";
import ProtectedRoute from "@components/ProtectedRoute";
import AccessDeniedPage from "@/pages/AccessDeniedPage";
import HistoryPage from "./pages/HistoryPage";
import BlogPage from "./pages/BlogPage";

// Lazy Load
const HomePage = lazy(() => import("@/pages/HomePage"));
const RecipePage = lazy(() => import("@pages/RecipePage"));
const RecipeDetail = lazy(() => import("@components/Recipe/RecipeDetail"));
const LoginPage = lazy(() => import("@/auth/LoginPage"));
const RegisterPage = lazy(() => import("@/auth/RegisterPage"));
const ForgotPasswordPage = lazy(() => import("@/auth/ForgotPasswordPage"));
const NotFoundPage = lazy(() => import("@pages/NotFoundPage"));
const FavoritePage = lazy(() => import("@/pages/FavoritePage"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AntApp>
            <Suspense>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<HomePage />} />
                  <Route
                    path="recipes"
                    element={
                      <ProtectedRoute allowedRoles={["user", "admin", "guest"]}>
                        <RecipePage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="history"
                    element={
                      <ProtectedRoute allowedRoles={["user", "admin"]}>
                        <HistoryPage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="recipes/:id"
                    element={
                      <ProtectedRoute allowedRoles={["user", "admin"]}>
                        <RecipeDetail />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="users/:id"
                    element={
                      <ProtectedRoute allowedRoles={["user", "admin"]}>
                        <ProfilePage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="favorites"
                    element={
                      <ProtectedRoute allowedRoles={["user", "admin"]}>
                        <FavoritePage />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="blog"
                    element={
                      <ProtectedRoute allowedRoles={["user", "admin"]}>
                        <BlogPage />
                      </ProtectedRoute>
                    }
                  />
                </Route>
                <Route
                  path="/login"
                  element={
                    <ProtectedRoute allowedRoles={["guest"]}>
                      <LoginPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/register"
                  element={
                    <ProtectedRoute allowedRoles={["guest"]}>
                      <RegisterPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/forgot-password"
                  element={
                    <ProtectedRoute allowedRoles={["guest"]}>
                      <ForgotPasswordPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="dashboard"
                  element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route path="/access-denied" element={<AccessDeniedPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </AntApp>
        </Router>
      </PersistGate>
    </Provider>
  );
}
