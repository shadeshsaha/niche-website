import React from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
// import logBg from '../assets/images/bgReg.jpg';
import bg from '../assets/images/sectionBg.png';
import useContexts from "../hooks/useContexts.js";
import "./../assets/css/login.css";
const Login = () => {
  const { userLogin, loading, email, signInUsingGoogle } = useContexts();
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const location = useLocation();
  const redirect = location?.state?.from || "/home";
  const onSubmit = (data) => {
    userLogin({ ...data, history, redirect });
  };
  const gLogin = (data) => {
    signInUsingGoogle({ ...data, history, redirect });
  };
  if (email) {
    return <>{history.replace("/")}</>;
  } else {
    return (
      <div
        style={{
          background: `url(${bg})`,
          backgroundRepeat: "repeat",
          backgroundPosition: "center center",
          height: "100vh"
        }}
      >
        <div className="container">
          <Row>
            <Col xs={12} md={6} className="log-left">
              <h1 className="text-white text-center">Login</h1>
              <hr className="text-white" />
              <h2 className="text-white mt-5 pt-5 text-center"
                style={{ fontFamily: "sans-serif" }}
              >
                Good To See You Again.
              </h2>
              <br />
              <p className="text-white" style={{ fontFamily: "sans-serif" }}>By Logging Into Bikers' Paradise <br /> You Accept Our <Link style={{ color: "white" }}>Terms Of Use</Link> And <Link style={{ color: "white" }}>Privacy Policy</Link> </p>
              <div className="container-fluid">
                {/* <img className="log-photo" style={{ height: "10em", marginLeft: "10em", marginTop: "2em" }} src={logBg} alt="" /> */}
              </div>
            </Col>
            <Col xs={12} md={6} className="log-right text-center">
              <Button onClick={gLogin} className="mt-3"><i class="fab fa-google" type="submit"></i> | Continue With Google</Button>
              <hr />
              <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="form-control mb-3 mt-5"
                  type="email"
                  required
                  {...register("email", { required: true })}
                  placeholder="Enter your email"
                />
                <input
                  required
                  type="password"
                  className="form-control mb-3"
                  {...register("password", { required: true })}
                  placeholder="Enter your password"
                />
                <button className="btn register-btn" type="submit">
                  {loading ? (
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  ) : (
                    "Login"
                  )}
                </button>
              </form>
              <Link to="/Register" style={{ textDecoration: "none", fontFamily: "cursive" }}>Register Here</Link>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
};

export default Login;
