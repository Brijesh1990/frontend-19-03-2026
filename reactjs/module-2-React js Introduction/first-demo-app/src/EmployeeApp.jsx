import React from "react";
import Data from "./Data";
function EmployeeApp()
{
    return(
        <>
            <main>
            <h1>Employee details are</h1>
            <hr />
            <div className="app1">
                {Data && Data.map((item)=>{
                    return(
                        <>
                          <div className="box1">
                            <p><img src={item.photo} /></p>
                            {/* <p>{item.id}</p> */}
                            <p>{item.name}</p>
                            <p>{item.age}</p>
                            {/* <p>{item.dept}</p> */}
                            {/* <p>{item.salary}</p> */}
                            <p>{item.edu}</p>
                          </div>
                        </>
                    )
                })}
               
            </div>
            </main>
        </>
    )
}

export default EmployeeApp