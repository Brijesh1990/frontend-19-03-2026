import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import './assets/customer/css/style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AboutUs from './components/customer/AboutUs'
import CareerApp from './components/customer/CareerApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/career' element={<CareerApp />} />
    </Routes>
    </Router>
  </StrictMode>,
)
