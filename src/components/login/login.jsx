import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import "./login.css";

const LogIn = () => {
  const email = useRef();
  const password = useRef();

  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = () => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    const storedNickname = localStorage.getItem("nickname");

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    if ((enteredEmail === storedEmail && enteredPassword === storedPassword) || (enteredEmail === storedNickname && enteredPassword === storedPassword)) {
      localStorage.setItem("signUp", enteredEmail);
      alert("Successfully signed in");
      window.location.href = "/practice_test";
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="loginSection text-center text-dark vh-100">
      <Navbar expand="lg" className="musicshop-nav">
        <Container fluid>
        <Navbar.Brand className="logo-text"  ><Link to="/">Past<span className="quest">Quest</span></Link></Navbar.Brand>
        </Container>
      </Navbar>

      <Row className="d-flex flex-column justify-content-center align-items-center">
        <div className="login-form-section mt-5">
          <div className="top-section">
            <div>
              <h1 className="login-h1-text">Log In</h1>
            </div>
          </div>
          <div className="horizontal-line"></div>

          <div className="bottom-section">
            <Row>
              <Col
                xs="12"
                className="d-flex align-items-center justify-content-center"
              >
                <Form className="login-page-form">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      className="email-input"
                      type="email"
                      placeholder="Email or Nickname"
                      autoComplete="off"
                      ref={email}
                    />
                  </Form.Group>
                  <div className="p-relative">
                  <div className="mb-3 password-container" controlId="formBasicPassword">
                  <Form.Control
                    className="password-input "
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    ref={password}
                    autoComplete="new-password" // To avoid browser password suggestions
                  />
                  <span
                    className="fisheye"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                  </span>
                </div>
</div>
                  <Form.Check
                    className="remember-me-button text-dark"
                    type="switch"
                    variant="dark"
                    id="custom-switch"
                    label="Remember me"
                  />

                  <Button
                    onClick={handleSignIn}
                    type="button"
                    className="d-flex align-items-center justify-content-center login-submit-button"
                  >
                    Log in
                  </Button>
                </Form>
              </Col>

              <div className="forgot-password">
                <Link to="/signup">Forgot your password?</Link>
              </div>
            </Row>
            <div className="horizontal-line sign-up-horizontal-line"></div>
            <Row>
              <Col>
                <div className="sign-up-footer">
                  Don't have an account?{" "}
                  <span>
                    <Link to="/signup">Sign Up for PastQuest.</Link>
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default LogIn;
