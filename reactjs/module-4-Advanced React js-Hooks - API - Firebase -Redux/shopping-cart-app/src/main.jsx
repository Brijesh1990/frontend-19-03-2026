import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CartApp from './CartApp'
import 'bootstrap/dist/css/bootstrap.min.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartApp />
  </StrictMode>,
)
