import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App name="yash" /> */}
    <App props={{name:"yash",age:36,edu:'Mtech(IT)'}} />
  </StrictMode>,
)
