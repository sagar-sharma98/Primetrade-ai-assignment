import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: "0px 6px 20px rgba(0,0,0,0.15)",
  p: 4,
  borderRadius: 2,
};

const AddTaskModal = ({ open, handleClose, onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  const handleSubmit = () => {
    if (!title || !description) return alert("Please fill all fields");
    onAdd({ title, description, status });
    setTitle("");
    setDescription("");
    setStatus("pending");
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" mb={2}>
          Add Task
        </Typography>

        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ mb: 2 }}
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={status}
            label="Status"
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          fullWidth
          onClick={() => {
            handleSubmit();
            handleClose();
          }}
        >
          Add Task
        </Button>
      </Box>
    </Modal>
  );
};

export default AddTaskModal;
