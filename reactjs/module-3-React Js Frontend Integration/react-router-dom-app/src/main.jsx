import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layout from './Layout'
import LoginApp from './LoginApp'
import PageNotFound from './PageNotFound'
import './style.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Router>
     <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<LoginApp />} />
        <Route path="*" element={<PageNotFound />} />
        
     </Routes>
  </Router>
   
  </StrictMode>,
)
