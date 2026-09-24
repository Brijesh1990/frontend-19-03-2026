import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import env from './images/env.png'
export default function PupupModal() {
return (
<>

<Container className='text-white p-5'>
<Button type='button' className='btn btn-lg btn-primary' data-bs-toggle="modal" data-bs-target="#env">Enrollment Now <span className='bi bi-arrow-90deg-left'></span></Button>
</Container>
{/* load popup */}
<div
className="modal fade" id="env" tabIndex="-1">
<div className="modal-dialog modal-lg modal-dialog-centered">
<div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
<Row className="g-0"> {/* LEFT GRID - GIF / INFORMATION */} <div
className="col-md-6 bg-primary text-white p-4 d-flex flex-column justify-content-center">
<div className="text-center"> {/* GIF IMAGE */} <img
src={env} alt="Learning Animation"
className="img-fluid rounded-3 mb-4" style={{ maxHeight: "220px" , objectFit: "cover" }} />
<h2 className="fw-bold">Start Your Learning Journey</h2>
<p className="mt-3"> Enroll today and improve your skills with our professional training programs. </p>
<div className="mt-4 text-start">
<p>✅ Industry-focused training</p>
<p>✅ Practical projects</p>
<p>✅ Expert trainers</p>
<p>✅ Certificate after completion</p>
</div>
</div>
</div> {/* RIGHT GRID - ENROLMENT FORM */} <div className="col-md-6 bg-white p-4">
<div className="d-flex justify-content-between align-items-center mb-3">
<h3 className="fw-bold text-primary mb-0"> Enrolment Form </h3> <button type="button" className="btn-close"
data-bs-dismiss="modal"></button>
</div>
<form> {/* NAME */} <div className="mb-3"> <label className="form-label fw-semibold"> Full Name </label>
<input type="text" className="form-control" placeholder="Enter your full name" required /> </div> {/*
EMAIL */} <div className="mb-3"> <label className="form-label fw-semibold"> Email Address </label> <input
type="email" className="form-control" placeholder="Enter your email" required /> </div> {/* MOBILE */}
<div className="mb-3"> <label className="form-label fw-semibold"> Mobile Number </label> <input type="tel"
className="form-control" placeholder="Enter mobile number" required /> </div> {/* COURSE */} <div
className="mb-3"> <label className="form-label fw-semibold"> Select Course </label> <select
className="form-select" required>
<option value="">Select Course</option>
<option>Full Stack Development</option>
<option>React JS</option>
<option>Python</option>
<option>Data Science</option>
<option>Data Analytics</option>
<option>Digital Marketing</option>
</select> </div> {/* EDUCATION */} <div className="mb-3"> <label className="form-label fw-semibold">
Education </label> <select className="form-select">
<option value="">Select Education</option>
<option>10th</option>
<option>12th</option>
<option>Diploma</option>
<option>Graduate</option>
<option>Post Graduate</option>
</select> </div> {/* MESSAGE */} <div className="mb-3"> <label className="form-label fw-semibold"> Message
</label> <textarea className="form-control" rows="3" placeholder="Write your message..."></textarea>
</div> {/* TERMS */} <div className="form-check mb-3"> <input className="form-check-input" type="checkbox"
id="terms" required /> <label className="form-check-label" htmlFor="terms"> I agree to the terms and
conditions </label> </div> {/* SUBMIT */} <button type="submit"
className="btn btn-primary w-100 py-2 fw-bold"> 🚀 Enrol Now </button> </form>
</div>
</Row>
</div>
</div>
</div>

</>
)
}
