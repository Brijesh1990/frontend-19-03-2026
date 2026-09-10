import React from "react";


// function HelloApp()
// {
//     return <h1 align='center' style={{color:"red", fontSize:"70px"}}>Hello world</h1>

//     {/* <p>Lorem ipsum</p> */}
// }
// export default HelloApp


// used react js fragments
// fragments access multiple html elements 
// fragment called via <></>
// fragment called via <React.Fragment></React.Fragment>
// fragment called via <div></div>  


// function HelloApp()
// {
    
//   const name="brijesh";
//   const age=36;
//   const edu="IT";
//   const phone=9998003879;

//     return(
//         <>
//             <div className="app">
//             <h1>Hey : <span>{name}</span></h1>
//             <p>my age is :{age} and my education is :{edu} and my contact numbers is : {phone}</p>
//             </div>
//         </>
//     )
// }

// export default HelloApp




function HelloApp()
{
    
  const name="brijesh";
  const age=36;
  const edu="IT";
  const phone=9998003879;

    return(
        <React.Fragment>
            <div className="app">
            <h1>Hey : <span>{name}</span></h1>
            <p>my age is :{age} and my education is :{edu} and my contact numbers is : {phone}</p>
            </div>
        </React.Fragment>
    )
}

export default HelloApp