import React from 'react'
import NavBarApp from './NavBarApp'
import FoooterApp from './FoooterApp'
export default function LoginApp() {
  return (
    <>
   <NavBarApp /> 
  {/* ===================================================== SIGN IN SECTION ====================================================== */}
  <section className="min-vh-100 d-flex align-items-center mt-5">
    
    <div className="container">
      
      <div className="row justify-content-center">
        
        <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
          
          {/* CARD */}
          <div className="card border-0 shadow-lg rounded-4">
            
            <div className="card-body p-4 p-md-5">
              
              {/* LOGO */}
              <div className="text-center mb-4">
                
                <div className="mb-3">
                  
                  <i
                    className="bi bi-person-circle text-primary"
                    style={{ fontSize: 60 }}
                  />
                </div>
                <h2 className="fw-bold mb-1"> Welcome Back </h2>
                <p className="text-secondary mb-0"> Sign in to your account </p>
              </div>
              {/* SIGN IN FORM */}
              <form>
                
                {/* EMAIL */}
                <div className="mb-3">
                  
                  <label htmlFor="email" className="form-label fw-semibold">
                    
                    Email Address
                  </label>
                  <div className="input-group">
                    
                    <span className="input-group-text">
                      
                      <i className="bi bi-envelope" />
                    </span>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required=""
                    />
                  </div>
                </div>
                {/* PASSWORD */}
                <div className="mb-3">
                  
                  <label htmlFor="password" className="form-label fw-semibold">
                    
                    Password
                  </label>
                  <div className="input-group">
                    
                    <span className="input-group-text">
                      
                      <i className="bi bi-lock" />
                    </span>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Enter your password"
                      required=""
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onclick="togglePassword()"
                    >
                      
                      <i className="bi bi-eye" id="passwordIcon" />
                    </button>
                  </div>
                </div>
                {/* REMEMBER + FORGOT */}
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-2 mb-4">
                  
                  <div className="form-check">
                    
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remember"
                    />
                    <label className="form-check-label" htmlFor="remember">
                      
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-decoration-none">
                    
                    Forgot Password?
                  </a>
                </div>
                {/* SIGN IN BUTTON */}
                <div className="d-grid">
                  
                  <button type="submit" className="btn btn-primary btn-lg">
                    
                    <i className="bi bi-box-arrow-in-right me-2" /> Sign In
                  </button>
                </div>
                {/* DIVIDER */}
                <div className="d-flex align-items-center my-4">
                  
                  <hr className="flex-grow-1" />
                  <span className="px-3 text-secondary small"> OR </span>
                  <hr className="flex-grow-1" />
                </div>
                {/* SOCIAL LOGIN */}
                <div className="row g-2">
                  
                  <div className="col-12 col-sm-6">
                    
                    <button
                      type="button"
                      className="btn btn-outline-danger w-100"
                    >
                      
                      <i className="bi bi-google me-2" /> Google
                    </button>
                  </div>
                  <div className="col-12 col-sm-6">
                    
                    <button
                      type="button"
                      className="btn btn-outline-dark w-100"
                    >
                      
                      <i className="bi bi-github me-2" /> GitHub
                    </button>
                  </div>
                </div>
                {/* SIGN UP */}
                <div className="text-center mt-4">
                  
                  <span className="text-secondary">
                    
                    Don't have an account?
                  </span>
                  <a href="#" className="text-decoration-none fw-semibold">
                    
                    Create Account
                  </a>
                </div>
              </form>
            </div>
          </div>
          {/* COPYRIGHT */}
          <div className="text-center mt-4">
            
            <small className="text-secondary">
              
              © 2026 MyWebsite. All Rights Reserved.
            </small>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ===================================================== PASSWORD TOGGLE ====================================================== */}

<FoooterApp />

</>

  )
}
