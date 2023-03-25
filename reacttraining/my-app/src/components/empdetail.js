import React from "react";

const Employeedetails=({employee})=>{
    return (
        <>
        <h2>Employee Details</h2>
        <div>
        <p>First name{employee.First}</p>
        <p>Last name{employee.Last}</p>
        <p>Handle name {employee.Handle}</p>
        </div>
        </>
    )
}

export default Employeedetails;