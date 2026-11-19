import React from 'react'

function PropsConditionalRendering({name, isPassed}) {
  return (
    <div>
    <h1>Name is : {name}</h1>
    {isPassed ? (<h2>Congratulation you are Passed</h2>) : (<h2>Sorry you are failed</h2>) }
      
    </div>
  )
}

function App()
{
    return (<>
        <PropsConditionalRendering name="Meet Thakkar" isPassed={true}  />
    </>)
}

export default App