import React from "react";

// // return a single element
// const name="Ammar";
// function ListApp()
// {
//    return <h1>Hello i am :{name}</h1>
// }
// export default ListApp

// return a multiple html elements via Fragments


const employee={
    id:1,
    name:"brijesh",
    age:35,
    department:"IT"
}
function ListApp()
{
return (
    <>
     <div className="app">
        <p>employee Name :{employee.name} <br/> employee id is : {employee.id} <br/>employee department :{employee.department} <br/> employee age is :{employee.age}</p>
     </div>
    </>
)
}
export default ListApp