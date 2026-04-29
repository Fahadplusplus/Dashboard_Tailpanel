import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersCard from '../components/layout/usermanagementcards/UsersCard';
import UserTable from '../components/layout/usermanagementcards/UserTable';
import AddEmployeeModal from '../components/layout/usermanagementcards/AddEmployeeModal';
import Pagination from '../components/pagination/Pagination';
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";

import ConfirmDelete from '../components/layout/usermanagementcards/ConfirmDelete';



export default function Usermanagement() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState("")
  const [selectedId, setSelectedId] = useState(null);
  const [deleteModal, setdeleteModal] = useState(false);
  const [filter, setFilter] = useState("all");
  const [refetch, setRefetch] = useState(false);
  const [selectedUser, setSelectedUser] = useState("")

  DataTable.use(DT);
  useEffect(() => {

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



  useEffect(() => {
    const table = document.querySelector(".mytestTable");

    const handleClick = (e) => {
      if (e.target.classList.contains("edit-btn")) {

        const id = e.target.getAttribute("data-id");
        const user = users.find((u) => u.id == id);
        
        setSelectedUser(user);
       
        

       
        

        setShowModal(true)
        setMode("Edit User")

        console.log("Edit:", id);
      }

      if (e.target.classList.contains("delete-btn")) {
        const id = e.target.getAttribute("data-id");
        setSelectedId(id);
        setdeleteModal(true)

        console.log("Delete:", id);
      }
    };

    table.addEventListener("click", handleClick);

    return () => table.removeEventListener("click", handleClick);
  },);
const filteredUsers =
  filter === "all"
    ? users
    : users.filter((u) => u.status.toLowerCase() === filter);


  return (
    <>
      <div className='d-flex flex-column flex-lg-row justify-content-between'>
        <div>
          <h1>User Management</h1>
          <p style={{ fontSize: "18px" }}>Manage your team members and their account permissions</p>
        </div>
        <div className='ms-auto'><button onClick={() => { setShowModal(true), setMode("Add User") }} className='btn btn-primary '>Add User</button></div>
        <div>

          {/* <button className='btn btn-outline-primary ms-3'>Export</button> */}
        </div>
      </div>

      <div className='row'>
        <UsersCard users={users} onFilterChange={setFilter} />
      </div>
      <div className='mt-4 '>
        <p className='fs-5'>This filter is showing <span className='fs-5 fw-bold'>{filter.toUpperCase()} USERS</span></p>
      </div>

      <div className=' '>
        <div className='  d-flex align-items-center flex-row-reverse  '>



        </div>

        <div className='test'>
          <DataTable
            
            data={filteredUsers}
            className='mytestTable'
           
            columns={[
              { title: "ID", data: "id" },
              { title: "Name", data: "fullname" },
              { title: "Email", data: "email" },
              { title: "Role", data: "role" },
              { title: "Status", data: "status" },
              { title: "Created At", data: "createdAt" },
              {
                title: "Actions",
                data: null,
                render: function (data, type, row) {
                  return `
      <button class="edit-btn" data-id="${row.id}">Edit</button>
      <button class="delete-btn" data-id="${row.id}">Delete</button>
    `;
                }
              }

            ]}
          />
        </div>

      </div>

      <AddEmployeeModal
        show={showModal}
        btn={mode}
        user={selectedUser} 
        onClose={() => setShowModal(false)}
        onEmployeeAdded={() => setRefetch(prev => !prev)} // ← flips refetch after add
      />

      


      <ConfirmDelete open={deleteModal}
        onClose={() => setdeleteModal(false)} id={selectedId} onEmployeeAdded={() => setRefetch(prev => !prev)} />

    </>
  );
}