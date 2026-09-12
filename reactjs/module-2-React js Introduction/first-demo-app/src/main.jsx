import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./CalcApp";
// import AddApp from "./AddressApp";
import EmployeeApp from "./EmployeeApp";
import './style.css'
import 'animate.css'
createRoot(document.getElementById("demo")).render(
    <StrictMode>
     {/* <App/>   */}
     {/* <AddApp/> */}
     <EmployeeApp />
    </StrictMode>
)