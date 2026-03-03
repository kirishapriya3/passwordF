import axios from "axios";

// const API_BASE_URL = "http://localhost:5000";
const API_BASE_URL = "https://passwordb.onrender.com";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authAPI = {
  register: (userData) =>
    api.post("/api/auth/register", userData),

  login: (credentials) =>
    api.post("/api/auth/login", credentials),

  forgotPassword: (email) =>
    api.post("/api/auth/forgot-password", { email }),

  resetPassword: (token, newPassword) =>
    api.post("/api/auth/reset-password", { token, newPassword }),
};

export default api;