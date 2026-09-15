import React from "react";
// return single elements without fragments
// const name="Yash";
// function App()
// {
//     return <h1 style={{textAlign:"center"}}>Hi :{name}</h1>

// }
// export default App 

// with fragments
const name="Yash";
function App()
{
    return(
    // <div>
    // <h1 style={{textAlign:"center"}}>Hi :{name}</h1>
    // <p style={{textAlign:"center"}}>I am 35 years of Old</p> 
    // </div>

    // <>
    
    // <h1 style={{textAlign:"center"}}>Hi :{name}</h1>
    // <p style={{textAlign:"center"}}>I am 35 years of Old</p> 
    

    // </>


    <React.Fragment>

    <h1 style={{textAlign:"center"}}>Hi :{name}</h1>
    <p style={{textAlign:"center"}}>I am 35 years of Old</p> 
    
    </React.Fragment>

    );
}
export default App 
