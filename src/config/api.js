export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const endpoints = {
  auth: {
    login: `${API_BASE_URL}/authorize/login`,
    register: `${API_BASE_URL}/authorize/register`,
    forgotPassword: `${API_BASE_URL}/auth/forgot-password`,
  },
  recipes: {
    list: `${API_BASE_URL}/recipes`,
    detail: (id) => `${API_BASE_URL}/recipes/${id}`,
    create: `${API_BASE_URL}/recipes`,
    update: (id) => `${API_BASE_URL}/recipes/${id}`,
    delete: (id) => `${API_BASE_URL}/recipes/${id}`,
  },
  users: {
    list: `${API_BASE_URL}/users`,
    detail: (id) => `${API_BASE_URL}/users/${id}`,
    create: `${API_BASE_URL}/users`,
    update: (id) => `${API_BASE_URL}/users/${id}`,
    delete: (id) => `${API_BASE_URL}/users/${id}`,
  },
  ai: {
    ingredients: `${API_BASE_URL}/ai/recipes/generate`,
    cooking: (id) => `${API_BASE_URL}/ai/recipes/${id}/cooking-steps`,
  },
  // Add more endpoints as needed
};
