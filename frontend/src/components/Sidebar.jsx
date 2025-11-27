import React from "react";
import {
  Box,
  Typography,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const Sidebar = ({ filterStatus, setFilterStatus }) => {
  return (
    <Box
      sx={{
        width: 260,
        p: 3,
        bgcolor: "#3667A6",
        color: "white",
        height: "100vh",
        boxShadow: "4px 0px 20px rgba(0,0,0,0.15)",
      }}
    >
      <Typography variant="h6" mb={3} fontWeight={600}>
        Filters
      </Typography>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel sx={{ color: "white" }}>Status</InputLabel>
        <Select
          value={filterStatus}
          label="Status"
          onChange={(e) => setFilterStatus(e.target.value)}
          sx={{
            color: "white",
            ".MuiSvgIcon-root": { color: "white" },
            borderRadius: 2,
          }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="outlined"
        fullWidth
        sx={{
          color: "white",
          borderColor: "white",
          ":hover": { borderColor: "#BDD8F1", color: "#BDD8F1" },
        }}
        onClick={() => setFilterStatus("")}
      >
        Clear Filters
      </Button>
    </Box>
  );
};

export default Sidebar;
