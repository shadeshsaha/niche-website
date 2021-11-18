import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import useContexts from "../hooks/useContexts.js";
import "./../assets/css/register.css";
import regBg from "./../assets/images/bgReg.jpg";
const Register = () => {
  const { UserRegister, loading, email } = useContexts();
  const history = useHistory();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    UserRegister(data, history);
  };
  if (email) {
    return <>{history.replace("/login")}</>;
  } else {
    return (
      <div className="container">
        <Row>
          <Col xs={12} md={6}>
            <div>
              <img src={regBg} className="w-100" />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <h1 className="mt-5 pt-3 text-center">Register</h1>
            <p style={{ fontFamily: "cursive", color: "gray", textAlign: "center" }}>Let's begin The Journey.</p>
            <hr />
            <form className="registerForm mt-5" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control"
                required
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter your name"
              />
              <input
                className="form-control"
                required
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
              />
              <input
                className="form-control"
                type="password"
                required
                {...register("password", { required: true })}
                placeholder="Enter your password"
              />
              <button className="btn register-btn" style={{ marginLeft: "10em" }} type="submit">
                {loading ? (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  "Register"
                )}
              </button>
            </form>
            <Link to="/Login" style={{ textDecoration: "none", fontFamily: "cursive", marginLeft: "14em" }}>Already Have An Account?</Link>
          </Col>
        </Row>
      </div>
    );
  }
};

export default Register;
