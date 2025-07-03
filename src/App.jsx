import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import { store } from "@redux/store";

// Lazy Load
const HomePage = lazy(() => import("@/pages/HomePage"));
const RecipePage = lazy(() => import("@pages/RecipePage"));
const RecipeDetail = lazy(() => import("@components/Recipe/RecipeDetail"));
const NotFoundPage = lazy(() => import("@pages/NotFoundPage"));
const FavoritePage = lazy(() => import("@/pages/FavoritePage"));

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="recipes" element={<RecipePage />} />
              <Route path="recipes/:id" element={<RecipeDetail />} />
              <Route path="favorites" element={<FavoritePage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
}
