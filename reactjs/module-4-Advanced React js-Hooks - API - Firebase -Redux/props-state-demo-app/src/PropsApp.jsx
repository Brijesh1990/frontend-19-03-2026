import React from 'react'
function PropsApp(props) {

  return (
    <div>
    <h2>The name of students : {props.name}</h2>
    <h3>The age of students :{props.age}</h3>
    <h4>The departments of students : {props.dep}</h4>  
    </div>
  )
}

function  App()
{
    return(
        <>
            <PropsApp name="Yash" age="21" dep="IT" /> 
        </>
    )
}

export default App

