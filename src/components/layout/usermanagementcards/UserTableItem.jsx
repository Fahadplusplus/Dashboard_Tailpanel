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
                <span className={`status ${item.status.toLowerCase()}`}> {item.status}</span>
                </td>
                <td>{item.createdAt}</td>
                <td className=' '>
                     <i className='bi bi-pencil-square p-2 rounded  text-white userEdit'></i>
                     <i className='bi bi-trash ms-2  p-2 rounded  text-white delEdit'></i>
                </td>
        </tr> 

                </>



        )
}

export default UserTableItem