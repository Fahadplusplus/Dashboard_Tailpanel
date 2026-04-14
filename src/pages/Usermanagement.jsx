import React from 'react'
import UsersCard from '../components/layout/usermanagementcards/UsersCard'
import UserTable from '../components/layout/usermanagementcards/UserTable'

export default function Usermanagement() {
  return (
  <>
  <h1>User Management</h1>
  <p style={{fontSize:"18px"}}>Manage your team members and their account permissions</p>
   
<div className='row'>
  <UsersCard />
</div>

<div className='mt-3  tableWrap'>

 <div className='mb-3 '>
  <input type="text" className='form-control w-50' placeholder='Search Users' />
 </div>
 <div className='tablediv'>
    <UserTable />
 </div>

</div>
   
  </>
  )
}
