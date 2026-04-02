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
      // update
      const updated = [...data];
      updated[editIndex] = formData;
      setData(updated);
    } else {
      // add
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

      <div className='border my-3 overflow-auto'>


        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.age}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
  <div className="modal-overlay">
    <div className="modal-box">
      <h3>{editIndex !== null ? "Edit User" : "Add User"}</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={formData.firstname}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={formData.lastname}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />

        <button type="submit">Save</button>
        <button type="button" onClick={() => setShowModal(false)}>
          Cancel
        </button>
      </form>
    </div>
  </div>
)}
    </>
  );
}