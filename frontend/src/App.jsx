import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import MealPlan from "./pages/MealPlan";
import Progress from "./pages/Progress";

function App() {
  return (
    <Routes>
  <Route path="/" element={<Navigate to="/login" />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/clients" element={<Clients />} />
  <Route path="/mealplan" element={<MealPlan />} />
  <Route path="/progress" element={<Progress />} />
</Routes>
  );
}

export default App;