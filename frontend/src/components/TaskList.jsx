import React from "react";
import TaskCard from "./TaskCard";
import { Box } from "@mui/material";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: 2,
      }}
    >
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </Box>
  );
};

export default TaskList;
