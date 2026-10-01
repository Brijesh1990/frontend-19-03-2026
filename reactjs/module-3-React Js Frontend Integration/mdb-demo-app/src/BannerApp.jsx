import React, { useState } from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

import {
  FaArrowCircleLeft,
  FaArrowAltCircleRight,
} from "react-icons/fa";

// ============================================================
// SLIDER DATA
// ============================================================

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=80",
    title: "The Next Generation Hospital",
    description:
      "Advanced healthcare with expert doctors, modern technology and personalized care.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1800&q=80",
    title: "Expert Doctors & Specialists",
    description:
      "Connect with experienced doctors and specialists for your healthcare needs.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=80",
    title: "Healthcare Made Simple",
    description:
      "Find doctors, hospitals and healthcare services from one convenient platform.",
  },
];

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function BannerApp() {
  const [activeSlide, setActiveSlide] = useState(1);

  // NEXT SLIDE
  const nextSlide = () => {
    setActiveSlide((current) =>
      current === slides.length ? 1 : current + 1
    );
  };

  // PREVIOUS SLIDE
  const prevSlide = () => {
    setActiveSlide((current) =>
      current === 1 ? slides.length : current - 1
    );
  };

  return (
    <>
     

      <section className="hero-section">

        <div className="hero-carousel-wrapper">

          <MDBCarousel
            activeItemId={activeSlide}
            onChange={(itemId) => setActiveSlide(itemId)}
            showIndicators
            fade
            className="hero-carousel"
          >

            {slides.map((slide) => (

              <MDBCarouselItem
                key={slide.id}
                itemId={slide.id}
                className="hero-slide"
              >

                {/* BACKGROUND */}
                <img
                  src={slide.image}
                  className="hero-background"
                  alt={slide.title}
                />

                {/* OVERLAY */}
                <div className="hero-overlay"></div>

                {/* CONTENT */}
                <MDBCarouselCaption className="hero-content">

                  {/* REVIEW */}
                  <div className="review-badge">

                    <span className="review-star">
                      ★
                    </span>

                    <span>
                      4.8/5
                    </span>

                    <span className="review-text">
                      (4228 Reviews On Google)
                    </span>

                  </div>

                  {/* TITLE */}
                  <h1 className="hero-title">
                    {slide.title}
                  </h1>

                  {/* DESCRIPTION */}
                  <p className="hero-description">
                    {slide.description}
                  </p>

                  {/* SEARCH */}
                  <div className="hero-search-row">

                    {/* LOCATION */}
                    <div className="location-box">

                      <span>
                        Delhi
                      </span>

                      <MDBIcon
                        fas
                        icon="chevron-down"
                      />

                    </div>

                    {/* SEARCH BOX */}
                    <div className="doctor-search">

                      <span>
                        Search for Doctor, Hospital, Specialities...
                      </span>

                      <MDBIcon
                        fas
                        icon="location-arrow"
                        className="search-arrow"
                      />

                    </div>

                  </div>

                  {/* ACTIONS */}
                  <div className="hero-actions">

                    {/* SECOND OPINION */}
                    <MDBBtn className="hero-action-btn">

                      <span>
                        Get Second
                        <br />
                        Opinion
                      </span>

                      <span className="action-arrow">
                        <FaArrowAltCircleRight />
                      </span>

                    </MDBBtn>

                    {/* HEALTH GPT */}
                    <MDBBtn className="hero-action-btn">

                      <span>
                        Ask
                        <br />
                        HealthGPT
                      </span>

                      <span className="action-arrow">
                        <FaArrowAltCircleRight />
                      </span>

                    </MDBBtn>

                    {/* GET APP */}
                    <MDBBtn className="hero-action-btn">

                      <span>
                        Get The
                        <br />
                        App
                      </span>

                      <span className="action-arrow">
                        <FaArrowAltCircleRight />
                      </span>

                    </MDBBtn>

                  </div>

                </MDBCarouselCaption>

              </MDBCarouselItem>

            ))}

          </MDBCarousel>

          {/* =================================================
              PREVIOUS
          ================================================= */}

          <button
            type="button"
            className="hero-carousel-btn hero-prev"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <FaArrowCircleLeft />
          </button>

          {/* =================================================
              NEXT
          ================================================= */}

          <button
            type="button"
            className="hero-carousel-btn hero-next"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <FaArrowAltCircleRight />
          </button>

        </div>

      </section>
    </>
  );
}