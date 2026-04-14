import React from 'react'

function UserTableItem({ item }) {
    return (
      

            <>

            <tr >
                    <td>{item.id}</td>
                    <td>{item.fullname}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td>{item.status}</td>
               </tr> 

            </>

         

            )
}

            export default UserTableItem