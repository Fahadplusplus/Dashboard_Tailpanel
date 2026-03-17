import React from 'react'
import { Link } from 'react-router-dom'

function ResetPassword() {
  return (
    <div className=" container  ">

      

        <div className="text-center container  d-flex flex-column justify-content-center align-items-center "  style={{paddingTop: "50px"}}>

          


          
          <div className="d-flex align-items-center justify-content-center gap-3 mb-2" style={{paddingTop: "90px"}}>
            <div className="logo-box bg-primary   px-3 rounded-3 shadow-lg fw-bold fs-3">T</div>
            <h2 className="mb-0 lh-base" style={{fontSize: "28px", fontWeight: "bold"}}>TailPanel</h2>
          </div>

          <p className=" mb-4 mt-1">Reset your password</p>

       
          <div className="card Card card-custom p-4 shadow-lg " style={{width: "400px"}}>

            <form>
            <h4 className="text-start">Forgot Password?</h4>
            <p className="text-start text-secondary" style={{fontSize: "12px"}}>No worries, we'll send you reset instructions.</p>
              
              <div className="mb-3 text-start">
                <label className="form-label fs-6">Email Address</label>
                <div className="input-group">
                  
                    <i className="bi bi-envelope text-secondary input-group-text"></i>
                  
                  <input type="email" className="form-control " placeholder="you@example.com"/>
                </div>
              </div>

         



              <button className="btn btn-primary w-100 py-2 mb-3">
                Reset Password →
              </button>

            </form>

        <Link to="/" className="m-0 mt-2 text-secondary" style={{fontSize: "12px"}}> <i className="bi bi-arrow-left mx-2"></i>Back to login</Link>
      

          </div>


          <p className="mt-4  btn  border w-25 shadow-lg ">
            Need help?
            <a href="#" className="text-decoration-none">Contact Support</a>
          </p>

        </div>
    

    </div>
  )
}

export default ResetPassword