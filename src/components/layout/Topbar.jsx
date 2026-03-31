import { useContext } from "react";

import { ThemeContext } from "../../context/theme-context";
import { useNavigate } from "react-router-dom";


export default function Topbar({ toggleSidebar }) {
   const navigate = useNavigate()

  const { toggleTheme } = useContext(ThemeContext);
   const logOut=()=>{
     
      navigate("/")
  }

  return (
    <nav className="topbar  d-flex border-bottom  ">




      <div className="d-flex">

        <div className="mt-2 fs-5" type="button" onClick={toggleSidebar}>
          <i className="bi bi-list "></i>
        </div>


        <form className="d-none d-md-flex">
          <input
            className="form-control h-75 mt-2 bg-body-secondary "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>



      </div>
      <div className="d-flex ms-auto  align-items-center">
        <div className="">
          <i onClick={toggleTheme} className="me-2 bi bi-brightness-high"  ></i>
          <i className="bi bi-search d-lg-none search me-2"></i>
          <i className="bi bi-tv me-2"></i>
          <i className="bi bi-bell me-2 "></i>
        </div>

        <div className="d-flex">
          <div className="rounded-circle bg-primary mx-2 py-1 px-2 text-white">
            AS
          </div>
        </div>

        <div className="d-none d-lg-block justify-content-center align-items-center">
          <h2 className="m-0 p-0" style={{ fontSize: "12px" }}>Admin User</h2>
          <p className="p-0 m-0" style={{ fontSize: "10px" }}>admin@example.com</p>
        </div>
      </div>
      <button className="btn btn-primary p-0 m-0 ms-3 px-2 py-1 d-none d-md-block" onClick={logOut} style={{fontSize:"10px"}}>log out</button>


    </nav>


  );
}