import { useState, useEffect } from "react";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar"
import Counter from "../components/layout/Counter"
import DashboardCard from "../components/layout/DashboardCard";
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
  const cardsData = [
    { id: 1, cardTitle: "Total Revenue", cardSubTitle: "$45,231.89", cardText: "vs last month", percent: "20.1%", icon: "bi bi-currency-dollar" },
    { id: 2, cardTitle: "Active Users", cardSubTitle: "2,350", cardText: "vs last month", percent: "15.3%", icon: "bi bi-currency-dollar" },
    { id: 3, cardTitle: "Total Orders", cardSubTitle: "560", cardText: "vs last month", percent: "4.2%", icon: "bi bi-currency-dollar" },
    { id: 4, cardTitle: "Converstion Rate", cardSubTitle: "3.42%", cardText: "vs last month", percent: "8.7%", icon: "bi bi-currency-dollar" }
  ];

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

          <h1>Dashboard Content</h1>
          {/* <Counter /> */}
          {/* <DashboardCard cardTitle="fahad" cardSubTitle="Nasir" cardText="Abacus" percent="20.1%" icon="bi bi-star" /> */}
          
          <div className="row">
            {cardsData.map((card) => (
              <div className="col-12 col-md-6 col-xxl-3 g-3" key={card.id}>
                <DashboardCard
                  cardTitle={card.cardTitle}
                  cardSubTitle={card.cardSubTitle}
                  cardText={card.cardText}
                  icon={card.icon}
                />
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

// https://puikinsh.github.io/TailPanel/