import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBarApp() {
  return (
  <>

  <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
    
    <div className="container">
      
      {/* LOGO */}
      <Link 
        className="navbar-brand"
        to="/"
        data-aos="fade-right"
        data-aos-duration={1000}
      >
        
        <i className="bi bi-code-slash text-primary" /> <span>My</span>Website
      </Link>
      {/* MOBILE TOGGLER */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        
        <span className="navbar-toggler-icon" />
      </button>
      {/* NAVIGATION */}
      <div className="collapse navbar-collapse" id="mainNavbar">
        
        {/* MENU */}
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          
          <li className="nav-item" data-aos="fade-down" data-aos-delay={100}>
            
            <Link className="nav-link active" aria-current="page" to="/">
              
              Home
            </Link>
          </li>
          <li className="nav-item" data-aos="fade-down" data-aos-delay={200}>
            
            <Link className="nav-link" to="/about-us">
              About
            </Link>
          </li>
          {/* DROPDOWN */}
          <li
            className="nav-item dropdown"
            data-aos="fade-down"
            data-aos-delay={300}
          >
            
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              
              Services
            </a>
            <ul className="dropdown-menu">
              
              <li>
                
                <a className="dropdown-item" href="#">
                  
                  Web Development
                </a>
              </li>
              <li>
                
                <a className="dropdown-item" href="#">
                  
                  App Development
                </a>
              </li>
              <li>
                
                <a className="dropdown-item" href="#">
                  
                  Data Analytics
                </a>
              </li>
              <li>
                
                <hr className="dropdown-divider" />
              </li>
              <li>
                
                <a className="dropdown-item" href="#">
                  
                  Digital Marketing
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item" data-aos="fade-down" data-aos-delay={400}>
            
            <a className="nav-link" href="#portfolio">
              
              Portfolio
            </a>
          </li>
          <li className="nav-item" data-aos="fade-down" data-aos-delay={500}>
            
            <a className="nav-link" href="#contact">
              
              Contact
            </a>
          </li>
        </ul>
        {/* RIGHT BUTTONS */}
        <div
          className="d-flex gap-2"
          data-aos="fade-left"
          data-aos-duration={1000}
        >
          
          <Link to="/login" className="btn btn-outline-primary login-btn">
            
            <i className="bi bi-box-arrow-in-right" /> Login
          </Link>
          <a href="#" className="btn btn-primary signup-btn">
            
            <i className="bi bi-person-plus" /> Sign Up
          </a>
        </div>
      </div>
    </div>
  </nav>
  {/* ===================================================== HERO SECTION ====================================================== */}

  {/* ===================================================== AOS JS ====================================================== */}
  {/* Bootstrap 5.3.8 JS */} {/* Initialize AOS */}
</>

  )
}
