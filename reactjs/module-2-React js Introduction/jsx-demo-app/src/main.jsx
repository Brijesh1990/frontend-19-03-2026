import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ListApp from './ListApp'
import TeamApp from "./TeamApp";
import './style.css'
createRoot(document.getElementById("jsx-demo")).render(

    <StrictMode>
    {/* <ListApp /> */}
    <TeamApp/>
    </StrictMode>
)