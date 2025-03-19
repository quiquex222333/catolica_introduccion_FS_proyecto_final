import axios from "axios";
import { useNavigate } from "react-router";
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: import.meta.env.VITE_TIMEOUT,
});

// Función genérica para manejar errores
const handleError = (error) => {
  if (error.response.status === 401) {
    Cookies.remove("authToken");
    const navigate = useNavigate();
    navigate("/login")
  }
  throw error.response;
};

// Métodos CRUD con `async/await`
const requester = {
  get: async (url, params = {}) => {
    try {
      const response = await api.get(url, { params });
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  post: async (url, data) => {
    try {
      const response = await api.post(url, data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  put: async (url, data) => {
    try {
      const response = await api.put(url, data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  delete: async (url) => {
    try {
      const response = await api.delete(url);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },
};

export { api, requester };
