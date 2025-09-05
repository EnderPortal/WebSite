import axios from "axios";
import { getToken } from "./auth";

const apiURL = "http://localhost:3000";

//instance of axios
export const api = axios.create({
  baseURL: apiURL,
});

/**
 * I retrieve all requests before they are sent
 * so I can add the token.
 */
api.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers!["Authorization"] = `Bearer ${token}`;
  }

  return config;
});
