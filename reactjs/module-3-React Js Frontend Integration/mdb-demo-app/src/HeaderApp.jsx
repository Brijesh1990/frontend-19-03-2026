import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";



export default function HeaderApp() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className="hexa-header">

      <MDBNavbar
        expand="lg"
        className="hexa-navbar"
      >

        <MDBContainer fluid className="hexa-container">

          {/* =====================================================
              LOGO
          ====================================================== */}
         <Link to="/">
          <MDBNavbarBrand
            href="#"
            className="hexa-logo"
          >

            <div className="logo-plus">
              <MDBIcon fas icon="plus" />
            </div>

            <div className="logo-content">

              <div className="logo-title">
                <span className="logo-hexa">
                  Hexa
                </span>

                <span className="logo-health">
                  Health
                </span>
              </div>

              <div className="logo-subtitle">
                The Next Generation Hospital
              </div>

            </div>

          </MDBNavbarBrand>
          </Link>

          {/* =====================================================
              MOBILE TOGGLE
          ====================================================== */}

          <MDBNavbarToggler
            type="button"
            aria-expanded={openNav}
            aria-label="Toggle navigation"
            onClick={() => setOpenNav(!openNav)}
            className="mobile-toggler"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>


          {/* =====================================================
              NAVIGATION
          ====================================================== */}

          <MDBCollapse
            navbar
            open={openNav}
            className="hexa-collapse"
          >

            <MDBNavbarNav className="hexa-nav">


              {/* =================================================
                  DEPARTMENTS
              ================================================= */}

              <MDBNavbarItem>

                <MDBDropdown>

                  <MDBDropdownToggle
                    tag="a"
                    href="#"
                    className="hexa-nav-link"
                  >
                    Departments

                  

                  </MDBDropdownToggle>


                  <MDBDropdownMenu className="hexa-dropdown">

                    <MDBDropdownItem href="#">
                      Cardiology
                    </MDBDropdownItem>

                    <MDBDropdownItem href="#">
                      Neurology
                    </MDBDropdownItem>

                    <MDBDropdownItem href="#">
                      Orthopedics
                    </MDBDropdownItem>

                    <MDBDropdownItem href="#">
                      Gynecology
                    </MDBDropdownItem>

                    <MDBDropdownItem href="#">
                      Pediatrics
                    </MDBDropdownItem>

                    <MDBDropdownItem href="#">
                      Gastroenterology
                    </MDBDropdownItem>

                    <MDBDropdownItem href="#">
                      Dermatology
                    </MDBDropdownItem>

                    <MDBDropdownItem href="#">
                      General Medicine
                    </MDBDropdownItem>

                  </MDBDropdownMenu>

                </MDBDropdown>

              </MDBNavbarItem>


              {/* =================================================
                  CONDITIONS
              ================================================= */}

              <MDBNavbarItem>

                <MDBDropdown>

                  <MDBDropdownToggle
                    tag="a"
                    href="#"
                    className="hexa-nav-link"
                  >

                    Conditions

                
                  </MDBDropdownToggle>


                  <MDBDropdownMenu className="hexa-dropdown">

                    <MDBDropdownItem href="#">
                      Heart Disease
                    </MDBDropdownItem>

                    <MDBDropdownItem href="#">
                      Diabetes
                    </MDBDropdownItem>

                    <MDBDropdownItem href="#">
                      Hypertension
                    </MDBDropdownItem>

                    <MDBDropdownItem href="#">
                      Arthritis
                    </MDBDropdownItem>

                    <MDBDropdownItem href="#">
                      Kidney Disease
                    </MDBDropdownItem>

                    <MDBDropdownItem href="#">
                      Liver Disease
                    </MDBDropdownItem>

                    <MDBDropdownItem href="#">
                      Thyroid Problems
                    </MDBDropdownItem>

                    <MDBDropdownItem href="#">
                      Cancer
                    </MDBDropdownItem>

                  </MDBDropdownMenu>

                </MDBDropdown>

              </MDBNavbarItem>


              {/* =================================================
                  TREATMENTS
              ================================================= */}

              <MDBNavbarItem>

                <MDBDropdown>

                  <MDBDropdownToggle
                    tag="a"
                    href="#"
                    className="hexa-nav-link"
                  >

                    Treatments


                  </MDBDropdownToggle>


                  <MDBDropdownMenu className="hexa-dropdown">

                    <MDBDropdownItem href="#">
                      Heart Surgery
                    </MDBDropdownItem>

                    <MDBDropdownItem href="#">
                      Knee Replacement
                    </MDBDropdownItem>

                    <MDBDropdownItem href="#">
                      Hip Replacement
                    </MDBDropdownItem>

                    <MDBDropdownItem href="#">
                      Cataract Surgery
                    </MDBDropdownItem>

                    <MDBDropdownItem href="#">
                      Cancer Treatment
                    </MDBDropdownItem>

                    <MDBDropdownItem href="#">
                      Kidney Treatment
                    </MDBDropdownItem>

                    <MDBDropdownItem href="#">
                      Physiotherapy
                    </MDBDropdownItem>

                    <MDBDropdownItem href="#">
                      General Surgery
                    </MDBDropdownItem>

                  </MDBDropdownMenu>

                </MDBDropdown>

              </MDBNavbarItem>


              {/* =================================================
                  FOR INVESTORS
              ================================================= */}

              <MDBNavbarItem>

                <a
                  href="#"
                  className="hexa-nav-link investor-link"
                >
                  For Investors
                </a>

              </MDBNavbarItem>


              {/* =================================================
                  RIGHT ACTIONS
              ================================================= */}

              <div className="hexa-actions">


                {/* SEARCH */}

                <button
                  type="button"
                  className="search-button"
                  aria-label="Search"
                >

                  <MDBIcon
                    fas
                    icon="search"
                  />

                </button>


                {/* BOOK APPOINTMENT */}

                <MDBBtn
                  className="appointment-button"
                >

                  <MDBIcon
                    far
                    icon="calendar"
                  />

                  <span>
                    Book Appointment
                  </span>

                </MDBBtn>


                {/* LOGIN */}
               <Link to="/login">
                <MDBBtn
                  className="login-button"
                >

                  <MDBIcon
                    far
                    icon="user-circle"
                  />

                  <span>
                    Login
                  </span>

                </MDBBtn>
                </Link>

              </div>

            </MDBNavbarNav>

          </MDBCollapse>

        </MDBContainer>

      </MDBNavbar>

    </header>
  );
}