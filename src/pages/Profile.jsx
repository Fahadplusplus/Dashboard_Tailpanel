import { useContext } from "react"

import UserContext from "../context/userContext"

export default function Profile() {
  const {user} = useContext(UserContext)
  return (
    <>
    <div className="main-content container-fluid mt-5">

      <section style={{backgroundColor: "#f1f5f9" }}>
        <div className="container-fluid py-4">

       
          <div className="mb-4">
            <h2 className="fw-bold">Profile</h2>
            <p className="text-muted">Manage your profile information and settings.</p>
          </div>

          <div className="card shadow-sm profile-card p-4 mb-4">
            <div className="row align-items-center">

             
              <div className="col-md-2 text-center mb-3 mb-md-0">
                <img src={user.picture} className="rounded-circle img-fluid mb-2" width="120"/>
              </div>

            
              <div className="col-md-7">
                <h4 className="fw-bold mb-1">{user.username}</h4>
                <p className="text-muted mb-2">{user.email}</p>

                <span className="badge badge-pro me-2">Pro Member</span>
                <span className="badge badge-verified">Verified</span>

                <p className="mt-3 text-muted">
                  Senior Product Designer with 8+ years of experience in creating user-centered
                  designs for web and mobile applications.
                </p>

                <div className="row text-muted small">
                  <div className="col-md-6">
                    <p><i className="bi bi-envelope me-2"></i> sarah.johnson@example.com</p>
                    <p><i className="bi bi-geo-alt me-2"></i> San Francisco, CA</p>
                  </div>
                  <div className="col-md-6">
                    <p><i className="bi bi-telephone me-2"></i> +1 (555) 123-4567</p>
                    <p><i className="bi bi-calendar me-2"></i> Joined January 2024</p>
                  </div>
                </div>
              </div>

           
              <div className="col-md-3 text-md-end text-start mt-3 mt-md-0">
                <button className="btn btn-purple px-4">
                  <i className="bi bi-pencil-square me-2"></i>Edit Profile
                </button>
              </div>
            </div>

            <hr className="my-4"/>

        
            <div className="row text-center stats-box">
              <div className="col-md-3">
                <h4>24</h4>
                <p className="text-muted small">Projects</p>
              </div>
              <div className="col-md-3">
                <h4>156</h4>
                <p className="text-muted small">Tasks Completed</p>
              </div>
              <div className="col-md-3">
                <h4>1240</h4>
                <p className="text-muted small">Hours Logged</p>
              </div>
              <div className="col-md-3">
                <h4>12</h4>
                <p className="text-muted small">Team Members</p>
              </div>
            </div>
          </div>

         
          <ul className="nav nav-tabs mb-4">
            <li className="nav-item">
              <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#details">Profile Details</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" data-bs-toggle="tab" data-bs-target="#account">Account Settings</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" data-bs-toggle="tab" data-bs-target="#security">Security</button>
            </li>
          </ul>

          <div className="tab-content">

       
            <div className="tab-pane fade show active" id="details">

              <div className="row">

               
                <div className="col-lg-8">

                  
                  <div className="card shadow-sm p-4 mb-4">
                    <h5 className="fw-bold mb-4">Personal Information</h5>

                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" value="Sarah Johnson"/>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Email Address</label>
                        <input type="email" className="form-control" value="sarah.johnson@example.com" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Phone Number</label>
                        <input type="text" className="form-control" value="+1 (555) 123-4567" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Location</label>
                        <input type="text" className="form-control" value="San Francisco, CA" />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Bio</label>
                        <textarea className="form-control"
                          rows="3">Senior Product Designer with 8+ years of experience...</textarea>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Company</label>
                        <input type="text" className="form-control" value="TechCorp Inc."/>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Position</label>
                        <input type="text" className="form-control" value="Senior Product Designer"/>
                      </div>
                    </div>

                    <div className="text-end mt-4">
                      <button className="btn btn-purple px-4">
                        <i className="bi bi-save me-2"></i>Save Changes
                      </button>
                    </div>
                  </div>

                
                  <div className="card shadow-sm p-4">
                    <h5 className="fw-bold mb-4">Social Links</h5>

                    <div className="mb-3">
                      <label className="form-label"><i className="bi bi-twitter me-2"></i>Twitter</label>
                      <input type="text" className="form-control" value="sarahjohnson" />
                    </div>

                    <div className="mb-3">
                      <label className="form-label"><i className="bi bi-github me-2"></i>GitHub</label>
                      <input type="text" className="form-control" value="sarahjohnson"/>
                    </div>

                    <div className="mb-3">
                      <label className="form-label"><i className="bi bi-linkedin me-2"></i>LinkedIn</label>
                      <input type="text" className="form-control" value="sarah-johnson"/>
                    </div>

                    <div className="text-end">
                      <button className="btn btn-purple px-4">
                        <i className="bi bi-save me-2"></i>Save Changes
                      </button>
                    </div>
                  </div>

                </div>

              
                <div className="col-lg-4">

                 
                  <div className="card shadow-sm p-4 mb-4">
                    <h5 className="fw-bold mb-3">Recent Activity</h5>
                    <ul className="list-unstyled small">
                      <li className="mb-3">
                        <i className="bi bi-dot text-primary"></i>
                        Updated project documentation
                        <div className="text-muted">2 hours ago</div>
                      </li>
                      <li className="mb-3">
                        <i className="bi bi-dot text-primary"></i>
                        Completed design review
                        <div className="text-muted">5 hours ago</div>
                      </li>
                      <li className="mb-3">
                        <i className="bi bi-dot text-primary"></i>
                        Added new team member
                        <div className="text-muted">1 day ago</div>
                      </li>
                    </ul>
                  </div>

                  
                  <div className="card shadow-sm p-4">
                    <h5 className="fw-bold mb-3">Quick Actions</h5>

                    <div className="d-grid gap-2">
                      <button className="btn btn-outline-secondary text-start">
                        <i className="bi bi-upload me-2"></i>Upload Documents
                      </button>
                      <button className="btn btn-outline-secondary text-start">
                        <i className="bi bi-bell me-2"></i>Manage Notifications
                      </button>
                      <button className="btn btn-outline-secondary text-start">
                        <i className="bi bi-shield-lock me-2"></i>Privacy Settings
                      </button>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
    </>
  )
}
