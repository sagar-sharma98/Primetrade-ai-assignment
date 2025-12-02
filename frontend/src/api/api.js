import axios from "axios";
// baseURL: "https://primetrade-ai-assignment-bdxf.onrender.com/api",
// baseURL: "https://primetrade-ai-assignment-bdxf.onrender.com/api",

const API = axios.create({
  baseURL: "https://code-inbound-backend.onrender.com",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("userToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
