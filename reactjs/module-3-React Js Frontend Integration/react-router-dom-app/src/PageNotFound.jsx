import React from 'react'
import NavBarApp from './NavBarApp'
export default function PageNotFound() {
  return (
  <>
  <NavBarApp/>
  <section className="min-vh-100 d-flex align-items-center">
  
  <div className="container">
    
    <div className="row justify-content-center">
      
      <div className="col-12 col-md-8 col-lg-6">
        
        <div className="text-center">
          
          {/* ICON */}
          <div className="mb-4">
            
            <i
              className="bi bi-exclamation-triangle-fill text-warning"
              style={{ fontSize: 80 }}
            />
          </div>
          {/* 404 */} <h1 className="display-1 fw-bold text-primary"> 404 </h1>
          {/* TITLE */} <h2 className="fw-bold mb-3"> Page Not Found </h2>
          {/* DESCRIPTION */}
          <p className="text-secondary mb-4">
            
            Sorry, the page you are looking for doesn't exist or may have been
            moved.
          </p>
          {/* BUTTONS */}
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-2">
            
            <a href="/" className="btn btn-primary px-4">
              
              <i className="bi bi-house-door me-2" /> Go Home
            </a>
            <button
              type="button"
              className="btn btn-outline-secondary px-4"
              onclick="history.back()"
            >
              
              <i className="bi bi-arrow-left me-2" /> Go Back
            </button>
          </div>
          {/* FOOTER */}
          <p className="text-secondary small mt-5 mb-0">
            
            © 2026 MyWebsite. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

</>
  )
}
