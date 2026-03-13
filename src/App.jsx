import Layout from "./layouts/Layout";
import ThemeProvider from "./context/ThemeProvider";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}