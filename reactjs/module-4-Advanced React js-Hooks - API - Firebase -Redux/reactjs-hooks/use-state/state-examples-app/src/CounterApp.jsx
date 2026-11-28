import React,{useState} from 'react'
export default function CounterApp() {
  //destructuring 
  const[counter,setCounter]=useState(0)
  return (
    <div>
    <h1>Counter App</h1>
    <hr align="center" style={{width:"20%"}}/>
    <h2>The counter values is : {counter}</h2>
    <h4>
    <button type='button' onClick={()=>setCounter(counter+1)}>+</button>
    <button type='button' onClick={()=>setCounter(counter-1)}>-</button>
    <button type='button' onClick={()=>setCounter(0)}>Reset</button>
    </h4>  
    </div>
  )
}
