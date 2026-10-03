import React from 'react'

export default function FoooterApp() {
  return (
    <footer className="footer-section">
  {" "}
  {/* Newsletter Section */}{" "}
  <div className="footer-newsletter">
    {" "}
    <div className="container">
      {" "}
      <div className="row align-items-center">
        {" "}
        <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
          {" "}
          <span className="newsletter-small-title"> STAY UPDATED </span>{" "}
          <h2 className="newsletter-title"> Subscribe to our newsletter </h2>{" "}
          <p className="mb-0">
            {" "}
            Get the latest updates, technology news, offers and useful resources
            directly in your inbox.{" "}
          </p>{" "}
        </div>{" "}
        <div className="col-lg-6" data-aos="fade-left">
          {" "}
          <form className="newsletter-form">
            {" "}
            <div className="input-group">
              {" "}
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                required=""
              />{" "}
              <button type="submit" className="btn btn-primary">
                {" "}
                Subscribe <i className="bi bi-arrow-right ms-1" />{" "}
              </button>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>{" "}
  {/* Main Footer */}{" "}
  <div className="footer-main">
    {" "}
    <div className="container">
      {" "}
      <div className="row g-4">
        {" "}
        {/* Company Information */}{" "}
        <div className="col-lg-4 col-md-6" data-aos="fade-up">
          {" "}
          <a href="#" className="footer-logo">
            {" "}
            <i className="bi bi-code-slash" /> <span>My</span>Website{" "}
          </a>{" "}
          <p className="footer-description">
            {" "}
            We provide modern web development, application development, data
            analytics and digital solutions to help businesses grow in the
            digital world.{" "}
          </p>{" "}
          {/* Social Media */}{" "}
          <div className="social-links">
            {" "}
            <a href="#" aria-label="Facebook">
              {" "}
              <i className="bi bi-facebook" />{" "}
            </a>{" "}
            <a href="#" aria-label="Instagram">
              {" "}
              <i className="bi bi-instagram" />{" "}
            </a>{" "}
            <a href="#" aria-label="Twitter">
              {" "}
              <i className="bi bi-twitter-x" />{" "}
            </a>{" "}
            <a href="#" aria-label="LinkedIn">
              {" "}
              <i className="bi bi-linkedin" />{" "}
            </a>{" "}
            <a href="#" aria-label="YouTube">
              {" "}
              <i className="bi bi-youtube" />{" "}
            </a>{" "}
            <a href="#" aria-label="GitHub">
              {" "}
              <i className="bi bi-github" />{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
        {/* Quick Links */}{" "}
        <div
          className="col-lg-2 col-md-6"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          {" "}
          <h5 className="footer-heading"> Quick Links </h5>{" "}
          <ul className="footer-links">
            {" "}
            <li>
              {" "}
              <a href="#home">
                {" "}
                <i className="bi bi-chevron-right" /> Home{" "}
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="#about">
                {" "}
                <i className="bi bi-chevron-right" /> About Us{" "}
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="#services">
                {" "}
                <i className="bi bi-chevron-right" /> Services{" "}
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="#portfolio">
                {" "}
                <i className="bi bi-chevron-right" /> Portfolio{" "}
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="#contact">
                {" "}
                <i className="bi bi-chevron-right" /> Contact{" "}
              </a>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        {/* Services */}{" "}
        <div
          className="col-lg-3 col-md-6"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          {" "}
          <h5 className="footer-heading"> Our Services </h5>{" "}
          <ul className="footer-links">
            {" "}
            <li>
              {" "}
              <a href="#">
                {" "}
                <i className="bi bi-chevron-right" /> Web Development{" "}
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="#">
                {" "}
                <i className="bi bi-chevron-right" /> Mobile App Development{" "}
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="#">
                {" "}
                <i className="bi bi-chevron-right" /> UI / UX Design{" "}
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="#">
                {" "}
                <i className="bi bi-chevron-right" /> Data Analytics{" "}
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="#">
                {" "}
                <i className="bi bi-chevron-right" /> Digital Marketing{" "}
              </a>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        {/* Contact Information */}{" "}
        <div
          className="col-lg-3 col-md-6"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          {" "}
          <h5 className="footer-heading"> Contact Us </h5>{" "}
          <div className="contact-item">
            {" "}
            <div className="contact-icon">
              {" "}
              <i className="bi bi-geo-alt-fill" />{" "}
            </div>{" "}
            <div>
              {" "}
              <strong>Address</strong>{" "}
              <p>
                {" "}
                123 Business Street,
                <br /> Ahmedabad, Gujarat, India{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="contact-item">
            {" "}
            <div className="contact-icon">
              {" "}
              <i className="bi bi-telephone-fill" />{" "}
            </div>{" "}
            <div>
              {" "}
              <strong>Phone</strong> <p> +91 99999 99999 </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="contact-item">
            {" "}
            <div className="contact-icon">
              {" "}
              <i className="bi bi-envelope-fill" />{" "}
            </div>{" "}
            <div>
              {" "}
              <strong>Email</strong> <p> info@mywebsite.com </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>{" "}
  {/* Footer Bottom */}{" "}
  <div className="footer-bottom">
    {" "}
    <div className="container">
      {" "}
      <div className="row align-items-center">
        {" "}
        <div className="col-md-6 text-center text-md-start">
          {" "}
          <p className="mb-0">
            {" "}
            © 2026 <strong>MyWebsite</strong>. All Rights Reserved.{" "}
          </p>{" "}
        </div>{" "}
        <div className="col-md-6">
          {" "}
          <ul className="footer-bottom-links">
            {" "}
            <li>
              {" "}
              <a href="#"> Privacy Policy </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="#"> Terms &amp; Conditions </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="#"> Cookie Policy </a>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>{" "}
</footer>

  )
}
