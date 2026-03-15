import Layout from "./layouts/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ThemeProvider from "./context/ThemeProvider";
import { Outlet } from "react-router-dom";


export default function App() {
  return (
    <ThemeProvider>
       <Layout />
    </ThemeProvider>
  );
}