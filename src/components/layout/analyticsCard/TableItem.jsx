import React from 'react'

function TableItem({item}) {
  return (

       <tr className=''>
                <td className=''>{item.country}</td>
                <td>{item.users}</td>
                <td >{item.share}</td>
                <td className=''>{item.revenue}</td>
                
              </tr>
  )
}

export default TableItem