# what is state in react js ? 

1. state is an object 
2. state are defined to pass data one components o another components
3. state provides mutable objects can  be changed or update  data one components to another
4. state pass data parent to child 

   **examples**
     A => B  

5. state is an object pass data in components  
6. state also used to pass data from parent to child components 
7. state pass in functional components using its hook i.e useState()

8. useState can hold any types of data types in variables 

   **examples**
   useState(0)
   useState({})
   useState("brijesh")


**examples**

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
