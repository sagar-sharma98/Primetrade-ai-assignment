import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#625757",
    },
    secondary: {
      main: "#9D8F8F",
    },
    background: {
      default: "#BCBAB8",
      paper: "#F9F9F9",
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
