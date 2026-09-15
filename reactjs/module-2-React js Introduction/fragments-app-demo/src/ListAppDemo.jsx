import React from "react";
const fruits=["banana","apple","guvava","mango","grapes","lichi","dragon fruits"];
function ListDemo()
{
    return(
        <>
            <div className="list-app">
                <ul>
                    {fruits.map((item)=>{

                        return(
                            <>
                    
                             <li>{item}</li>

                            </>
                        )
                        
                    })}  
                </ul>
            </div>
        </>
    )
}

export default ListDemo