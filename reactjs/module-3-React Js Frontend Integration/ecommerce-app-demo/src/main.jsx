import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/customer/css/style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// customer panel routing
import Layout from './Layout'
import AboutUs from './components/customer/AboutUs'
import CareerApp from './components/customer/CareerApp'
// admin panel routing
import AdminLoginApp from './components/admin/AdminLoginApp'
import AdminLayout from './AdminLayout'
import AddCategory from './components/admin/AddCategory'
import ManageCustomers from './components/admin/ManageCustomers'
import './assets/admin/css/admin.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/career' element={<CareerApp />} />
       <Route path='/admin-login' element={<AdminLoginApp />} />
       <Route path='/admin-login/dashboard' element={<AdminLayout />} />
       <Route path='/admin-login/addcategory' element={<AddCategory />} />
       <Route path='/admin-login/managecutomers' element={<ManageCustomers />} />
    </Routes>
    </Router>
  </StrictMode>,
)
