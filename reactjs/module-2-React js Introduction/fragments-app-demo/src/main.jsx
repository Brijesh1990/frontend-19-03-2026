import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ListApp from './ListApp'
// import TeamApp from "./TeamApp";
import './style.css'
// import App from "./FRagementsApp";
import ListDemo from "./ListAppDemo";
createRoot(document.getElementById("jsx-demo")).render(

    <StrictMode>
    {/* <ListApp /> */}
    {/* <TeamApp/> */}
    {/* <App /> */}
    <ListDemo />
    </StrictMode>
)