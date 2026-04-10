import React from 'react'

function TableItem({item}) {
  return (

       <tr className='text-center'>
                <td className='text-start'>{item.country}</td>
                <td>{item.users}</td>
                <td >{item.share}</td>
                <td className='text-end'>{item.revenue}</td>
                
              </tr>
  )
}

export default TableItem