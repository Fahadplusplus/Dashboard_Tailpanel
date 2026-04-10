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
          console.log("workig");
          
          console.log(res.data);
          

        }
        catch(err){
          console.error(err)
        }
       }

       fetchRows()

  },[])
    

  return (
    <>
    <div className="bg-white rounded-3 shadow-sm p-3">
    
    <div className="border my-3 overflow-auto">
       
        <table className="table table-hover mb-0">
          <thead className="table-light">
            <tr className='text-center'>
              <th scope="col" className='text-start'>Country</th>
              <th scope="col">Users</th>
              <th scope="col">Share</th>
              <th scope="col" className='text-end'>Revenue</th>
            
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