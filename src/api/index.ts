import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:4444",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer token",
  },
  timeout: 4000,
});
