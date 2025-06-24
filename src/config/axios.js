import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5173",
});

const handleBefore = (config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
};

const handleError = (error) => {
  console.error("API Error:", error);
  return Promise.reject(error);
};

api.interceptors.request.use(handleBefore, handleError);

export default api;
