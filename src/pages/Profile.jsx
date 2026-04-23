import { useContext,useState } from "react"
import { ThemeContext } from "../context/theme-context";
import UserContext from "../context/userContext"

import LogoutModal from "../components/layout/profile/LogoutModal";

export default function Profile() {
  const {user} = useContext(UserContext)
  const { toggleTheme } = useContext(ThemeContext);

    const [showModal, setShowModal] = useState(false);
    

  

  
 
  return (
    <>
 <div className="container-fluid mt-3">
  <div className="row g-3">

    
    <div className="col-12 col-lg-3">
      <div className="d-flex flex-column h-100 gap-3">

        
        <div className="profile-card  p-3 rounded shadow-sm">
          <div><img src='/pencil' className="avatar mb-2" /></div>
          
          <h5>{user.username}</h5>
          <p className=" mb-0">{user.email}</p>
        </div>

      
        <div className="settings-card p-3 rounded shadow-sm">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="switch1"
              onChange={toggleTheme}
            />
            <label className="form-check-label" htmlFor="switch1">
              Dark Mode
            </label>
          </div>
        </div>

        
        <div className="mt-auto">
          <div
            className="p-3 rounded shadow-sm text-danger fw-semibold"
            style={{ cursor: "pointer", background: "var(--Card-bg)" }}
            onClick={() => setShowModal(true)}
          >
            Log out
          </div>
        </div>

      </div>
    </div>

    
    <div className="col-12 col-lg-9">

      
      <div className="profile-box p-4 rounded shadow-sm">

        <div className="row py-2 border-bottom">
          <div className="col-12 col-md-4">Name</div>
          <div className="col-12 col-md-8 fw-bold">
            {user.username}
          </div>
        </div>

        <div className="row py-2 border-bottom">
          <div className="col-12 col-md-4 ">Email</div>
          <div className="col-12 col-md-8 fw-bold">
            {user.email}
          </div>
        </div>

        <div className="row py-2 border-bottom">
          <div className="col-12 col-md-4 ">Phone</div>
          <div className="col-12 col-md-8">Add number</div>
        </div>

        <div className="row py-2">
          <div className="col-12 col-md-4 ">Location</div>
          <div className="col-12 col-md-8">USA</div>
        </div>

      </div>

    </div>

  </div>
</div>

   <LogoutModal 
         show={showModal}
        onClose={() => setShowModal(false)}
     
   />
    </>
  )
}
