import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function Signup() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()

    if (validate()) {
      try {
        const existingUser = await axios.get(
          `http://localhost:8000/users?email=${email}`
        );

        if (existingUser.data.length > 0) {
          toast.error("User already exists ❌");
          return;
        }
           const existingUsername = await axios.get(
          `http://localhost:8000/users?username=${username}`
        );

        if (existingUsername.data.length > 0) {
          toast.error("Username already takken");
          return;
        }
        await axios.post("http://localhost:8000/users",

          {
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword
          }
        );



        toast.success("Signup successful ✅")
        navigate("/")

      } catch (error) {
        console.log(error);
        toast.error("Signup failed")

      }



    }

  }

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };


  const validate = () => {
    let result = true
    const hasNumbers = /\d/; // \d matches any digit

if (hasNumbers.test(username)) {
  result = false;
  toast.error("Username cannot contain numbers");
}
  
    if (username === "" || username.length < 3 ) {
      result = false;
      toast.error("Invalid Username")

    }
    if (!validateEmail(email)) {
      result = false;
      toast.error("Invalid email")

    }

    if (password.length < 6) {
      result = false;
      toast.error("Password must be at least 6 characters long")
    }
    if (password !== confirmPassword) {
      result = false;
      toast.error("password and confirm password doest not match")
    }

    return result
  }

  return (
    <>

      <div className=" container ">



        <div className="text-center container d-flex flex-column justify-content-center align-items-center " >


          <div className="d-flex align-items-center justify-content-center gap-3 mb-2" style={{ paddingTop: "50px" }}>
            <div className="logo-box bg-primary text-white  px-3 rounded-3 shadow-lg fw-bold fs-3">T</div>
            <h2 className="mb-0 lh-base" style={{ fontSize: "28px", fontWeight: "bold" }}>TailPanel</h2>
          </div>

          <p className=" mb-4 mt-1">Sign in to your account</p>


          <div className="card Card card-custom p-4 shadow-lg " style={{ width: "400px" }}>

            <form>
              <div className="mb-3 text-start">
                <label className="form-label t fs-6">Username</label>
                <div className="input-group">

                  <i className="bi bi-person  input-group-text"></i>

                  <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="form-control " placeholder="John Doe" />
                </div>
                <span>error</span>
              </div>


              <div className="mb-3 text-start">
                <label className="form-label  fs-6">Email Address</label>
                <div className="input-group">

                  <i className="bi bi-envelope  input-group-text"></i>

                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control " placeholder="you@example.com" />
                </div>
              </div>


              <div className="mb-3 mt-4 text-start">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="••••••••" />
                  <span onClick={() => setShowPassword(!showPassword)} className="input-group-text bg-white">
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
                  <input type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" placeholder="••••••••" />
                  <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="input-group-text bg-white">
                    <i className={`bi ${showConfirmPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center my-4">
                <input type="checkbox" />
                <p className="m-0 text-primary" style={{ fontSize: "small" }}>I agree to the Terms of Service and Privacy Policy</p>
              </div>




              <button onClick={handleSignup} type='button' className="btn btn-primary w-100 py-2 mb-3">
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
            <Link to="/" className="text-decoration-none ms-2">Login</Link>
          </p>

        </div>


      </div>
    </>
  )
}

export default Signup