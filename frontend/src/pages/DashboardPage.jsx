import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  useTheme,
} from "@mui/material";
import Sidebar from "../components/Sidebar";
import TaskList from "../components/TaskList";
import AddTaskModal from "../components/modals/AddTaskModal";
import EditTaskModal from "../components/modals/EditTaskModal";
import { TaskContext } from "../context/TaskContext";
import { AuthContext } from "../context/AuthContext";
import API from "../api/api";

const Dashboard = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const { logout, user } = useContext(AuthContext);

  const [filterStatus, setFilterStatus] = useState("");
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const theme = useTheme();

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (taskData) => {
    const res = await API.post("/tasks", taskData);
    setTasks([...tasks, res.data]);
    setAddModalOpen(false);
  };

  const handleEditTask = async (id, updatedData) => {
    const res = await API.put(`/tasks/${id}`, updatedData);
    setTasks(tasks.map((t) => (t._id === id ? res.data : t)));
    setEditModalOpen(false);
  };

  const handleDeleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    setTasks(tasks.filter((t) => t._id !== id));
  };

  const filteredTasks = filterStatus
    ? tasks.filter((t) => t.status === filterStatus)
    : tasks;

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Sidebar filterStatus={filterStatus} setFilterStatus={setFilterStatus} />

      <Box sx={{ flex: 1 }}>
        {/* Header */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            background: theme.palette.primary.main,
            backdropFilter: "blur(6px)",
            px: 3,
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" fontWeight={600}>
              Task Dashboard
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {/* <Avatar sx={{ bgcolor: "#82A6CB" }}>
                {user?.name?.charAt(0)}
              </Avatar> */}

              {/* <Typography>{user?.name}</Typography> */}

              <Button
                variant="outlined"
                sx={{
                  backgroundColor: theme.palette.background.default,
                  color: "#000", 
                  borderColor: theme.palette.primary.main,
                  ":hover": {
                    backgroundColor: theme.palette.secondary.main,
                  },
                }}
                onClick={logout}
              >
                Logout
              </Button>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.background.default,
                  color: "#000",
                  borderColor: theme.palette.primary.main,
                  ":hover": {
                    backgroundColor: theme.palette.secondary.main,
                  },
                }}
                onClick={() => setAddModalOpen(true)}
              >
                + Add Task
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            p: 3,
            height: "calc(100vh - 64px)",
            overflowY: "auto",
            backgroundColor: theme.palette.background.paper,
          }}
        >
          {filteredTasks.length === 0 ? (
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{ textAlign: "center", mt: 5 }}
            >
              No tasks available. Add your first task!
            </Typography>
          ) : (
            <TaskList
              tasks={filteredTasks}
              onEdit={(task) => {
                setSelectedTask(task);
                setEditModalOpen(true);
              }}
              onDelete={handleDeleteTask}
            />
          )}
        </Box>
      </Box>

      <AddTaskModal
        open={addModalOpen}
        handleClose={() => setAddModalOpen(false)}
        onAdd={handleAddTask}
      />

      {selectedTask && (
        <EditTaskModal
          open={editModalOpen}
          handleClose={() => setEditModalOpen(false)}
          task={selectedTask}
          onEdit={handleEditTask}
        />
      )}
    </Box>
  );
};

export default Dashboard;
