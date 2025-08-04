import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BACKEND_URL,
});

export { apiInstance };
