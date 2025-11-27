import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import Dashboard from "./pages/DashboardPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import { Toaster } from "react-hot-toast";

function App() {
  console.log("app redering");
  return (
    <AuthProvider>
      <TaskProvider>
        <Toaster />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
