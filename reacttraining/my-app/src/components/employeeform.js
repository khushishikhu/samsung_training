import React, { useState } from "react";

const EmpForm=({addEmp})=>{

    const [empData,setempData] =useState({First:"",Last:"",Handle:""})
    const getvalue=(e)=>{
      //e.preventDefault();
      const newdata = {...empData};
      newdata[e.target.name]=e.target.value;
      console.log(newdata);
      setempData(newdata);
    }

    const addEmployee = (event) => {
     //event.preventDefault();
 
      addEmp(empData);
    };

    return (
<>
<h2>Employee Form</h2>
<div class="col-md-4 ml-4">
<div class=" input-group flex-nowrap mb-3 ">
  <span class="input-group-text" id="addon-wrapping">First name</span>
  <input type="text" class="form-control" name="First" placeholder="First" onChange={getvalue} aria-label="Username" aria-describedby="addon-wrapping" />
</div>

        
<div class="input-group flex-nowrap mb-3">
  <span class="input-group-text" id="addon-wrapping">Last name</span>
  <input type="text" class="form-control" name="Last" placeholder="Last" onChange={getvalue} aria-label="Username" aria-describedby="addon-wrapping" />
</div>
<div class="input-group flex-nowrap mb-3">
  <span class="input-group-text" id="addon-wrapping">Instagram Handle</span>
  <input type="text" class="form-control" name="Handle"  placeholder="Handle" onChange={getvalue} aria-label="Username" aria-describedby="addon-wrapping" />
</div>
</div>
<button type="button" class="btn btn-primary" onClick={addEmployee}>Button</button>
</>
    )
}

export default EmpForm