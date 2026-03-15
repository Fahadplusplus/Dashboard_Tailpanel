import { useState, useEffect } from "react";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar"

import { Outlet } from "react-router-dom";
import "../styles/Layout.css";


export default function Layout() {

  const [sidebarState, setSidebarState] = useState("expanded");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setSidebarState("mobileClosed");
      } else {
        setIsMobile(false);
        setSidebarState("expanded");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarState(
        sidebarState === "mobileOpen"
          ? "mobileClosed"
          : "mobileOpen"
      );
    } else {
      setSidebarState(
        sidebarState === "expanded"
          ? "collapsed"
          : "expanded"
      );
    }
  };
 

  return (
    <div className="layout">

      <Sidebar
        sidebarState={sidebarState}
        toggleSidebar={toggleSidebar}
        isMobile={isMobile}
      />

      <div className={`main ${sidebarState}`}>
        <Topbar toggleSidebar={toggleSidebar} />
       
      
             <div className="content">
    <Outlet />
    </div>
      </div>
  
     

    </div>
  );
}

// https://puikinsh.github.io/TailPanel/