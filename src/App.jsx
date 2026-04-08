import Layout from "./layouts/main/Layout";
import Login from "./layouts/auth/Login";
import Signup from "./layouts/auth/Signup";
import ThemeProvider from "./context/ThemeProvider";
import UserContextProvider from "./context/UserContextProvider";
import { Outlet } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App() {
  return (
    <GoogleOAuthProvider clientId="92243851315-185e39uupmlgug1131m2p9ncnbl6lde3.apps.googleusercontent.com">
       <ThemeProvider>
      <UserContextProvider>
       <AppRoutes />
       </UserContextProvider>
      
          
    </ThemeProvider>
    </GoogleOAuthProvider>
   
  

    
   
  );
}