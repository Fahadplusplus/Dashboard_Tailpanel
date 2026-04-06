import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/userContext";

export default function PublicRoute() {
  const { user } = useContext(UserContext);

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
}