import React,{useState} from 'react'
export default function ShowHidePassword() {
    const[show, setShow]=useState(false)
  return (
    <>
      <h3>Show/Hide Password ?</h3>
      <input type={show ? "text" : "password"} placeholder='Enter your password' />

      <button type='button' onClick={()=>setShow(!show)}>{show ? "Hide" :"show"} Password</button>
      
    </>
  )
}
