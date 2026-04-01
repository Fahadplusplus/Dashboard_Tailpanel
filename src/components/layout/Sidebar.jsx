import { useState } from "react";
import {NavLink, Link} from 'react-router-dom'

export default function Sidebar({ sidebarState, toggleSidebar }) {


    const [openMenu, setOpenMenu] = useState([]);

    const toggleMenu = (menu) => {
        setOpenMenu(prev =>
            prev.includes(menu) ? prev.filter(m => m !== menu) : [...prev, menu]
        );
    };
    return (
        <aside className={`sidebar ${sidebarState} border-end `} >

            <div className="d-flex border-bottom justify-content-center  sidetop pt-3" >
                <div className="logo  ">
                    <div className="d-flex align-items-center ps-4 ">
                        <div
                            className="bg-primary  fw-bold rounded text-white"
                            style={{ padding: "2px 10px" }}
                        >
                            T
                        </div>
                          {sidebarState !== "collapsed" && <h5 className="ms-2 mb-0 fw-bold">TailPanel</h5>}
                      
                    </div>
                </div>
                <div className=" ms-auto  " type="button" onClick={toggleSidebar}> <i className="bi bi-x d-block d-md-none me-2  px-1 rounded cross  "></i> </div>
            </div>
            <div className="sidebarscroll">
                <ul className="menu  ">

                    <li className="nav-item p-0 listitem rounded-2">
                        <NavLink to="/dashboard" className="nav-link active-class rounded-2  d-flex  align-items-center ">
                            <i className="bi bi-speedometer2 me-2"></i>

                            {sidebarState !== "collapsed" && <span>Dashboard</span>}
                        </NavLink>
                    </li>

                    <li className="nav-item p-0  listitem rounded-2">
                        <NavLink to="/analytics" className="nav-link active-class rounded-2 d-flex   align-items-center ">
                            <i className="bi bi-graph-up me-2"></i>
                            {sidebarState !== "collapsed" && <span>Analytics</span>}

                        </NavLink>
                    </li>

                    <li className="nav-item p-0  listitem rounded-2">
                        <NavLink to="/usermanagemennt"  className="nav-link active-class rounded-2 d-flex align-items-center">
                            <i className="bi bi-people me-2"></i>

                            {sidebarState !== "collapsed" && <span>User Management</span>}
                        </NavLink>
                    </li>

                    <li className="nav-item p-0 listitem rounded-2" onClick={() => toggleMenu("Showcase")}>

                        <div  className="nav-link active-class rounded-2 d-flex align-items-center">
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
                            <li className="nav-item p-0 listitem rounded-2">
                                <NavLink to="/showUiComponents" className="nav-link active-class rounded-2 d-flex align-items-center">
                                    <i className="bi bi-stack me-2"></i>
                                    <span>UI Components</span>
                                </NavLink>
                            </li>
                            <li className="nav-item p-0 listitem rounded-2">
                                <NavLink to="/showForms" className="nav-link active-class rounded-2 d-flex align-items-center">
                                    <i className="bi bi-stack me-2"></i>
                                    <span>Forms</span>
                                </NavLink>
                            </li>
                            <li className="nav-item p-0 listitem rounded-2">
                                <NavLink to="/showTables" className="nav-link active-class rounded-2 d-flex align-items-center">
                                    <i className="bi bi-table me-2"></i>
                                    <span>Tables</span>
                                </NavLink>
                            </li>
                        </ul>
                    )}
                    <li className="nav-item p-0 listitem rounded-2" onClick={() => toggleMenu("E-Commerce")}>

                        <div className="nav-link active-class rounded-2 d-flex align-items-center">
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
                              <li className="nav-item p-0 listitem rounded-2">
                                <NavLink  to="/eproduct"  className="nav-link active-class rounded-2 d-flex align-items-center">
                                    <i className="bi bi-box me-2"></i>
                                    <span>Products</span>
                                </NavLink>
                            </li>
                             <li className="nav-item p-0 listitem rounded-2">
                                <NavLink to="/eaddProducts" className="nav-link active-class rounded-2 d-flex align-items-center">
                                    <i className="bi bi-plus me-2"></i>
                                    <span>Add Products</span>
                                </NavLink>
                            </li>
                             <li className="nav-item p-0 listitem rounded-2">
                                <NavLink to="/einvoice" className="nav-link active-class rounded-2 d-flex align-items-center">
                                    <i className="bi bi-file-earmark-richtext me-2"></i>
                                    <span>Invoice</span>
                                </NavLink>
                            </li>
                             <li className="nav-item p-0 listitem rounded-2">
                                <NavLink to="/ecreateInvoice" className="nav-link active-class rounded-2 d-flex align-items-center">
                                    <i className="bi bi-file-earmark-richtext me-2"></i>
                                    <span>Create Invoice</span>
                                </NavLink>
                            </li>
                             <li className="nav-item p-0 listitem rounded-2">
                                <NavLink to="/etransaction" className="nav-link active-class rounded-2 d-flex align-items-center">
                                    <i className="bi bi-shuffle me-2"></i>
                                    <span>Transactions</span>
                                </NavLink>
                            </li>
                        </ul>
                    )}
                    <li className="nav-item p-0 my-2 listitem rounded-2">
                        <NavLink to="/product" className="nav-link active-class rounded-2 d-flex align-items-center">
                            <i className="bi bi-box-seam me-2"></i>
                           {sidebarState !== "collapsed" && <span>Products</span>}
                        </NavLink>
                    </li>

                    <li className="nav-item p-0 my-2 listitem rounded-2">
                        <NavLink to="/tables" className="nav-link active-class rounded-2 d-flex align-items-center">
                            <i className="bi bi-table me-2"></i>
                            
                            
                             {sidebarState !== "collapsed" && <span>Tables</span>}
                        </NavLink>
                    </li>

                    <li className="nav-item p-0 my-2 listitem rounded-2">
                        <NavLink to="/forms" className="nav-link active-class rounded-2 d-flex align-items-center">
                            <i className="bi bi-file-check me-2"></i>
                            
                             {sidebarState !== "collapsed" && <span>Forms</span>}
                        </NavLink>
                    </li>

                    <li className="nav-item p-0 my-2 listitem rounded-2">
                        <NavLink to="/calander" className="nav-link active-class rounded-2 d-flex align-items-center">
                            <i className="bi bi-calendar-date me-2"></i>
                            {sidebarState !== "collapsed" && <span>Calendar</span>}
                        </NavLink>
                    </li>


                    <li className="nav-item p-0 listitem rounded-2" onClick={() => toggleMenu("Pages")}>

                        <div className="nav-link active-class rounded-2 d-flex align-items-center">
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
                          <li className="nav-item p-0 listitem rounded-2">
                                <NavLink to="/filemanager" className="nav-link active-class rounded-2 d-flex align-items-center">
                                    <i className="bi bi-folder me-2"></i>
                                    <span>File Manager</span>
                                </NavLink>
                            </li>
                             <li className="nav-item p-0 listitem rounded-2">
                                <NavLink to="/pricingtable" className="nav-link active-class rounded-2 d-flex align-items-center">
                                    <i className="bi bi-currency-dollar me-2"></i>
                                    <span>Pricing Table</span>
                                </NavLink>
                            </li>
                             <li className="nav-item p-0 listitem rounded-2">
                                <NavLink to="/faqs" className="nav-link active-class rounded-2 d-flex align-items-center">
                                    <i className="bi bi-question-circle me-2"></i>
                                    <span>FAQ</span>
                                </NavLink>
                            </li>
                        </ul>
                    )}

                    <li className="nav-item p-0 my-2 listitem rounded-2">
                        <NavLink to="/profile" className="nav-link active-class rounded-2 d-flex align-items-center">
                            <i className="bi bi-person-fill-gear me-2"></i>
                            
                             {sidebarState !== "collapsed" && <span>Profile</span>}
                        </NavLink>
                    </li>

                    <li className="nav-item p-0 my-2 listitem rounded-2">
                        <NavLink to="/setting" className="nav-link active-class rounded-2 d-flex align-items-center">
                            <i className="bi bi-gear me-2"></i>
                            {sidebarState !== "collapsed" && <span>Setting</span>}
                        </NavLink>
                    </li>
                </ul>

            </div>
            <div className="d-flex align-items-center px-3 pb-3">
                <div className="rounded-circle bg-primary text-white px-2 py-1">
                    AS
                </div>
                <div className="ms-2">
                     {sidebarState !== "collapsed" && <small className="fw-bold d-block">Admin User</small>}
                    {sidebarState !== "collapsed" && <small className="">admin@example.com</small>}
                    
                </div>
            </div>

        </aside>
    );
}