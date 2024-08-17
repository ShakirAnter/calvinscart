import axios from "axios";
import { API_BASE_URL } from "../config/apiConfig";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Add more interceptors, request handlers, etc.

export default apiClient;
