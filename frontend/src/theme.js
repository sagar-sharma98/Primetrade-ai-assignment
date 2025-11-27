import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3667A6",
    },
    secondary: {
      main: "#82A6CB",
    },
    background: {
      default: "#BDD8F1",
      paper: "#ffffff",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          padding: "8px",
          background: "#ffffff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          transition: "0.3s",
        },
      },
    },
  },
});
