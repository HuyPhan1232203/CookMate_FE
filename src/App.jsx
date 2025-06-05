import React from "react";
import { store } from "../redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/home/HomePage";

import { Provider } from "react-redux";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<HomePage />} />
            {/* Các route khác sẽ được thêm vào đây */}
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}
