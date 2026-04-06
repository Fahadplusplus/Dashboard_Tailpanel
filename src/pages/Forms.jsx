import React, { useState } from 'react';
import { EmployData } from './EmployData';

export default function Forms() {

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    firstname: "",
    lastname: "",
    age: ""
  });
  const [editIndex, setEditIndex] = useState(null);

  const [data, setData] = useState(EmployData);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleAdd = () => {
    setFormData({ id: "", firstname: "", lastname: "", age: "" });
    setEditIndex(null);
    setShowModal(true);
  };
  const handleEdit = (index) => {
    setFormData(data[index]);
    setEditIndex(index);
    setShowModal(true);
  };
  const handleDelete = (index) => {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
    
      const updated = [...data];
      updated[editIndex] = formData;
      setData(updated);
    } else {
      
      setData([...data, { ...formData, id: Date.now() }]);
    }

    setShowModal(false);
  };


  return (
    <>
      <div>Forms</div>
      <button onClick={handleAdd} className="btn btn-primary mb-2">
        Add User
      </button>

      <div className="border my-3 overflow-auto">
        <table className="table table-hover mb-0">
          <thead className="table-light">
            <tr className=''>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Age</th>
              <th scope="col" className='text-center'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.age}</td>
                <td className=' text-center '>
                  <i onClick={() => handleEdit(index)} className='bi bi-pencil-square fs-3 text-primary'></i>
                  <i onClick={() => handleDelete(index)} className='bi bi-trash fs-3 ps-3 text-danger'></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <div className="modal-overlay " >
          <div className="modal-box " style={{ width: "400px", height: "380px" }}>
            <div className='d-flex mb-3' >
              <h3>{editIndex !== null ? "Edit User" : "Add User"}</h3>
              <i className='bi bi-x fs-3 ms-auto text-white rounded-1 px-1 p-0 py-0 bg-danger'  type="button" onClick={() => setShowModal(false)}>

              </i>
            </div>


            <form onSubmit={handleSubmit} className="" >
              <div className=''>
                <label > First Name</label>
                <input
                  className='form-control mb-3 '
                  type="text"
                  name="firstname"
                  required
                  value={formData.firstname}
                  onChange={handleChange}

                />
                <label>Last Name</label>
                <input

                  className='form-control mb-3'
                  type="text"
                  name="lastname"
                  required
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </div>

              <label>Age</label>
              <input
                className='form-control'
                type="number"
                name="age"
                required
                value={formData.age}
                onChange={handleChange}
              />
              <div className='d-flex justify-content-center mt-4'>
                <button className='btn btn-primary ' type="submit">Save</button>
              </div>


            </form>
          </div>
        </div>
      )}
    </>
  );
}