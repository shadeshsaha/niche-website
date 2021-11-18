import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import "./../assets/css/footer.css";
import contactNow from "./../assets/images/contact.png";
import downloadApp from "./../assets/images/downloadApp.png";

const Footer = () => {
  return (
    <>
      <div className="footer-top pb-4">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">Be Our Community Member</h4>
                <h5 className="text-muted">Sign up for Newsletter</h5>
                <form className="d-flex">
                  <input
                    placeholder="Enter your email"
                    className="form-control rounded-0"
                    type="text"
                  />
                  <button className="btn rounded-0 btn-primary">Subscribe</button>
                </form>
                <h5 className="text-muted mt-4">Follow Us On</h5>
                <div>
                  <ul className="social-icons">
                    <li>
                      <a href="/#">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i class="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i class="fab fa-twitter-square"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </Zoom>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">INFORMATION</h4>
                <ul className="information">
                  <li>
                    <a href="/home">Home</a>
                  </li>
                  <li>
                    <a href="/products">Bikes</a>
                  </li>
                  <li>
                    <a href="/products">All Bikes</a>
                  </li>
                  <li>
                    <a href="/home">Dashboard</a>
                  </li>
                </ul>
              </Zoom>
            </Col>

            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <div className="text-center mt-4 me-5">
                <h4 className="text-white">Download Our Apps</h4>
                <img src={downloadApp} alt="" style={{width: "15em"}}/>
              </div>
              </Zoom>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">Our Partners</h4>
                <div className="">
                  <img width="100%" src={contactNow} alt="" />
                </div>
                <ul className="information contact-info">
                  <h4 className="col-title">Contact Us</h4>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    Matuail, Dhaka, Bangladesh
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    Official: bikers.paradise@gmail.com
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    Helpline: +8801511223344
                  </li>
                </ul>
              </Zoom>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer">
        <p className="text-center">Copyright &copy; All Reserved By Bikers' Paradise</p>
      </div>
    </>
  );
};

export default Footer;
