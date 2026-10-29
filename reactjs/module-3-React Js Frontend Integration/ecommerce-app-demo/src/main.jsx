import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/customer/css/style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// customer panel routing
import Layout from './Layout'
import AboutUs from './components/customer/AboutUs'
import CareerApp from './components/customer/CareerApp'
import ProductsApp from './components/customer/ProductsApp'
import ProductsDetails from './components/customer/ProductsDetails'
import CartApp from './components/customer/CartApp'
import CheckoutApp from './components/customer/CheckoutApp'
import FaqApp from './components/customer/FaqApp'
import PrivacyApp from './components/customer/PrivacyApp'
import ContactApp from './components/customer/ContactApp'
import BlogsApp from './components/customer/BlogsApp'
import PageNotFound from './components/customer/PageNotFound'
// admin panel routing
import AdminLoginApp from './components/admin/AdminLoginApp'
import AdminLayout from './AdminLayout'
import AddCategory from './components/admin/AddCategory'
import ManageCustomers from './components/admin/ManageCustomers'
import AddProducts from './components/admin/AddProducts'
import ManageOrders from './components/admin/ManageOrders'
import ManageFeedback from './components/admin/ManageFeedback'
import './assets/admin/css/admin.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/career' element={<CareerApp />} />
      <Route path='/products' element={<ProductsApp />} />
      <Route path='/products-details' element={<ProductsDetails />} />
      <Route path='/view-cart' element={<CartApp />} />
      <Route path='/checkout' element={<CheckoutApp />} />
      <Route path='/faq' element={<FaqApp />} />
      <Route path='/privacy' element={<PrivacyApp />} />
      <Route path='/contact' element={<ContactApp />} />
       <Route path='/blogs' element={<BlogsApp />} />
        <Route path='*' element={<PageNotFound />} />
      <Route path='/admin-login' element={<AdminLoginApp />} />
      <Route path='/admin-login/dashboard' element={<AdminLayout />} />
      <Route path='/admin-login/addcategory' element={<AddCategory />} />
      <Route path='/admin-login/managecustomers' element={<ManageCustomers />} />
      <Route path='/admin-login/addproducts' element={<AddProducts />} />
      <Route path='/admin-login/manage-orders' element={<ManageOrders />} />
      <Route path='/admin-login/manage-feedback' element={<ManageFeedback />} />
    </Routes>
    </Router>
  </StrictMode>,
)
