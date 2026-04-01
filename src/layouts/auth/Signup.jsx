import React, { useState } from 'react'
import { Link } from 'react-router-dom'



function Signup() {
  const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
 
  return (
    <>
        
    <div className=" container ">

      

        <div className="text-center container d-flex flex-column justify-content-center align-items-center " >

          
          <div className="d-flex align-items-center justify-content-center gap-3 mb-2" style={{paddingTop: "50px"}}>
            <div className="logo-box bg-primary text-white  px-3 rounded-3 shadow-lg fw-bold fs-3">T</div>
            <h2 className="mb-0 lh-base" style={{fontSize: "28px", fontWeight: "bold"}}>TailPanel</h2>
          </div>

          <p className=" mb-4 mt-1">Sign in to your account</p>

       
          <div className="card Card card-custom p-4 shadow-lg " style={{width: "400px"}}>

            <form>
                  <div className="mb-3 text-start">
                <label className="form-label t fs-6">Username</label>
                <div className="input-group">
                  
                    <i className="bi bi-person  input-group-text"></i>
                  
                  <input type="text" className="form-control " placeholder="John Doe"/>
                </div>
              </div>

              
              <div className="mb-3 text-start">
                <label className="form-label  fs-6">Email Address</label>
                <div className="input-group">
                  
                    <i className="bi bi-envelope  input-group-text"></i>
                  
                  <input type="email" className="form-control " placeholder="you@example.com"/>
                </div>
              </div>

              
              <div className="mb-3 mt-4 text-start">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input type={showPassword ? "text" : "password"} className="form-control" placeholder="••••••••"/>
                  <span onClick={()=> setShowPassword(!showPassword)} className="input-group-text bg-white">
                    <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                  </span>
                </div>
              </div>
                <div className="mb-3 mt-4 text-start">
                <label className="form-label">Confirm Password</label>
                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input type={showConfirmPassword ? "text" : "password"} className="form-control" placeholder="••••••••"/>
                  <span onClick={()=> setShowConfirmPassword(!showConfirmPassword)} className="input-group-text bg-white">
                    <i className={ `bi ${showConfirmPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center my-4">
                <input type="checkbox"/>
                <p className="m-0 text-primary" style={{fontSize: "small"}}>I agree to the Terms of Service and Privacy Policy</p>
              </div>

            


              <button  type='button' className="btn btn-primary w-100 py-2 mb-3">
                Create account
              </button>

            </form>


            <div className="divider text-secondary my-2">-----------or sign up with-----------</div>


            <div className="d-grid gap-2 d-flex justify-content-between mt-2">
              <button className="btn btn-outline-secondary social-btn w-100">
                <i className="bi bi-google text-black me-2"></i> Google
              </button>

              <button className="btn btn-outline-secondary social-btn w-100">
                <i className="bi bi-github  me-2"></i> GitHub
              </button>
            </div>

          </div>


                    <p className="mt-4 ">
                        Already have an account?
                        <Link to="/" className="text-decoration-none">Login</Link>
                    </p>

                </div>


            </div>
    </>
  )
}

export default Signup