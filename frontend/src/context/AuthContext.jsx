import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("userToken") || null;
  });

  const signup = ({ name, email, password }) => {
    const newUser = { name, email };
    const token = password;

    localStorage.setItem("user", JSON.stringify(newUser));
    localStorage.setItem("userToken", token);
    setUser(newUser);
    setToken(token);
    toast.success("Signup successful!");
    navigate("/");
  };

  const login = ({ email, password }) => {
    const user = { email, name };
    const token = password;

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("userToken", token);

    setUser(user);
    setToken(token);

    toast.success("Login successful!");
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userToken");
    setUser(null);
    setToken(null);
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  const value = { user, token, login, signup, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
