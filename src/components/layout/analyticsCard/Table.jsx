import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TableItem from './TableItem'

function Table() {
  const [table, setTable] = useState([])

  useEffect(()=>{
       const fetchRows = async ()=>{

        try{
          const res = await axios.get("http://localhost:8000/tableData")

          setTable(res.data)
          
          

        }
        catch(err){
          console.error(err)
        }
       }

       fetchRows()

  },[])
    

  return (
    <>
    <div className="Order rounded-3  p-3">
    
    <div className=" my-3 overflow-auto">
       
        <table className=" mb-0">
          <thead className="">
            <tr className='text-center'>
              <th scope="col" className=''>Country</th>
              <th scope="col">Users</th>
              <th scope="col">Share</th>
              <th scope="col" className=''>Revenue</th>
            
            </tr>
          </thead>

          <tbody>
               {
      table.map((item)=>(
        <TableItem key={item.id} item={item} />
      
        
      ))
     }
             
            
          </tbody>
        </table>
      </div>
      </div>
    
   
  
    </>
  )
}

export default Table