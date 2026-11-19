import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './PropsApp'
// import App from './PropsDestructuring'
// import App from './PropsConditionalRendering'
import 'bootstrap/dist/css/bootstrap.min.css'
import EmployeeApp from './EmployeeApp'
import './style.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <App /> */}
  <EmployeeApp />
  </StrictMode>,
)
