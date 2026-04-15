
import React from 'react';

function UserCarditem({ item, value }) {
  return (
    <div className='userCard shadow-sm rounded-2 p-4 d-flex justify-content-between '>
      <div>
        <h4 className='mt-1'>{item.label}</h4>
        <p className='p-0 m-0 mt-1 fs-4'>{value}</p>
        
      </div>
      <div>
        <i className={`${item.icon} fs-5 bg-primary p-2  rounded text-white`}></i>
      </div>
    </div>
  );
}

export default UserCarditem;