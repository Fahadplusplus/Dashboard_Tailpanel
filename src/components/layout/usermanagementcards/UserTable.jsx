import React from 'react';
import UserTableItem from './UserTableItem';

function UserTable({ users = [] }) { // ← receive users, no useEffect/axios
  return (
    <table className='custom-table'>
      <thead>
        <tr>
          <th className='thead'>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item) => (
          <UserTableItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;