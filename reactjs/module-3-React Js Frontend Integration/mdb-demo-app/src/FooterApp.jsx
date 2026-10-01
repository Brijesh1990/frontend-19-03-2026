import React from 'react'
import {MDBFooter,MDBContainer,MDBRow,MDBCol,MDBIcon}   from 'mdb-react-ui-kit';
export default function FooterApp() {
  return (
    <div>
      
      {/* ======================================================
          FOOTER
      ====================================================== */}

      <MDBFooter className="health-footer">

        <MDBContainer>

          <MDBRow>

            <MDBCol
              lg="4"
              md="6"
              className="mb-4"
            >

              <h3>
                HexaHealth
              </h3>

              <p>
                Making healthcare easier, more accessible
                and more transparent through technology.
              </p>

              <div className="d-flex gap-3 mt-4">

                <MDBIcon
                  fab
                  icon="facebook"
                  size="lg"
                />

                <MDBIcon
                  fab
                  icon="instagram"
                  size="lg"
                />

                <MDBIcon
                  fab
                  icon="twitter"
                  size="lg"
                />

                <MDBIcon
                  fab
                  icon="linkedin"
                  size="lg"
                />

              </div>

            </MDBCol>


            <MDBCol
              lg="2"
              md="6"
              className="mb-4"
            >

              <h5>
                Company
              </h5>

              <a href="#!">About Us</a>
              <a href="#!">Careers</a>
              <a href="#!">Contact</a>
              <a href="#!">Press</a>

            </MDBCol>


            <MDBCol
              lg="2"
              md="6"
              className="mb-4"
            >

              <h5>
                Services
              </h5>

              <a href="#!">Find Doctors</a>
              <a href="#!">Hospitals</a>
              <a href="#!">Treatments</a>
              <a href="#!">Second Opinion</a>

            </MDBCol>


            <MDBCol
              lg="2"
              md="6"
              className="mb-4"
            >

              <h5>
                Resources
              </h5>

              <a href="#!">Health Blogs</a>
              <a href="#!">HealthGPT</a>
              <a href="#!">FAQs</a>
              <a href="#!">Health Guides</a>

            </MDBCol>


            <MDBCol
              lg="2"
              md="6"
              className="mb-4"
            >

              <h5>
                Legal
              </h5>

              <a href="#!">Privacy Policy</a>
              <a href="#!">Terms</a>
              <a href="#!">Disclaimer</a>
              <a href="#!">Cookie Policy</a>

            </MDBCol>

          </MDBRow>

          <div className="footer-bottom text-center">

            © {new Date().getFullYear()} HexaHealth.
            All Rights Reserved.

          </div>

        </MDBContainer>

      </MDBFooter>
    </div>
  )
}
