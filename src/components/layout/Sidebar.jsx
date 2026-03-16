import { useState } from "react";
import {Link, NavLink} from 'react-router-dom'

export default function Sidebar({ sidebarState, toggleSidebar }) {


    const [openMenu, setOpenMenu] = useState([]);

    const toggleMenu = (menu) => {
        setOpenMenu(prev =>
            prev.includes(menu) ? prev.filter(m => m !== menu) : [...prev, menu]
        );
    };
    return (
        <aside className={`sidebar ${sidebarState} border-end `} >

            <div className="d-flex border-bottom justify-content-center " style={{ padding: "15.5px 0px 15px 0px " }}>
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

                    <li className="nav-item listitem rounded-2">
                        <Link to="/" className="nav-link d-flex align-items-center">
                            <i className="bi bi-speedometer2 me-2"></i>

                            {sidebarState !== "collapsed" && <span>Dashboard</span>}
                        </Link>
                    </li>

                    <li className="nav-item my-2 listitem rounded-2">
                        <Link to="/analytics" className="nav-link d-flex align-items-center">
                            <i className="bi bi-graph-up me-2"></i>
                            {sidebarState !== "collapsed" && <span>Analytics</span>}

                        </Link>
                    </li>

                    <li className="nav-item my-2 listitem rounded-2">
                        <Link to="/analytics"  className="nav-link d-flex align-items-center">
                            <i className="bi bi-people me-2"></i>

                            {sidebarState !== "collapsed" && <span>User Management</span>}
                        </Link>
                    </li>

                    <li className="nav-item listitem rounded-2" onClick={() => toggleMenu("Showcase")}>

                        <div  className="nav-link d-flex align-items-center">
                            <i className="bi bi-star me-2"></i>

                            {sidebarState !== "collapsed" && (
                                <div className="d-flex w-100">
                                    <span>Showcase</span>
                                    <i className={`bi bi-chevron-down ms-auto ${openMenu.includes("Showcase") ? "rotate" : "rotate2"}`}></i>
                                </div>
                            )}

                        </div>

                    </li>
                    {sidebarState !== "collapsed" && openMenu.includes("Showcase") && (
                        <ul className="submenu">
                            <li className="nav-item listitem rounded-2">
                                <Link to="/analytics" className="nav-link d-flex align-items-center">
                                    <i className="bi bi-stack me-2"></i>
                                    <span>UI Components</span>
                                </Link>
                            </li>
                            <li className="nav-item listitem rounded-2">
                                <Link to="/analytics" className="nav-link d-flex align-items-center">
                                    <i className="bi bi-stack me-2"></i>
                                    <span>Forms</span>
                                </Link>
                            </li>
                            <li className="nav-item listitem rounded-2">
                                <Link to="/analytics" className="nav-link d-flex align-items-center">
                                    <i className="bi bi-table me-2"></i>
                                    <span>Tables</span>
                                </Link>
                            </li>
                        </ul>
                    )}
                    <li className="nav-item listitem rounded-2" onClick={() => toggleMenu("E-Commerce")}>

                        <div className="nav-link d-flex align-items-center">
                            <i className="bi bi-cart me-2"></i>

                            {sidebarState !== "collapsed" && (
                                <div className="d-flex w-100">
                                    <span>E-Commerce</span>
                                    <i className={`bi bi-chevron-down ms-auto ${openMenu.includes("E-Commerce") ? "rotate" : "rotate2"}`}></i>
                                </div>
                            )}
                        </div>
                    </li>

                    {sidebarState !== "collapsed" && openMenu.includes("E-Commerce") && (
                        <ul className="submenu">
                              <li className="nav-item listitem rounded-2">
                                <Link  to="/analytics"  className="nav-link d-flex align-items-center">
                                    <i className="bi bi-box me-2"></i>
                                    <span>Products</span>
                                </Link>
                            </li>
                             <li className="nav-item listitem rounded-2">
                                <Link to="/analytics" className="nav-link d-flex align-items-center">
                                    <i className="bi bi-plus me-2"></i>
                                    <span>Add Products</span>
                                </Link>
                            </li>
                             <li className="nav-item listitem rounded-2">
                                <Link to="/analytics" className="nav-link d-flex align-items-center">
                                    <i className="bi bi-file-earmark-richtext me-2"></i>
                                    <span>Invoice</span>
                                </Link>
                            </li>
                             <li className="nav-item listitem rounded-2">
                                <Link to="/analytics" className="nav-link d-flex align-items-center">
                                    <i className="bi bi-file-earmark-richtext me-2"></i>
                                    <span>Create Invoice</span>
                                </Link>
                            </li>
                             <li className="nav-item listitem rounded-2">
                                <Link to="/analytics" className="nav-link d-flex align-items-center">
                                    <i className="bi bi-shuffle me-2"></i>
                                    <span>Transactions</span>
                                </Link>
                            </li>
                        </ul>
                    )}
                    <li className="nav-item my-2 listitem rounded-2">
                        <Link to="/analytics" className="nav-link d-flex align-items-center">
                            <i className="bi bi-box-seam me-2"></i>
                            {sidebarState === "expanded" && "Products"}
                        </Link>
                    </li>

                    <li className="nav-item my-2 listitem rounded-2">
                        <Link to="/analytics" className="nav-link d-flex align-items-center">
                            <i className="bi bi-table me-2"></i>
                            {sidebarState === "expanded" && "Tables"}
                        </Link>
                    </li>

                    <li className="nav-item my-2 listitem rounded-2">
                        <Link to="/analytics" className="nav-link d-flex align-items-center">
                            <i className="bi bi-file-check me-2"></i>
                            {sidebarState === "expanded" && "Forms"}
                        </Link>
                    </li>

                    <li className="nav-item my-2 listitem rounded-2">
                        <Link to="/analytics" className="nav-link d-flex align-items-center">
                            <i className="bi bi-calendar-date me-2"></i>
                            {sidebarState === "expanded" && "Calendar"}
                        </Link>
                    </li>
{/* 
                    <li className="nav-item listitem rounded-2" onClick={() => toggleMenu("Authentication")}>

                        <div className="nav-link d-flex align-items-center">
                            <i className="bi bi-cart me-2"></i>

                            {sidebarState !== "collapsed" && (
                                <div className="d-flex w-100">
                                    <span>Authentication</span>
                                    <i className={`bi bi-chevron-down ms-auto ${openMenu.includes("Authentication") ? "rotate" : "rotate2"}`}></i>
                                </div>
                            )}
                        </div>
                    </li> */}

                    {/* {sidebarState !== "collapsed" && openMenu.includes("Authentication") && (
                        <ul className="submenu">
                            <li className="nav-item listitem rounded-2">
                                <Link to="/login" className="nav-link d-flex align-items-center">
                                    <i className="bi bi-box-arrow-in-right me-2"></i>
                                    <span>Login</span>
                                </Link>
                            </li>
                             <li className="nav-item listitem rounded-2">
                                <Link to="/signup" className="nav-link d-flex align-items-center">
                                    <i className="bi bi-person-add me-2"></i>
                                    <span>Sign Up</span>
                                </Link>
                            </li>
                             <li className="nav-item listitem rounded-2">
                                <Link to="/analytics" className="nav-link d-flex align-items-center">
                                    <i className="bi bi-key me-2"></i>
                                    <span>Reset Password</span>
                                </Link>
                            </li>
                        </ul>
                    )} */}

                    <li className="nav-item listitem rounded-2" onClick={() => toggleMenu("Pages")}>

                        <div className="nav-link d-flex align-items-center">
                            <i className="bi bi-cart me-2"></i>

                            {sidebarState !== "collapsed" && (
                                <div className="d-flex w-100">
                                    <span>Pages</span>
                                    <i className={`bi bi-chevron-down ms-auto ${openMenu.includes("Pages") ? "rotate" : "rotate2"}`}></i>
                                </div>
                            )}
                        </div>
                    </li>

                    {sidebarState !== "collapsed" && openMenu.includes("Pages") && (
                        <ul className="submenu">
                          <li className="nav-item listitem rounded-2">
                                <Link to="/analytics" className="nav-link d-flex align-items-center">
                                    <i className="bi bi-folder me-2"></i>
                                    <span>File Manager</span>
                                </Link>
                            </li>
                             <li className="nav-item listitem rounded-2">
                                <Link to="/analytics" className="nav-link d-flex align-items-center">
                                    <i className="bi bi-currency-dollar me-2"></i>
                                    <span>Pricing Table</span>
                                </Link>
                            </li>
                             <li className="nav-item listitem rounded-2">
                                <Link to="/analytics" className="nav-link d-flex align-items-center">
                                    <i className="bi bi-question-circle me-2"></i>
                                    <span>FAQ</span>
                                </Link>
                            </li>
                        </ul>
                    )}

                    <li className="nav-item my-2 listitem rounded-2">
                        <Link to="/analytics" className="nav-link d-flex align-items-center">
                            <i className="bi bi-person-fill-gear me-2"></i>
                            {sidebarState === "expanded" && "Profile"}
                        </Link>
                    </li>

                    <li className="nav-item my-2 listitem rounded-2">
                        <Link to="/analytics" className="nav-link d-flex align-items-center">
                            <i className="bi bi-gear me-2"></i>
                            {sidebarState === "expanded" && "Settings"}
                        </Link>
                    </li>
                </ul>

            </div>
            <div className="d-flex align-items-center px-3 pb-3">
                <div className="rounded-circle bg-primary text-white px-2 py-1">
                    AS
                </div>
                <div className="ms-2">
                    <small className="fw-bold d-block">Admin User</small>
                    <small className="">admin@example.com</small>
                </div>
            </div>

        </aside>
    );
}