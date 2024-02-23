import {
  ButtonGroup,
  Col,
  Container,
  Image,
  InputGroup,
  Modal,
  NavLink,
  Row,
} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { FcGoogle } from "react-icons/fc";
import { LiaApple } from "react-icons/lia";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import "./signUp.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    const email=useRef()
    const nickname=useRef()
    const password=useRef()
const [showHome,setShowHome] = useState(false)

    const localSignUp = localStorage.getItem("signUp")




useEffect(()=>{
  if( localSignUp){
    setShowHome(true)
  }
})
   const handleClick=()=>{
    
    if(password.current.value && email.current.value &&nickname.current.value){
     localStorage.setItem("email",email.current.value)
     localStorage.setItem("nickname",nickname.current.value)
     localStorage.setItem("password",password.current.value)
     localStorage.setItem("signUp",email.current.value)
     alert("Account created successfully")
     window.location.href = "/practice_test";
    
    }
    else {
      alert("Error, there is a missing field!")
    }
   }
  

  return (
    <div className="loginSection text-center">
      <Navbar expand="lg" className="musicshop-nav">
        <Container fluid>
          <Navbar.Brand className="musicshop-brand">
            <Link to="/">PastQuest</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      {/* <section className='box-section '> */}
      <div className="login-form-section ">
        <div className="top-section sign-up-top-section">
          <div>
            <h1 className="login-h1-text">Sign Up PastQuest</h1>
          </div>
        </div>
        <div className="horizontal-line sign-up-horizontal-line"></div>

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
                    ref={email}
                    placeholder="Email address"
                  />
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicPassword">
                  <Form.Control
                    className="password-input "
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    ref={password}
                    autoComplete="new-password" // To avoid browser password suggestions
                  />
                  <InputGroup.Text
                    className="fisheye"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                  </InputGroup.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="password-text text-input text-dark">
                    What shoud we call you?
                  </Form.Label>
                  <Form.Control
                    className="nickname-input"
                    type="text"
                    ref={nickname}
                    placeholder="Enter a profile name."
                  />
                  <span className="profile-name-text text-dark">
                    This appears on your profile.
                  </span>
                </Form.Group>
                <div className="signup-checkbox2 text-dark">
                  <Form.Check
                    type="checkbox"
                    id="default-checkbox"
                    label="Share my registration data with musicshop’s content 
                            providers for marketing purposes. "
                    className="signup-checkbox remember-me-button mb-3"
                  />
                </div>
                <div className="terms-and-conditions mb-4">
                  By clicking on 'Sign up', you agree to Musicshop's{" "}
                  <span>
                    <span
                      className="terms-and-conditions-link"
                      onClick={handleShow}
                    >
                      Terms and Conditions of Use
                    </span>

                    <Modal
                      show={show}
                      onHide={handleClose}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Terms and Conditions </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ea amet ex illum minima quis. Assumenda, veniam?
                        Illo sunt corrupti ea debitis esse impedit nihil
                        voluptatem similique eaque nam nemo perferendis
                        accusantium, officia quidem consequuntur nostrum
                        suscipit. Tempore nihil a nisi possimus consequatur
                        corporis unde magnam, doloribus molestias ipsam, aliquam
                        numquam, repellat cupiditate? Vel cum, necessitatibus,
                        repellat, sint optio provident id eaque amet quos in
                        fugit animi dolorum ipsum? Illo, iusto reiciendis
                        corrupti debitis omnis sed odit placeat eum natus ab
                        earum, velit dolorum praesentium architecto amet quaerat
                        aspernatur vero eligendi doloremque! Molestiae vero non
                        eos totam possimus accusantium quasi, cumque voluptas
                        saepe maiores aliquam ipsam accusamus eveniet molestias
                        debitis iusto. Commodi animi aperiam at deserunt
                        doloremque facere ut consectetur inventore magnam, ad
                        nam, quod voluptates iusto odio? Molestiae dolore quasi,
                        necessitatibus autem debitis ad earum distinctio officia
                        possimus minus repellat natus aliquid odio nesciunt,
                        tenetur placeat inventore iste atque libero? Dolorem
                        perferendis consequatur recusandae sit doloremque
                        ratione sequi obcaecati corporis incidunt delectus nemo
                        at, voluptate eveniet, fugiat facere eligendi iure
                        tenetur. Adipisci itaque quasi, eius laudantium iste
                        sapiente nulla, temporibus consequatur hic voluptatibus
                        quaerat porro quam facilis minima dolore est et beatae
                        perspiciatis accusantium, eos nesciunt. Corporis
                        similique nihil perspiciatis?
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary">Understood</Button>
                      </Modal.Footer>
                    </Modal>
                  </span>
                  .
                </div>

                <Button
                  
                  onClick={handleClick}
                  className="d-flex align-items-center justify-content-center login-submit-button signup-submit-button"
                >
                  Sign Up
                </Button>
              </Form>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="sign-up-footer">
                Already Signed Up?{" "}
                <span>
                  <Link to="/login">Log In.</Link>
                </span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
