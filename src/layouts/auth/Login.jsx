import { Link } from "react-router-dom"
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";





const Login = () => {
const { login } = useKindeAuth();

//   const navigate = useNavigate()

//   const handelLogin = (e) => {
//     e.preventDefault()

//     const email = e.target.form[0].value
//     const password = e.target.form[1].value



//     if (email === "admin@gmail.com" && password === "1234") {
      
        

//       navigate("/dashboard") 

//     } else {
//       alert("Invalid credentials")
//     }
//   }

  

    return (
        <>

            <div className=" container  ">
               



                <div className="text-center   d-flex flex-column  align-items-center ">


                    <div className="d-flex  gap-3 mb-2" style={{ paddingTop: "90px" }}>
                        <div className="logo-box bg-primary   px-3 rounded-3 shadow-lg fw-bold fs-3">T</div>
                        <h2 className="mb-0 lh-base" style={{ fontSize: "28px", fontWeight: "bold" }}>TailPanel</h2>
                    </div>

                    <p className=" mb-4 mt-1">Sign in to your account</p>


                    <div className="Card rounded p-4 shadow-lg " style={{ width: "400px" }}>

                        <form>


                            <div className="mb-3 text-start">
                                <label className="form-label  fs-6">Email Address</label>
                                <div className="input-group">
                                     <span className="input-group-text ">
                                         <i className="bi bi-envelope "></i>
                                    </span> 

                                  

                                    <input type="email" className="form-control " placeholder="you@example.com" />
                                </div>
                            </div>


                            <div className="mb-3 mt-4 text-start">
                                <label className="form-label">Password</label>
                                <div className="input-group">
                                    <span className="input-group-text ">
                                        <i className="bi bi-lock"></i>
                                    </span>
                                    <input type="password" className="form-control" placeholder="••••••••" />
                                    <span className="input-group-text">
                                        <i className="bi bi-eye"></i>
                                    </span>
                                </div>
                            </div>

                            
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="remember" />
                                    <label className="form-check-label" >
                                        Remember me
                                    </label>
                                </div>

                                <Link to="/resetpassword" className="text-decoration-none small">
                                    Forgot password?
                                </Link>
                            </div>

                     
                     <button onClick={login} type="button"  className="btn btn-primary w-100 py-2 mb-3">
                                Sign In →
                            </button>
                             {/* <button onClick={register}  type="button">Register</button> */}
                            

                        </form>


                        <div className="divider  my-2">-----------Or continue with-----------</div>


                        <div className="d-grid gap-2 d-flex justify-content-between mt-2">
                            <button className="btn btn-outline-secondary social-btn w-100">
                                <i className="bi bi-google  me-2"></i> Google
                            </button>

                            <button className="btn btn-outline-secondary social-btn w-100">
                                <i className="bi bi-github  me-2"></i> GitHub
                            </button>
                        </div>

                    </div>


                    <p className="mt-4 ">
                        Don't have an account?
                        <Link to="/signup" className="text-decoration-none">Sign up for free</Link>
                    </p>

                </div>


            </div>
        </>
    )
}

export default Login