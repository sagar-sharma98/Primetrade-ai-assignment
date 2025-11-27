import axios from "axios";

const API = axios.create({
  baseURL: "https://primetrade-ai-assignment-bdxf.onrender.com/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("userToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
