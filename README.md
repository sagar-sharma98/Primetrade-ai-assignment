# Primetrade Frontend-Backend Assignment

## 📌 Overview

This project is a full-stack web application built as part of the Frontend Developer Intern assignment for Primetrade.  
It includes:

- **Frontend:** React.js with Material-UI
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT-based
- **Task Management:** CRUD operations
- **Logging:** Timestamp-based logs for every major event
- **Postman Collection:** Included in project root

---

## 🚀 Features

### **Frontend**

- Login & Signup (JWT-based)
- Protected Routes
- Add / Edit / Delete Tasks
- Task Status Update
- Clean UI with Material-UI
- Axios interceptor for Authorization
- Toast notifications

### **Backend**

- Register User → `POST /api/auth/register`
- Login User → `POST /api/auth/login`
- Create Task → `POST /api/tasks`
- Get All Tasks → `GET /api/tasks`
- Update Task → `PUT /api/tasks/:id`
- Delete Task → `DELETE /api/tasks/:id`
- Middleware-based authentication
- Logging system with timestamps

---

🧪 API Testing (Postman)

Use the exported Postman collection:

➡️ postman/primetrade-assignment.postman_collection.json

Includes:

Register

Login

Add Task

Get All Tasks

Update Task

Delete Task (with ID)
