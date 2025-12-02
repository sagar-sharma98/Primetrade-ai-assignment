import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
  Box,
  useTheme,
} from "@mui/material";

const TaskCard = ({ task, onEdit, onDelete }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        borderRadius: 2,
        border: `1px solid ${theme.palette.background.default}`,
        background: theme.palette.background.default,
        height: 330,
        display: "flex",
        flexDirection: "column",
        transition: "0.25s",
        ":hover": {
          transform: "translateY(-4px)",
          boxShadow: "0px 4px 18px rgba(0,0,0,0.15)",
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem" },
            fontWeight: 600,
            color: theme.palette.primary.main,
          }}
        >
          Title
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.85rem", sm: "0.9rem" },
            fontWeight: 500,
            color: "#1e3a5f",
            mb: 1.5,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          {task.title}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem" },
            fontWeight: 600,
            color: theme.palette.primary.main,
          }}
        >
          Description
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.8rem", sm: "0.9rem" },
            color: "#213b5a",
            mb: 1.5,
            height: "70px",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
          }}
        >
          {task.description}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem" },
            fontWeight: 600,
            color: theme.palette.primary.main,
          }}
        >
          Status
        </Typography>

        <Box
          sx={{
            display: "inline-block",
            px: 1.6,
            py: 0.5,
            mt: 0.5,
            borderRadius: "20px",
            fontSize: "0.75rem",
            fontWeight: 600,
            backgroundColor:
              task.status === "completed"
                ? theme.palette.primary.main
                : theme.palette.secondary.main,
            color: "#fff",
          }}
        >
          {task.status.toUpperCase()}
        </Box>
      </CardContent>

      <Divider />

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 2,
          mt: "auto",
        }}
      >
        <Button
          size="small"
          variant="outlined"
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            flex: 1,
            borderColor: theme.palette.background.paper,
            backgroundColor: theme.palette.background.paper,
            ":hover": {
              borderColor: theme.palette.primary.dark,
              color: theme.palette.primary.dark,
            },
          }}
          onClick={() => onEdit(task)}
        >
          Edit
        </Button>

        <Button
          size="small"
          variant="contained"
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            flex: 1,
            background: theme.palette.primary.main,
            ":hover": {
              background: theme.palette.primary.dark,
            },
            ml: 1,
          }}
          onClick={() => onDelete(task.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default TaskCard;
