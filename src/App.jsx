import { App as AntApp } from "antd";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import MainLayout from "@layouts/MainLayout";

import { persistor, store } from "@redux/store";
import { ProfilePage } from "./pages/ProfilePage";

// Lazy Load
const HomePage = lazy(() => import("@/pages/HomePage"));
const RecipePage = lazy(() => import("@pages/RecipePage"));
const RecipeDetail = lazy(() => import("@components/Recipe/RecipeDetail"));
const LoginPage = lazy(() => import("@/auth/LoginPage"));
const RegisterPage = lazy(() => import("@/auth/RegisterPage"));
const ForgotPasswordPage = lazy(() => import("@/auth/ForgotPasswordPage"));
const NotFoundPage = lazy(() => import("@pages/NotFoundPage"));
const FavoritePage = lazy(() => import("@/pages/FavoritePage"));

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
                  <Route path="recipes" element={<RecipePage />} />
                  <Route path="recipes/:id" element={<RecipeDetail />} />
                  <Route path="users/:id" element={<ProfilePage />} />
                  <Route path="favorites" element={<FavoritePage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                  path="/forgot-password"
                  element={<ForgotPasswordPage />}
                />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </AntApp>
        </Router>
      </PersistGate>
    </Provider>
  );
}
