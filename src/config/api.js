export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const endpoints = {
  auth: {
    login: `${API_BASE_URL}/auth/login`,
    register: `${API_BASE_URL}/auth/register`,
    forgotPassword: `${API_BASE_URL}/auth/forgot-password`,
  },
  recipes: {
    list: `${API_BASE_URL}/recipes`,
    detail: (id) => `${API_BASE_URL}/recipes/${id}`,
    create: `${API_BASE_URL}/recipes`,
    update: (id) => `${API_BASE_URL}/recipes/${id}`,
    delete: (id) => `${API_BASE_URL}/recipes/${id}`,
  },
  // Add more endpoints as needed
};
