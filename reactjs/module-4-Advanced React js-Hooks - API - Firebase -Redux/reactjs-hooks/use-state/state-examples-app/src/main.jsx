import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import CounterApp from './CounterApp'
import DynamicInput from './DynamicInput'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CounterApp /> */}
    <DynamicInput />
  </StrictMode>,
)
