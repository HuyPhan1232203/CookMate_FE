import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import { RecipePage } from "@pages/RecipePage";
import HomePage from "@/pages/HomePage";
import { store } from "@redux/store";
import NotFoundPage from "@pages/NotFoundPage";
import { RecipeDetail } from "@components/Recipe";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="recipes" element={<RecipePage />} />
            <Route path="recipes/:id" element={<RecipeDetail />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}
