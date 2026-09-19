import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import InlineApp from './InlineApp'
// import InternalApp from './InternalApp'
// import ExternalApp from './ExternalApp'
import LogicApp from './LogicApp'
import './style.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <InlineApp /> */}
   {/* <InternalApp/> */}
   {/* <ExternalApp /> */}
   <LogicApp />
  </StrictMode>,
)
