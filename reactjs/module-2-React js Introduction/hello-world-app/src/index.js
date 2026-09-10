import React from "react";
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import './style.css'
import 'animate.css'
// import HelloApp from "./HelloWorld";
import CalcApp from "./CalcApp";
const root=ReactDOM.createRoot(document.getElementById("demo"))
root.render(

    <React.StrictMode>
      {/* <HelloApp />   */}
      <CalcApp />
    </React.StrictMode>

);

export default reportWebVitals
// reportWebVitals load fast content 