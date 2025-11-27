import express from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getTasks);
router.route("/").post(protect, createTask);
router.route("/:id").put(protect, updateTask);
router.route("/:id").delete(protect, deleteTask);

export default router;
