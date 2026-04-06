import React, { useState } from "react";
import { EmployData } from './EmployData';

export default function Tables() {

  const [data] = useState(EmployData)


  
  

  return (
    <>
    <div className="table-con  ">
      <table className="custom-table mb-0 shadow">
        <thead className="">
          <tr>
            <td>Sr.No</td>
            <td>ID</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td className="text-center">Action</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,index) =>{
              return(
                <tr key={index}>
                  <td>{index +1}</td>
                  <td>{item.id}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.age}</td>
                  <td className="text-center">
                    <i className="bi bi-pencil-square text-primary fs-4 "></i>
                     <i className="bi bi-trash ps-3 text-danger fs-4"></i>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
     
    </div>
      
    </>
  );
}