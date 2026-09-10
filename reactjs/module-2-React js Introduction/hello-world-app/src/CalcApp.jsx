import React from "react";

const employee={
id:1001,
name:"brijesh",
age:36,
dept:"IT"
}

const exp={

    a:20,
    b:10
}
function CalcApp()
{
return(
<>
<div className="app">
{/* <p><b>Employee Name is : {employee.name}</b></p> 
<p><b>Employee Id is : {employee.id}</b></p>
<p><b>Employee Age is : {employee.age}</b></p>
<p><b>Employee Department is : {employee.dept}</b></p>     */}

<p>Additions of numbers is :{exp.a+exp.b}</p>
<p>Substractions of numbers is :{exp.a-exp.b}</p>
<p>Multiplications of numbers is :{exp.a*exp.b}</p>
<p>Divisions of numbers is :{exp.a/exp.b}</p>
<p>Modulas of numbers is :{exp.a%exp.b}</p>

</div>
</>
)
}

export default CalcApp