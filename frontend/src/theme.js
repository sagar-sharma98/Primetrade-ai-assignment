import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#27374D",
    },
    secondary: {
      main: "#526D82",
    },
    background: {
      default: "#9DB2BF",
      paper: "#DDE6ED",
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
