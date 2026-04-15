import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersCard from '../components/layout/usermanagementcards/UsersCard';
import UserTable from '../components/layout/usermanagementcards/UserTable';
import AddEmployeeModal from '../components/layout/usermanagementcards/AddEmployeeModal';

export default function Usermanagement() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [refetch, setRefetch] = useState(false); // ← trigger

  useEffect(() => {
    // ← everything inside, no external setState call
    const loadUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8000/employs?_page=2&_limit=10");
        setUsers(res.data);
      } catch (e) {
        console.error(e);
      }
    };

    loadUsers();
  }, [refetch]); // ← re-runs when refetch flips

    
    

  
  const handelPage=()=>{
      const res = axios.get("http://localhost:8000/employs?_page=2&_limit=10");
        setUsers(res.data);
    console.log('khbdf');
    

  }




  return (
    <>
      <div className='d-flex flex-column flex-lg-row justify-content-between'>
        <div>
          <h1>User Management</h1>
          <p style={{ fontSize: "18px" }}>Manage your team members and their account permissions</p>
        </div>
        <div className='ms-auto'><button onClick={() => setShowModal(true)} className='btn btn-primary '>Add User</button></div>
        <div>
       
          {/* <button className='btn btn-outline-primary ms-5'>Export</button> */}
        </div>
      </div>

      <div className='row'>
        <UsersCard users={users} />
      </div>

      <div className='mt-3 '>
        <div className='mb-3  d-flex align-items-center flex-row-reverse  '>
          <div> <input type="text" className='global ' placeholder='Search Users' /></div>
         
             
        </div>
        <div className='table-wrapper'>
          <UserTable users={users} />
          <div className='d-flex justify-content-between align-items-center'>
             <div>
            d
          </div>
          <div className=' mt-2  d-flex flex-row-reverse'>
            <button className='btn btn-primary ms-3 '>Prev</button>
            <button className='btn btn-primary' onClick={handelPage}>next</button>
          </div>
          </div>
         
          
        </div>
        
      </div>

      <AddEmployeeModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onEmployeeAdded={() => setRefetch(prev => !prev)} // ← flips refetch after add
      />
    </>
  );
}