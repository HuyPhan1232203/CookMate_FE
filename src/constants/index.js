/* eslint-disable no-undef */
// API Constants
export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:3001/api";

// App Constants
export const APP_NAME = "CookMate";
export const APP_VERSION = "1.0.0";

// Route Constants
export const ROUTES = {
  HOME: "/",
  RECIPES: "/recipes",
  PROFILE: "/profile",
  LOGIN: "/login",
  REGISTER: "/register",
};

// Theme Constants
export const COLORS = {
  PRIMARY: "#ff6b35",
  SUCCESS: "#52c41a",
  WARNING: "#faad14",
  ERROR: "#ff4d4f",
  INFO: "#1890ff",
};

// Storage Keys
export const STORAGE_KEYS = {
  USER_TOKEN: "user_token",
  USER_DATA: "user_data",
  THEME_MODE: "theme_mode",
};
