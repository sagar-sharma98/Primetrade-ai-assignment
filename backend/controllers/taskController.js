import log from "../message.js";
import Task from "../models/Task.js";


export const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user._id });
  res.json(tasks);
};


export const createTask = async (req, res) => {
  const { title, description, status, priority, dueDate } = req.body;
  const task = new Task({
    user: req.user._id,
    title,
    description,
    status,
    priority,
    dueDate,
  });
  log("new task was created successfully");

  const createdTask = await task.save();
  res.status(201).json(createdTask);
};


export const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  if (task.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: "Not authorized" });
  }

  Object.assign(task, req.body);
  const updatedTask = await task.save();
  log("Task was successfully updated.");
  res.json(updatedTask);
};


export const deleteTask = async (req, res) => {
  const taskId = req.params.id;

  const task = await Task.findById(taskId);
  if (!task) return res.status(404).json({ message: "Task not found" });

  if (task.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: "Not authorized" });
  }

  await task.deleteOne();
  log("Task was successfully deleted.");
  res.json({ message: "Task removed successfully" });
};
