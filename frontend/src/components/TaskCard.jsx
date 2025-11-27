import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
  Box,
} from "@mui/material";

const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        border: "1px solid #d0d9e6",
        transition: "0.25s",
        background: "#ffffff",
        ":hover": {
          transform: "translateY(-4px)",
          boxShadow: "0px 4px 18px rgba(0,0,0,0.10)",
        },
      }}
    >
      <CardContent>
        <Typography
          variant="caption"
          sx={{ fontWeight: 600, color: "#3667A6" }}
        >
          TITLE
        </Typography>
        <Typography variant="h6" sx={{ mb: 2, color: "#214177" }}>
          {task.title}
        </Typography>

        <Typography
          variant="caption"
          sx={{ fontWeight: 600, color: "#3667A6" }}
        >
          DESCRIPTION
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {task.description}
        </Typography>

        <Typography
          variant="caption"
          sx={{ fontWeight: 600, color: "#3667A6" }}
        >
          STATUS
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: 0.5,
            fontWeight: 600,
            color: task.status === "completed" ? "green" : "orange",
          }}
        >
          {task.status.toUpperCase()}
        </Typography>
      </CardContent>

      <Divider />

      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button size="small" onClick={() => onEdit(task)}>
          Edit
        </Button>

        <Button size="small" color="error" onClick={() => onDelete(task._id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default TaskCard;
