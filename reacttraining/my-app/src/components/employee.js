import React, { useState } from "react";
import Employeedetails from "./empdetail";
import EmpForm from "./employeeform";

function EmployeeData(){
const emp=[{First:"Mark",Last:"otto",Handle:"@markotto"},
{First:"Mikee",Last:"otto",Handle:"@markotto"},
{First:"chan",Last:"otto",Handle:"@markotto"},
{First:"chapp",Last:"otto",Handle:"@markotto"},]

    const [employee,setEmployee]=useState(emp);
    const [flag,setFlag]=useState(false);
 
    const passempdata=(emps)=>{
        setFlag(true);
        setEmployee(emps);
    }

    const addintotable=(obj)=>{
        setEmployee([...employee,{...obj}])
    }
    const deleterow=(index)=>{
      const demp=[...emp];
      const index = contacts.findIndex((contact) => contact.id === contactId);
      console.log(demp)
        setEmployee([...demp]);
    }

 

    return(
        <>
        <h2>Employee Table</h2>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Instagram Handle</th>
      

    </tr>
  </thead>
  <tbody>

  {employee.map((emps, index) => (
                  
                  <tr onClick={()=>passempdata(emps)} >
                  <th scope="row">{index}</th>
                  <td>{emps.First}</td>
                  <td>{emps.Last}</td>
                  <td>{emps.Handle}</td>
                  <button type="button" class="btn btn-success" >Update</button>
                  <button type="button" class="btn btn-danger" onClick={()=>deleterow(index)}>Delete</button>
                </tr>
                ))}
    
  </tbody>

</table>

<EmpForm addEmp={addintotable}></EmpForm>
<Employeedetails employee={employee}></Employeedetails>
</>
    )
}

export default EmployeeData