import React, { useState, useEffect } from 'react';
import EmployeeForm from '../Components/EmployeeForm';
import EmployeeList from '../Components/EmployeeList';
import './Pages.css';
import axios from 'axios';

const Employee = () => {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/employee/fetch')
        .then(response => {
            setEmployee(response.data);
        });
    }, []);


    const saveEmployee=(emp)=>{
        axios.post("http://localhost:8080/employee/create", emp)
        .then(response=>{
            setEmployee([...employee,response.data]);
        });
    };

    return(
        <div className="page">
      <h1>Manage Employees</h1>
      <EmployeeForm saveEmployee={saveEmployee} />
      <EmployeeList employees={employee} />
    </div>
    );
};
export default Employee;