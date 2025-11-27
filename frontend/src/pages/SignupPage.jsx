import React, { useState, useContext } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      return alert("Please fill all fields");
    }
    try {
      const res = await API.post("/auth/register", formData);
      localStorage.setItem("userToken", res.data.token);
      signup({
        name: formData.name,
        email: formData.email,
        password: res.data.token,
      });
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "#f5f5f5",
      }}
    >
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" mb={3} align="center">
          Signup
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Signup
          </Button>
        </form>
        <Typography mt={2} align="center">
          Already have an account?{" "}
          <Button onClick={() => navigate("/login")}>Login</Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Signup;
