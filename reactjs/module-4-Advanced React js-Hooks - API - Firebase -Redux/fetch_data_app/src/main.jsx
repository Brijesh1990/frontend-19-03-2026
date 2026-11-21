import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import StudentsData from './StudentsData'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    < StudentsData />
  </StrictMode>,
)
