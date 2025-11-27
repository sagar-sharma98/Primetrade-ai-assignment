import React from "react";
import {
  Box,
  Typography,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  useTheme,
} from "@mui/material";

const Sidebar = ({ filterStatus, setFilterStatus }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: { xs: "100%", md: 260 },
        p: 3,
        bgcolor: theme.palette.primary.main, // primary background
        color: "white",
        height: { xs: "auto", md: "100vh" },
        boxShadow: { md: "4px 0px 20px rgba(0,0,0,0.15)" },
        borderRadius: { xs: 2, md: 0 },
      }}
    >
      <Typography
        variant="h6"
        mb={3}
        fontWeight={600}
        sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}
      >
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
            backgroundColor: theme.palette.background.default,
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
          backgroundColor: theme.palette.background.default,
          borderColor: "white",
          ":hover": {
            borderColor: theme.palette.secondary.main,
            color: theme.palette.secondary.main,
          },
          mt: 1,
        }}
        onClick={() => setFilterStatus("")}
      >
        Clear Filters
      </Button>
    </Box>
  );
};

export default Sidebar;
