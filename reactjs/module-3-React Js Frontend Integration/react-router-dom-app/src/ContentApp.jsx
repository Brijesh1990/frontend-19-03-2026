import React from 'react'

export default function ContentApp() {
  return (

    <>
      <section id="home" className="hero">
    
    <div className="container">
      
      <h1
        className="display-4 fw-bold"
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        
        Welcome to My Website
      </h1>
      <p
        className="lead text-muted mt-3"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        
        Responsive Bootstrap 5.3.8 Navbar with AOS animations.
      </p>
      <button
        className="btn btn-primary btn-lg mt-3"
        data-aos="zoom-in"
        data-aos-delay={400}
      >
        
        Get Started
      </button>
    </div>
  </section>
  </>
  )
}
