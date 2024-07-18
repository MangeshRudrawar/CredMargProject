import React from "react";

const EmployeeList=({employees})=>{

    return(
        <div className="list">
            <h2>Employees List</h2>
            <ul>
                {employees.map((employee)=>(
                    <li key={employee.email}>
                    {employee.name}, {employee.designation}, {employee.ctc}, {employee.email}
                    </li>
                ))}
            </ul>

        </div>
    );
};
export default EmployeeList;