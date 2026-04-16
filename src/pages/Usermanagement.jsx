import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersCard from '../components/layout/usermanagementcards/UsersCard';
import UserTable from '../components/layout/usermanagementcards/UserTable';
import AddEmployeeModal from '../components/layout/usermanagementcards/AddEmployeeModal';
import Pagination from '../components/pagination/Pagination';
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";



export default function Usermanagement() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [refetch, setRefetch] = useState(false); // ← trigger
  // const [currentPage, setCurrentPage] = useState(1)
  // const [usersPerPage, setUsersPerPage] = useState(10)

  DataTable.use(DT);
  useEffect(() => {
    // ← everything inside, no external setState call
    const loadUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8000/employs");
        setUsers(res.data);
      } catch (e) {
        console.error(e);
      }
    };

    loadUsers();
  }, [refetch]); // ← re-runs when refetch flips








  // const lastIndex = currentPage * usersPerPage;
  // const startingIndex = lastIndex - usersPerPage;

  // const currentUsers = users.slice(startingIndex, lastIndex)


  return (
    <>
      <div className='d-flex flex-column flex-lg-row justify-content-between'>
        <div>
          <h1>User Management</h1>
          <p style={{ fontSize: "18px" }}>Manage your team members and their account permissions</p>
        </div>
        <div className='ms-auto'><button onClick={() => setShowModal(true)} className='btn btn-primary '>Add User</button></div>
        <div>

          {/* <button className='btn btn-outline-primary ms-3'>Export</button> */}
        </div>
      </div>

      <div className='row'>
        <UsersCard users={users} />
      </div>

      <div className='mt-5 '>
        <div className='  d-flex align-items-center flex-row-reverse  '>
          {/* <div> <input type="text" className='global ' placeholder='Search Users' /></div> */}


        </div>
        {/* <div className='table-wrapper'>
          <UserTable className='mytable' users={currentUsers} />
          <div className='d-flex justify-content-between align-items-center'>
            <div>

            </div>
            <div className='mt-2 d-flex flex-row-reverse align-items-center'>

              <Pagination totalUsers={users.length} postsPerPage={usersPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} setPostsPerPage={setUsersPerPage} />


            </div>

          </div>


        </div> */}
        <DataTable
        className='mytestTable'
          data={users}
          columns={[
            { title: "ID", data: "id" },
            { title: "Name", data: "fullname" },
            { title: "Email", data: "email" },
            { title: "Role", data: "role" },
            { title: "Status", data: "status" },
              { title: "Created At", data: "createdAt" }

          ]}
        />
      </div>

      <AddEmployeeModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onEmployeeAdded={() => setRefetch(prev => !prev)} // ← flips refetch after add
      />
    </>
  );
}