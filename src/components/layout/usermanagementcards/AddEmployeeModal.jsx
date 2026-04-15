import axios from 'axios';
import { useState } from 'react';

function AddEmployeeModal({ show, onClose,onEmployeeAdded }) {

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    role: "",
    status: "",
  });

  const [errors, setErrors] = useState({});

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" })); // clear error on type
  };

  const resetForm = () => {
    setFormData({ fullname: "", email: "", role: "", status: "" });
    setErrors({});
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full name is required";
    } else if (formData.fullname.trim().length < 3) {
      newErrors.fullname = "Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.role) {
      newErrors.role = "Please select a role";
    }

    if (!formData.status) {
      newErrors.status = "Please select a status";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validate()) {
      try {
        await axios.post("http://localhost:8000/employs", {
          ...formData,
          createdAt: new Date().toISOString(),
        });
        onEmployeeAdded();
        handleClose();
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <>
      <div className="modal-backdrop" onClick={handleClose} />

      <div className="modal-wrapper">
        <div className="modal-box">

          <div className="modal-header">
            <h5 className="modal-title">Add Employee</h5>
            <button className="modal-close" onClick={handleClose}>✕</button>
          </div>

          <div className="modal-body">
            <div className="form-group">
              <label>Full Name</label>
              <input
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                type="text"
                placeholder="Ali Khan"
                className={`form-control ${errors.fullname ? "is-invalid" : ""}`}
              />
              {errors.fullname && <div className="invalid-feedback">{errors.fullname}</div>}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="ali@gmail.com"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label>Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className={`form-control ${errors.role ? "is-invalid" : ""}`}
              >
                <option value="">Select role</option>
                <option>Admin</option>
                <option>Developer</option>
                <option>Manager</option>
                <option>User</option>
              </select>
              {errors.role && <div className="invalid-feedback">{errors.role}</div>}
            </div>

            <div className="form-group">
              <label>Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className={`form-control ${errors.status ? "is-invalid" : ""}`} // ← was error.fullname (bug)
              >
                <option value="">Select status</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Inactive</option>
              </select>
              {errors.status && <div className="invalid-feedback">{errors.status}</div>}
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn-cancel" onClick={handleClose}>Cancel</button>
            <button className="btn-submit" onClick={handleSubmit}>Add Employee</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default AddEmployeeModal;