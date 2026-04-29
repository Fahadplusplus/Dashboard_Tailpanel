import React from 'react'
 import axios from 'axios';
 import { toast } from 'react-toastify';

function ConfirmDelete({open,onClose,id,onEmployeeAdded}) {

     if (!open) return null;

    const handleClose = () => {
   
    onClose();
  };
  
   const handleYes = () => {
     onClose()
   
      axios.delete(`http://localhost:8000/employs/${id}`)
  .then(() => {
    onEmployeeAdded()
     toast.error("User deleted", {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
    
    
                        });
  });
  
   

  };


  return (
   <>
      <div className="modal-backdrop"  />

      <div className="modal-wrapper">
        <div className="modal-box">

          <div className="modal-header  d-flex justify-content-center">
            <h5 className="modal-title">Confirm Delete</h5>
          
          </div>

          <div className="modal-body">
            

          <div className=''>
            <div>
                <p className='text-center'>Are you Sure</p>
                </div>
            <div className='d-flex justify-content-around mt-5 '>
                  <button className='btn btn-primary px-4 ' onClick={handleYes} >yes</button>
            <button className=' px-4 btn btn-danger' onClick={handleClose}  >Cancle</button>
            </div>
            
            
          </div>

           

           
          </div>


        </div>
      </div>
    </>
  )
}

export default ConfirmDelete