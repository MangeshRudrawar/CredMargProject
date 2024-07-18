import React, { useState } from "react";
import './forms.css'
const EmployeeForm = ({ saveEmployee }) => {
    const [employee, setEmployee] = useState({ name: "", email: "", designation: "", ctc: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveEmployee(employee);
        setEmployee({ name: "", email: "", designation: "", ctc: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text" name="name" placeholder="Name" value={employee.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={employee.email} onChange={handleChange} required />
            <input type="text" name="designation" placeholder="Designation" value={employee.designation} onChange={handleChange} required />
            <input type="number" name="ctc" placeholder="CTC" value={employee.ctc} onChange={handleChange} required />
            <button type="submit">Add Employee</button>
        </form>
    );
};
export default EmployeeForm;