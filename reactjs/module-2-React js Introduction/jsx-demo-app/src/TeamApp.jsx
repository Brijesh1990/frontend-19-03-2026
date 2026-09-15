import React from "react";
import Data from "./Data";
function TeamApp()
{
    return (
        <React.Fragment>
            <main>
            <h1>Our Dynamic Teams</h1>
            <hr/>
            <div className="team-app">
              {/* load all teams member dynamically */}
              {Data && Data.map((items)=>{
                return (
                    <>
                      <div className="team">
                       <p><img src={items.photo} style={{width:"90%", height:"200px"}}/></p>
                       <p><b>Name :</b>{items.name}</p>
                       <p><b>Area :</b>{items.area}</p>
                       <p><button type="button">Join Team ?</button></p>
                      </div>
                    </>
                )
              })}
              
            </div>
            </main>
        </React.Fragment>
    )
}

export default TeamApp