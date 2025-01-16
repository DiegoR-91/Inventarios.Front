import axios from "axios";
import { logout } from "./logout";

const AMBIENT: string = import.meta.env.VITE_REACT_APP_AMBIENT;
const API_PROD: string = import.meta.env.VITE_REACT_APP_PROD;
const API_QA: string = import.meta.env.VITE_REACT_APP_QA;

const instanceApi = axios.create({
  baseURL: AMBIENT === "prod" ? API_PROD : API_QA,
  headers: {
    "Content-Type": "application/json",
  },
});

instanceApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instanceApi.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error?.response?.status === 401) {
      logout();
    }
    return Promise.reject(error);
  }
);
export default instanceApi;
