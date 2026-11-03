import React,{useState} from "react";
function App()
{
  // destructuring of array
  // const[name,setName]=useState("Brijesh kumar pandey")
  // return(
  //   <>
  //    <h1>The name of users is : {name}</h1>
  //   </>


  const[name,setName]=useState({

    id:1,
    name:"brijesh",
    age:36,
    department:'IT',
    edu:"Mtech(IT)"

  })

  const updData=()=>{

    setName({
    id:2,
    name:"yash",
    age:24,
    department:'CSE',
    edu:"BCA"

    })

  }

  return(
    <>
     <h1>The name of users is : {name.name}</h1>
     <h2>Age of users is : {name.age}</h2>
     <h3>Department of users is : {name.department}</h3>
     <h4>Educations of users is : {name.edu}</h4>

     <button type="button" onClick={()=>updData()} style={{width:"30%", marginLeft:"35%",padding:"15px",border:"none", color:"green", fontSize:"23px"}}>Update all data ?</button>
    </>
  )
}

export default App 