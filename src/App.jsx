import Layout from "./layouts/main/Layout";
import Login from "./layouts/auth/Login";
import Signup from "./layouts/auth/Signup";
import ThemeProvider from "./context/ThemeProvider";
import { Outlet } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
export default function App() {
  return (
    

           <AppRoutes />
   
  

    
   
  );
}