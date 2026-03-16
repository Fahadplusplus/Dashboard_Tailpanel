import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layouts/main/Layout";
import Login from "../layouts/auth/Login";
import Signup from "../layouts/auth/Signup";
import ProcetedRoutes from "../layouts/auth/ProcetedRoutes"

import Dashboard from "../pages/Dashboard";
import Analytic from "../pages/Analytic";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<ProcetedRoutes />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytic />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}