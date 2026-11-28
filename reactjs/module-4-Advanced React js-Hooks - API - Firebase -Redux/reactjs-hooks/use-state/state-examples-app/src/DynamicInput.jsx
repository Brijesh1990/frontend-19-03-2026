import React,{useState} from 'react'
export default function DynamicInput() {
    const[name,setName]=useState("");
    return (
    <div>
    <h1>Dynamic input</h1>
    <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
    <br/><br/>
    <h2>The name of users is : {name}</h2>
      
    </div>
  )
}
