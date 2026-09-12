import React from "react";
const employee={

    id:1001,
    name:"brijesh",
    age:36,
    dept:"IT",
    salary:11500,
    edu:"M.tech(IT)"
}
function AddApp()
{
    return(
        <>
            <div className="app">

            <p>employee id is {employee.id} <br/> employee name is : {employee.name} <br/> employee age is : {employee.age} <br/> employee salary is : {employee.salary}</p>


            </div>
        </>
    )
}

export default AddApp