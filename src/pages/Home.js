import React from "react";
import { Accordion, Col, Container, Row, Spinner } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import { Link } from "react-router-dom";
import Product from "../components/Product.js";
import Slider from "../components/Slider.js";
import Testimonials from "../components/Testimonials.js";
import useProducts from "../hooks/useProducts.js";
import "./../assets/css/home.css";
import collection1 from "./../assets/images/collection/1.jpg";
import collection2 from "./../assets/images/collection/2.jpg";
import collection3 from "./../assets/images/collection/3.jpg";
import collection4 from "./../assets/images/collection/4.jpg";
import faq from "./../assets/images/faq.png";
import poster from "./../assets/images/poster.jpg";
import sample from "./../assets/images/sample.mp4";

const Home = () => {
  const products = useProducts();
  return (
    <div>
      <Slider />
      <Container className="collections my-5 mx-auto">
        <Bounce bottom cascade>
          <h2 className="text-center feature">COLLECTION OF</h2>
        </Bounce>
        <p
          style={{ maxWidth: "650px" }}
          className="text-center mb-2 mx-auto mt-3"
        >
          <Bounce>
            A tremendous collection of bikes which will blow your mind to buy because your favourite premium level bike choice truly
            deserves to be in sterling comfort!
          </Bounce>
        </p>
        <Row className="mx-0">
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img">
              <img className="img-fluid ms-0 ps-0 h-100" src={collection1} alt="" />
            </div>
          </Col>
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img img-fluid">
              <img className="img-fluid ms-0 ps-0 h-100" src={collection2} alt="" />
            </div>
          </Col>
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img img-fluid">
              <img className="img-fluid ms-0 ps-0 h-100" src={collection3} alt="" />
            </div>
          </Col>
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img img-fluid">
              <img className="img-fluid ms-0 ps-0 h-100" src={collection4} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Bounce bottom cascade>
          <h2 className="text-center feature">FEATURED BIKES</h2>
          <p style={{ maxWidth: "650px" }} className="text-center mx-auto mt-3">
            {" "}
            A curated collection of premium sports bikes, touring bikes, cafe racer bikes, crusing bikes. Because your
            choice truly deserves to be in sheer rider!
          </p>
        </Bounce>
        {!products.length ? (
          <div className="text-center my-5 private-spinner py-5">
            <Spinner variant="danger" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <h6>Loading...</h6>
          </div>
        ) : (
          <Row>
            {products?.slice(0, 6)?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </Row>
        )}
        <div className="text-center">
          <Link to="/products">
            <button className="btn btn-primary mb-5 mt-3">
              Explore All Bikes
            </button>
          </Link>
        </div>
      </Container>
      {/* FAQ */}
      <div className="container mt-4">
        <h1 style={{ fontFamily: "cursive", textAlign: "center" }}>Frequently Asked Questions</h1>
        <Row>
          <Col xs={12} md={6}>
            <img className="w-100" src={faq} alt="" />
          </Col>
          <Col xs={12} md={6} className="pt-5 mt-5 mb-3">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Is it important to wear helmet all the thime while riding?</Accordion.Header>
                <Accordion.Body>
                  It Protects You From A Head Injury, Windblust, Cold And Flying Objects.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Do I Get Any Warenty?</Accordion.Header>
                <Accordion.Body>
                  Yes! We Provide Worldwide Official Product Warenty.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Can I Buy Bike Accessories?</Accordion.Header>
                <Accordion.Body>
                  Yes! You Can Buy All Kind Of Bike Accessories Form Us Via Online & Also From Our Outlet Near Your Area.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Can I Extend My Warenty?</Accordion.Header>
                <Accordion.Body>
                  Depending On Products And Manufacturer You Can Extend Your Warenty By Subscribing To Our Membership Program.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </div>
      {/* Video */}
      <div className="container-fluid">
      <section id="banner">
        <video id="videobcg" autoPlay loop muted poster={poster}>
          <source src={sample} type='video/mp4' />
        </video>
      </section>
    </div>
      <Testimonials />
    </div>
  );
};

export default Home;
