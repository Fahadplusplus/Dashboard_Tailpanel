import React from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../../context/userContext'
import { useContext } from 'react'




function LogoutModal({onClose,show}) {
    
       const {setUser} = useContext(UserContext)
    const navigate = useNavigate()

      const logOut=()=>{
    setUser(null);
       localStorage.removeItem("authUser");
     
      navigate("/")
  }
  if (!show) return null;
      
  return (
     <>
      <div className="modal-backdrop"  />

      <div className="modal-wrapper">
        <div className="modal-box">

          <div className="modal-header  d-flex justify-content-center">
            <h5 className="modal-title">Confirm Logout</h5>
          
          </div>

          <div className="modal-body">
            

          <div className=''>
            <div>
                <p className='text-center'>Are you Sure</p>
                </div>
            <div className='d-flex justify-content-around mt-5 '>
                  <button className='btn btn-primary px-4 ' onClick={logOut}>yes</button>
            <button className=' px-4 btn btn-danger' onClick={onClose} >Cancle</button>
            </div>
            
            
          </div>

           

           
          </div>


        </div>
      </div>
    </>
  )
}

export default LogoutModal