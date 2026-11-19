import React from 'react'
 function PropsDestructuring({name, age, dep, course}) {
  return (
    <div>
    <h1>students name is : {name}</h1>
    <h2>students age is : {age}</h2>  
    <h3>students department is : {dep}</h3>  
    <h4>students course is : {course}</h4>  
    
    </div>
  )
}

function App()
{
    return (
        <>
            <PropsDestructuring  name="yash" age="21" dep="IT" course="python developer" />
        </>
    )
}

export default App

