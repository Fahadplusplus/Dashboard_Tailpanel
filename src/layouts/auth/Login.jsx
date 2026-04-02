import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify";






const Login = () => {

    const [showPassword, setShowPassword] = useState(false)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        if (validate()) {

            try {
                const result = await axios.get(
                    `http://localhost:8000/users?username=${username}&password=${password}`
                )

                if (result.data.length > 0) {
                    console.log(result.data);
                    

                    toast.success("Login successful ✅", {
                        position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,


                    });
                    setTimeout(() => {
                        navigate("/dashboard");
                    }, 1500);

                } else {
                     toast.error("Invalid username or password", {
                        
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,


                    });
                    
                }
            } catch (error) {
                console.error("Error during login:", error);
                alert("An error occurred during login. Please try again.");
            }

        }
    }



    const validate = () => {
        let result = true;
        if (username === "" || password === "") {
            result = false;
            toast.error("Please fill in all fields", {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,

            });
        }
    
            return result;


        }


        return (
            <>

                <div className=" container  mt-5 ">




                    <div className="text-center   d-flex flex-column  align-items-center ">


                        <div className="d-flex  gap-3 mb-2" style={{ paddingTop: "90px" }}>
                            <div className="logo-box bg-primary text-white   px-3 rounded-3 shadow-lg    fw-bold fs-3">T</div>
                            <h2 className="mb-0 lh-base" style={{ fontSize: "28px", fontWeight: "bold" }}>TailPanel</h2>
                        </div>

                        <p className=" mb-4 mt-1">Sign in to your account</p>


                        <div className="Card rounded p-4 shadow-lg " style={{ width: "400px" }}>

                            <form>


                                <div className="mb-3 text-start">
                                    <label className="form-label  fs-6">Username</label>
                                    <div className="input-group">
                                        <span className="input-group-text ">
                                            <i className="bi bi-envelope "></i>
                                        </span>



                                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="form-control " placeholder="username" />
                                    </div>
                                </div>


                                <div className="mb-3 mt-4 text-start">
                                    <label className="form-label">Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text ">
                                            <i className="bi bi-lock"></i>
                                        </span>
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} className="form-control" placeholder="••••••••" />
                                        <span onClick={() => setShowPassword(!showPassword)} className="input-group-text">
                                            <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
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


                                <button onClick={handleLogin} type="button" className="btn btn-primary w-100 py-2 mb-3">
                                    Sign In →
                                </button>



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
                            <Link to="/signup" className="text-decoration-none ms-2">Sign up</Link>
                        </p>

                    </div>


                </div>
            </>
        )
    }


    export default Login