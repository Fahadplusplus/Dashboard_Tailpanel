import React from 'react'

function UserCarditem({item}) {
  return (
    <>
      <div className='userCard shadow-sm rounded-2 p-4 d-flex justify-content-between align-items-center'>
        <div>
            <p className='p-0 m-0 mt-1'>{item.totalUsers}</p>
            <h4 className='mt-1'>{}total users</h4>
        </div>
        <div>
           <i className={`${item.icon} fs-3 bg-primary p-2 rounded text-white`}></i>
        </div>

      </div>
    </>
  )
}

export default UserCarditem