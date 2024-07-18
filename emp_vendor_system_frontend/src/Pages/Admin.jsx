import React, { useState } from 'react'
import AdminForm from '../Components/AdminForm';
import axios from 'axios';
import './Pages.css';
const Admin = () => {
    const[admin, setAdmin]=useState([]);

    const saveAdmin=(adm)=>{
        axios.post("http://localhost:8080/admin/create", adm)
        .then(response=>{
            setAdmin([...admin,response.data]);
        });
    };
  return (
    <div className="page">
        <h1>Admin creation</h1>
        <AdminForm saveAdmin={saveAdmin} />
    </div>
    
  )
}

export default Admin;