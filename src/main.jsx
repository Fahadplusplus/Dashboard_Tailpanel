import { StrictMode } from 'react'

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Analytic from './pages/Analytic.jsx';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
       
     
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/analytics",
        element: <Analytic />,
      },
        {
        path: "/login",
        element: <Login />,
      },
        {
        path: "/signup",
        element: <Signup />,
      },
      
       
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);