import React, { useState } from "react";

import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
  MDBBadge,
  MDBInput,
  MDBTextArea,
  MDBAccordion,
  MDBAccordionItem,

} from "mdb-react-ui-kit";


// ============================================================
// DATA
// ============================================================

const services = [
  {
    icon: "user-md",
    title: "Find a Doctor",
    text: "Connect with experienced doctors and specialists.",
  },
  {
    icon: "hospital",
    title: "Find a Hospital",
    text: "Discover trusted hospitals near you.",
  },
  {
    icon: "procedures",
    title: "Medical Procedures",
    text: "Explore treatments and medical procedures.",
  },
  {
    icon: "stethoscope",
    title: "Health Checkups",
    text: "Book preventive health checkups.",
  },
  {
    icon: "heartbeat",
    title: "Second Opinion",
    text: "Get expert medical opinions.",
  },
  {
    icon: "comments",
    title: "HealthGPT",
    text: "Get answers to your healthcare questions.",
  },
];


const treatments = [
  {
    title: "Knee Replacement",
    description:
      "Get expert guidance for knee replacement surgery from diagnosis to recovery.",
  },
  {
    title: "Cataract Surgery",
    description:
      "Find experienced ophthalmologists and advanced cataract treatment options.",
  },
  {
    title: "Heart Surgery",
    description:
      "Connect with cardiac specialists and leading hospitals for heart care.",
  },
];


const doctors = [
  {
    name: "Dr. Anil Kumar",
    speciality: "Cardiologist",
    experience: "18 Years Experience",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Priya Sharma",
    speciality: "Gynecologist",
    experience: "15 Years Experience",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Raj Patel",
    speciality: "Orthopedic Surgeon",
    experience: "20 Years Experience",
    image:
      "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Dr. Neha Mehta",
    speciality: "Dermatologist",
    experience: "12 Years Experience",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
  },
];


const specialties = [
  "Cardiology",
  "Orthopedics",
  "Gynecology",
  "Neurology",
  "Dermatology",
  "Oncology",
  "Urology",
  "Gastroenterology",
];


const blogs = [
  {
    title: "Understanding Heart Health",
    category: "Heart Care",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Tips for Healthy Living",
    category: "Health & Wellness",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "When Should You See a Doctor?",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Importance of Preventive Care",
    category: "Preventive Care",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=700&q=80",
  },
];


const testimonials = [
  {
    name: "Rahul Mehta",
    city: "Mumbai",
    text:
      "The platform helped me find the right doctor and hospital. The entire process was simple and transparent.",
  },
  {
    name: "Pooja Shah",
    city: "Ahmedabad",
    text:
      "I received excellent guidance for my treatment. The doctor information and hospital comparison were very useful.",
  },
  {
    name: "Amit Verma",
    city: "Delhi",
    text:
      "Very easy to use. I was able to connect with specialists and understand my treatment options.",
  },
];


// ============================================================
// MAIN COMPONENT
// ============================================================

export default function ContentApp() {

  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="health-page">

      {/* ======================================================
          SERVICES
      ====================================================== */}

      <section className="section">

        <MDBContainer>

          <div className="text-center">

            <h2 className="section-title">
              Healthcare at Your Fingertips
            </h2>

            <p className="section-subtitle">
              Everything you need to find, understand and
              manage your healthcare journey.
            </p>

          </div>

          <MDBRow className="g-4">

            {services.map((service, index) => (

              <MDBCol
                md="4"
                lg="2"
                key={index}
              >

                <MDBCard className="service-card">

                  <MDBCardBody>

                    <div className="service-icon">
                      <MDBIcon
                        fas
                        icon={service.icon}
                      />
                    </div>

                    <h5>
                      {service.title}
                    </h5>

                    <p>
                      {service.text}
                    </p>

                    <MDBBtn
                      color="link"
                      className="p-0 text-primary"
                    >
                      Explore
                      <MDBIcon
                        fas
                        icon="arrow-right"
                        className="ms-2"
                      />
                    </MDBBtn>

                  </MDBCardBody>

                </MDBCard>

              </MDBCol>

            ))}

          </MDBRow>

        </MDBContainer>

      </section>


      {/* ======================================================
          TREATMENT SECTION
      ====================================================== */}

      <section
        className="section section-light"
        id="treatments"
      >

        <MDBContainer>

          <div className="text-center">

            <h2 className="section-title">
              Find the Right Treatment
            </h2>

            <p className="section-subtitle">
              Understand your treatment options and connect
              with the right medical experts.
            </p>

          </div>

          <MDBRow className="align-items-center">

            <MDBCol lg="5">

              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=80"
                className="img-fluid rounded-5 shadow"
                alt="Healthcare"
              />

            </MDBCol>

            <MDBCol lg="7">

              {treatments.map((item, index) => (

                <div
                  className="d-flex gap-3 mb-4"
                  key={index}
                >

                  <div className="step-number">
                    {index + 1}
                  </div>

                  <div>

                    <h5 className="fw-bold text-primary">
                      {item.title}
                    </h5>

                    <p className="text-muted">
                      {item.description}
                    </p>

                    <MDBBtn
                      className="btn-health"
                      size="sm"
                    >
                      Know More
                    </MDBBtn>

                  </div>

                </div>

              ))}

            </MDBCol>

          </MDBRow>

        </MDBContainer>

      </section>


      {/* ======================================================
          HEALTH GPT
      ====================================================== */}

      <section
        className="section"
        id="healthgpt"
      >

        <MDBContainer>

          <div className="gpt-box">

            <MDBRow className="align-items-center">

              <MDBCol lg="7">

                <MDBBadge
                  color="info"
                  className="mb-3"
                >
                  AI HEALTH ASSISTANT
                </MDBBadge>

                <h2 className="gpt-title">
                  Meet HealthGPT
                </h2>

                <p className="text-muted">
                  Your intelligent healthcare companion.
                  Ask questions about symptoms, conditions,
                  treatments and healthcare options.
                </p>

                <div className="gpt-tags">

                  <span>
                    What is my condition?
                  </span>

                  <span>
                    Explain my report
                  </span>

                  <span>
                    Treatment options
                  </span>

                  <span>
                    Find a specialist
                  </span>

                </div>

                <MDBBtn className="btn-health mt-3">
                  Ask HealthGPT
                  <MDBIcon
                    fas
                    icon="arrow-right"
                    className="ms-2"
                  />
                </MDBBtn>

              </MDBCol>

              <MDBCol
                lg="5"
                className="text-center"
              >

                <img
                  src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
                  className="gpt-avatar"
                  alt="HealthGPT"
                />

              </MDBCol>

            </MDBRow>

          </div>

        </MDBContainer>

      </section>


      {/* ======================================================
          DOCTORS
      ====================================================== */}

      <section
        className="section section-light"
        id="doctors"
      >

        <MDBContainer>

          <div className="text-center">

            <h2 className="section-title">
              Meet Our Doctors
            </h2>

            <p className="section-subtitle">
              Connect with experienced specialists across
              multiple medical fields.
            </p>

          </div>

          <MDBRow className="g-4">

            {doctors.map((doctor, index) => (

              <MDBCol
                md="6"
                lg="3"
                key={index}
              >

                <MDBCard className="doctor-card text-center">

                  <MDBCardImage
                    src={doctor.image}
                    className="doctor-image"
                    position="top"
                    alt={doctor.name}
                  />

                  <MDBCardBody>

                    <h5 className="doctor-name">
                      {doctor.name}
                    </h5>

                    <p className="text-primary mb-1">
                      {doctor.speciality}
                    </p>

                    <small className="text-muted">
                      {doctor.experience}
                    </small>

                    <div className="mt-3">

                      <MDBBtn
                        className="btn-outline-health"
                        size="sm"
                      >
                        View Profile
                      </MDBBtn>

                    </div>

                  </MDBCardBody>

                </MDBCard>

              </MDBCol>

            ))}

          </MDBRow>

          <div className="text-center mt-5">

            <MDBBtn className="btn-health">
              View All Doctors
            </MDBBtn>

          </div>

        </MDBContainer>

      </section>


      {/* ======================================================
          SPECIALITIES
      ====================================================== */}

      <section className="section">

        <MDBContainer>

          <div className="text-center">

            <h2 className="section-title">
              Explore Medical Specialities
            </h2>

            <p className="section-subtitle">
              Find doctors and treatment options by
              speciality.
            </p>

          </div>

          <MDBRow>

            {specialties.map((speciality, index) => (

              <MDBCol
                md="6"
                lg="3"
                key={index}
              >

                <div className="speciality-pill">

                  <MDBIcon
                    fas
                    icon="stethoscope"
                    className="me-3"
                  />

                  {speciality}

                  <MDBIcon
                    fas
                    icon="arrow-right"
                    className="float-end"
                  />

                </div>

              </MDBCol>

            ))}

          </MDBRow>

        </MDBContainer>

      </section>


      {/* ======================================================
          TESTIMONIALS
      ====================================================== */}

      <section className="section section-light">

        <MDBContainer>

          <div className="text-center">

            <h2 className="section-title">
              What Our Patients Say
            </h2>

            <p className="section-subtitle">
              Real experiences from people who used our
              healthcare services.
            </p>

          </div>

          <MDBRow className="g-4">

            {testimonials.map((item, index) => (

              <MDBCol
                md="4"
                key={index}
              >

                <MDBCard className="testimonial-card">

                  <MDBCardBody>

                    <div className="stars mb-3">
                      ★★★★★
                    </div>

                    <p className="text-muted">
                      "{item.text}"
                    </p>

                    <div className="d-flex align-items-center gap-3 mt-4">

                      <img
                        src={`https://randomuser.me/api/portraits/${
                          index === 1 ? "women" : "men"
                        }/${30 + index}.jpg`}
                        className="testimonial-avatar"
                        alt={item.name}
                      />

                      <div>

                        <strong>
                          {item.name}
                        </strong>

                        <small className="d-block text-muted">
                          {item.city}
                        </small>

                      </div>

                    </div>

                  </MDBCardBody>

                </MDBCard>

              </MDBCol>

            ))}

          </MDBRow>

        </MDBContainer>

      </section>


      {/* ======================================================
          BLOG
      ====================================================== */}

      <section
        className="section"
        id="blogs"
      >

        <MDBContainer>

          <div className="d-flex justify-content-between align-items-center mb-4">

            <div>

              <h2 className="section-title mb-2">
                Health & Wellness
              </h2>

              <p className="text-muted">
                Latest healthcare information and advice.
              </p>

            </div>

            <MDBBtn className="btn-outline-health">
              View All Blogs
            </MDBBtn>

          </div>

          <MDBRow className="g-4">

            {blogs.map((blog, index) => (

              <MDBCol
                md="6"
                lg="3"
                key={index}
              >

                <MDBCard className="blog-card">

                  <MDBCardImage
                    src={blog.image}
                    className="blog-image"
                    position="top"
                    alt={blog.title}
                  />

                  <MDBCardBody>

                    <MDBBadge
                      color="info"
                      className="mb-2"
                    >
                      {blog.category}
                    </MDBBadge>

                    <h5 className="blog-title">
                      {blog.title}
                    </h5>

                    <p className="text-muted small">
                      Read useful healthcare information
                      from our experts.
                    </p>

                    <MDBBtn
                      color="link"
                      className="p-0 text-primary"
                    >
                      Read More
                      <MDBIcon
                        fas
                        icon="arrow-right"
                        className="ms-2"
                      />
                    </MDBBtn>

                  </MDBCardBody>

                </MDBCard>

              </MDBCol>

            ))}

          </MDBRow>

        </MDBContainer>

      </section>


      {/* ======================================================
          CONTACT
      ====================================================== */}

      <section className="section section-blue">

        <MDBContainer>

          <div className="contact-box">

            <MDBRow className="align-items-center">

              <MDBCol lg="5">

                <h2 className="section-title">
                  Need Help With Your Healthcare?
                </h2>

                <p className="text-muted">
                  Share your requirements and our healthcare
                  team will help you find the right doctor,
                  hospital or treatment.
                </p>

                <div className="mt-4">

                  <p>
                    <MDBIcon
                      fas
                      icon="phone"
                      className="text-primary me-3"
                    />
                    +91 99999 99999
                  </p>

                  <p>
                    <MDBIcon
                      fas
                      icon="envelope"
                      className="text-primary me-3"
                    />
                    support@healthcare.com
                  </p>

                </div>

              </MDBCol>

              <MDBCol lg="7">

                <MDBRow className="g-3">

                  <MDBCol md="6">

                    <MDBInput
                      label="Your Name"
                      className="contact-input"
                    />

                  </MDBCol>

                  <MDBCol md="6">

                    <MDBInput
                      label="Phone Number"
                      className="contact-input"
                    />

                  </MDBCol>

                  <MDBCol md="12">

                    <MDBInput
                      label="Email Address"
                      className="contact-input"
                    />

                  </MDBCol>

                  <MDBCol md="12">

                    <MDBTextArea
                      label="How can we help?"
                      rows={4}
                    />

                  </MDBCol>

                  <MDBCol>

                    <MDBBtn className="btn-health">
                      Submit Request
                      <MDBIcon
                        fas
                        icon="arrow-right"
                        className="ms-2"
                      />
                    </MDBBtn>

                  </MDBCol>

                </MDBRow>

              </MDBCol>

            </MDBRow>

          </div>

        </MDBContainer>

      </section>


      {/* ======================================================
          INDIA / CITIES
      ====================================================== */}

      <section className="section">

        <MDBContainer>

          <div className="text-center">

            <h2 className="section-title">
              Healthcare Across India
            </h2>

            <p className="section-subtitle">
              Find hospitals, doctors and healthcare services
              across major Indian cities.
            </p>

          </div>

          <MDBRow className="align-items-center">

            <MDBCol
              lg="6"
              className="text-center"
            >

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/India_map_English_labels.svg/800px-India_map_English_labels.svg.png"
                className="india-map"
                alt="India Map"
              />

            </MDBCol>

            <MDBCol lg="6">

              <div className="city-list">

                {[
                  "Ahmedabad",
                  "Mumbai",
                  "Delhi",
                  "Bangalore",
                  "Pune",
                  "Hyderabad",
                  "Chennai",
                  "Kolkata",
                  "Jaipur",
                  "Rajkot",
                ].map((city, index) => (

                  <div
                    className="city-item"
                    key={index}
                  >

                    <MDBIcon
                      fas
                      icon="map-marker-alt"
                      className="city-icon"
                    />

                    <span>
                      Healthcare in {city}
                    </span>

                    <MDBIcon
                      fas
                      icon="arrow-right"
                      className="ms-auto text-muted"
                    />

                  </div>

                ))}

              </div>

            </MDBCol>

          </MDBRow>

        </MDBContainer>

      </section>


      {/* ======================================================
          FAQ
      ====================================================== */}

      <section className="section section-light faq-section">

        <MDBContainer>

          <div className="text-center">

            <h2 className="section-title">
              Frequently Asked Questions
            </h2>

            <p className="section-subtitle">
              Get answers to common healthcare questions.
            </p>

          </div>

          <MDBRow className="justify-content-center">

            <MDBCol lg="9">

              <MDBAccordion>

                <MDBAccordionItem
                  collapseId={1}
                  headerTitle="How can I find the right doctor?"
                >
                  You can search for doctors by speciality,
                  location, experience and treatment.
                </MDBAccordionItem>

                <MDBAccordionItem
                  collapseId={2}
                  headerTitle="Can I get a second medical opinion?"
                >
                  Yes. You can share your medical details and
                  connect with qualified specialists for a
                  second opinion.
                </MDBAccordionItem>

                <MDBAccordionItem
                  collapseId={3}
                  headerTitle="How can I find a hospital?"
                >
                  Search hospitals by city, speciality,
                  treatment and healthcare services.
                </MDBAccordionItem>

                <MDBAccordionItem
                  collapseId={4}
                  headerTitle="What is HealthGPT?"
                >
                  HealthGPT is an AI-powered healthcare
                  assistant designed to provide general
                  healthcare information.
                </MDBAccordionItem>

                <MDBAccordionItem
                  collapseId={5}
                  headerTitle="Can I book a consultation?"
                >
                  Yes. You can select a doctor and continue
                  with the consultation or appointment process.
                </MDBAccordionItem>

              </MDBAccordion>

            </MDBCol>

          </MDBRow>

        </MDBContainer>

      </section>


      {/* ======================================================
          MOBILE APP
      ====================================================== */}

      <section className="section">

        <MDBContainer>

          <div className="app-box">

            <MDBRow className="align-items-center">

              <MDBCol lg="7">

                <h2 className="section-title">
                  Healthcare in Your Pocket
                </h2>

                <p className="text-muted">
                  Download our mobile application to find
                  doctors, hospitals, treatments and healthcare
                  information anytime, anywhere.
                </p>

                <div className="d-flex gap-3 flex-wrap">

                  <MDBBtn className="btn-health">

                    <MDBIcon
                      fab
                      icon="google-play"
                      className="me-2"
                    />

                    Google Play

                  </MDBBtn>

                  <MDBBtn className="btn-outline-health">

                    <MDBIcon
                      fab
                      icon="apple"
                      className="me-2"
                    />

                    App Store

                  </MDBBtn>

                </div>

              </MDBCol>

              <MDBCol
                lg="5"
                className="text-center"
              >

                <img
                  src="https://cdn-icons-png.flaticon.com/512/455/455705.png"
                  className="app-image"
                  alt="Mobile App"
                />

              </MDBCol>

            </MDBRow>

          </div>

        </MDBContainer>

      </section>
    </div>
        
  );
}