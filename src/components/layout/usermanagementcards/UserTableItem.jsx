import React from 'react'

function UserTableItem({ item }) {
        return (
        <>

         <tr >
                <td>{item.id}</td>
                <td>{item.fullname}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>
                <span className={`status ${item.status.toLowerCase()}`}>
                                                {item.status}
                </span>
                </td>
                  {/* <td className='text-center text-white'><i className='bi bi-star bg-danger p-2 rounded'></i> <i className='bi bi-0-circle ms-2 bg-primary p-2 rounded'></i></td>*/}
        </tr> 

                </>



        )
}

export default UserTableItem