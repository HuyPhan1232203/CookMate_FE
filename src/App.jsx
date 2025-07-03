import React from "react";
import { store } from "../redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}
