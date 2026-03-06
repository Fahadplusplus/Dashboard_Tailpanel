import { useState } from "react";

export default function Sidebar({ sidebarState, toggleSidebar }) {


    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };
    return (
        <aside className={`sidebar ${sidebarState} border-end `} >

            <div className="d-flex border-bottom justify-content-center" style={{ padding: "15.5px 0px 15px 0px " }}>
                <div className="logo  ">
                    <div className="d-flex align-items-center ps-4 ">
                        <div
                            className="bg-primary  fw-bold rounded"
                            style={{ padding: "2px 10px" }}
                        >
                            T
                        </div>
                        <h5 className="ms-2 mb-0 fw-bold">{sidebarState === "expanded" && "TailPanel"}</h5>
                    </div>
                </div>
                <div className=" ms-auto" type="button" onClick={toggleSidebar}> <i className="bi bi-x d-block d-md-none"></i> </div>
            </div>
            <div className="sidebarscroll">
                <ul className="menu  ">

                    <li className="nav-item ">
                        <a className="nav-link d-flex align-items-center">
                            <i className="bi bi-speedometer2 me-2"></i>

                            {sidebarState !== "collapsed" && <span>Dashboard</span>}
                        </a>
                    </li>

                    <li className="nav-item my-2">
                        <a className="nav-link d-flex align-items-center">
                            <i className="bi bi-graph-up me-2"></i>
                            {sidebarState !== "collapsed" && <span>Analytics</span>}

                        </a>
                    </li>

                    <li className="nav-item my-2">
                        <a className="nav-link d-flex align-items-center">
                            <i className="bi bi-people me-2"></i>

                            {sidebarState !== "collapsed" && <span>User Management</span>}
                        </a>
                    </li>

                    <li className="nav-item" onClick={() => toggleMenu("Showcase")}>

                        <a className="nav-link d-flex align-items-center">
                            <i className="bi bi-star me-2"></i>

                            {sidebarState !== "collapsed" && <span>Showcase</span>}
                        </a>
                    </li>

                    {sidebarState !== "collapsed" && openMenu === "Showcase" && (
                        <ul className="submenu">
                            <li>All Users</li>
                            <li>Add User</li>
                            <li>Roles</li>
                        </ul>
                    )}
                    <li className="nav-item" onClick={() => toggleMenu("E-Commerce")}>

                        <a className="nav-link d-flex align-items-center">
                            <i className="bi bi-cart me-2"></i>

                            {sidebarState !== "collapsed" && <span>E-Commerce</span>}
                        </a>
                    </li>

                    {sidebarState !== "collapsed" && openMenu === "E-Commerce" && (
                        <ul className="submenu">
                            <li>All Users</li>
                            <li>Add User</li>
                            <li>Roles</li>
                        </ul>
                    )}
                    <li className="nav-item my-2">
                        <a className="nav-link d-flex align-items-center">
                            <i className="bi bi-box-seam me-2"></i>
                            {sidebarState === "expanded" && "Products"}
                        </a>
                    </li>

                    <li className="nav-item my-2">
                        <a className="nav-link d-flex align-items-center">
                            <i className="bi bi-table me-2"></i>
                            {sidebarState === "expanded" && "Tables"}
                        </a>
                    </li>

                    <li className="nav-item my-2">
                        <a className="nav-link d-flex align-items-center">
                            <i className="bi bi-file-check me-2"></i>
                            {sidebarState === "expanded" && "Forms"}
                        </a>
                    </li>

                    <li className="nav-item my-2">
                        <a className="nav-link d-flex align-items-center">
                            <i className="bi bi-calendar-date me-2"></i>
                            {sidebarState === "expanded" && "Calendar"}
                        </a>
                    </li>

                    <li className="nav-item" onClick={() => toggleMenu("E-Commerce")}>

                        <a className="nav-link d-flex align-items-center">
                            <i className="bi bi-cart me-2"></i>

                            {sidebarState !== "collapsed" && <span>E-Commerce</span>}
                        </a>
                    </li>

                    {sidebarState !== "collapsed" && openMenu === "E-Commerce" && (
                        <ul className="submenu">
                            <li>All Users</li>
                            <li>Add User</li>
                            <li>Roles</li>
                        </ul>
                    )}

                    <li className="nav-item" onClick={() => toggleMenu("E-Commerce")}>

                        <a className="nav-link d-flex align-items-center">
                            <i className="bi bi-cart me-2"></i>

                            {sidebarState !== "collapsed" && <span>E-Commerce</span>}
                        </a>
                    </li>

                    {sidebarState !== "collapsed" && openMenu === "E-Commerce" && (
                        <ul className="submenu">
                            <li>All Users</li>
                            <li>Add User</li>
                            <li>Roles</li>
                        </ul>
                    )}

                    <li className="nav-item my-2">
                        <a className="nav-link d-flex align-items-center">
                            <i className="bi bi-person-fill-gear me-2"></i>
                            {sidebarState === "expanded" && "Profile"}
                        </a>
                    </li>

                    <li className="nav-item my-2">
                        <a className="nav-link d-flex align-items-center">
                            <i className="bi bi-gear me-2"></i>
                            {sidebarState === "expanded" && "Settings"}
                        </a>
                    </li>
                </ul>
                    
            </div>
             <div className="d-flex align-items-center px-3 pb-3">
          <div className="rounded-circle bg-primary text-white px-2 py-1">
            AS
          </div>
          <div className="ms-2">
            <small className="fw-bold d-block">Admin User</small>
            <small className="text-muted">admin@example.com</small>
          </div>
        </div>
        
        </aside>
    );
}