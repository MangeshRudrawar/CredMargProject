import React, { useState } from "react";
import './forms.css'
const AdminForm=({saveAdmin})=>{

    const[admin, setAdmin]=useState({name: ''});


    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdmin({ ...admin, [name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        saveAdmin(admin)
        setAdmin({ name: ""});
    };
    return (
        <form onSubmit={handleSubmit} className="form">
        <input type="text" name="name" placeholder="Name" value={admin.name} onChange={handleChange} required />
        <button type="submit">Add Admin</button>
        </form>
        );   

}
export default AdminForm;