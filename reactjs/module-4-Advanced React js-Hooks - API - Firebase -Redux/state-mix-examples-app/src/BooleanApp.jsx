import React,{useState} from 'react'
export default function BooleanApp() {
    const[status, setStatus]=useState(false)
  return (
    <>
      <h2>{status ? "I am Online" : "I am Offline"}</h2>
      <button type='button' onClick={()=>setStatus(!status)}>Change Status</button>  
    </>
  )
}
