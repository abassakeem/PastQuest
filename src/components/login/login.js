
import { ButtonGroup, Col, Container,Image,InputGroup,NavLink,Row } from 'react-bootstrap';

import Navbar from 'react-bootstrap/Navbar';


import {FcGoogle} from "react-icons/fc"
import {LiaApple} from "react-icons/lia"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

import "./login.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';

const LogIn = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword); };

    
    return ( 
        
        <div className="loginSection text-center text-dark">

            <Navbar expand="lg" className="musicshop-nav">
            <Container fluid>
                <Navbar.Brand className="musicshop-brand" ><Link to="/">PastQuest</Link></Navbar.Brand>
                
            </Container>
            </Navbar>
            {/* <section className='box-section '> */}
            <div className="login-form-section ">
                
                <div className="top-section ">
                    <Row>
                        <h1 className='login-h1-text'>Log In To Musicshop</h1>
                        <Col xs="12" className="d-flex align-items-center justify-content-center">
                            

                            <div className="d-flex align-items-center justify-content-center google continue-option continue-option-1">
                                <FcGoogle className='google-logo'/> 
                                <span>Continue with Google</span>
                                
                            </div>
                        </Col>
                        <Col xs="12" className="d-flex align-items-center justify-content-center">
                            <div className="d-flex align-items-center justify-content-center apple continue-option continue-option-2">
                            <LiaApple className='apple-logo' />
                            <span>Continue with Apple </span>
                            </div>
                        </Col>
                        <Col xs="12" className="d-flex align-items-center justify-content-center">
                            <div className="d-flex align-items-center justify-content-center apple continue-option continue-option-3">
                            
                            <span>Continue with Phone number </span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="horizontal-line"></div>
          

            <div className="bottom-section">
                <Row>          
                    <Col xs="12" className="d-flex align-items-center justify-content-center">
                    <Form className='login-page-form'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        
                        <Form.Control className='email-input' type="email" placeholder="Email or Username"  autoComplete="off"/>
                        </Form.Group>

                        <Form.Group className="mb-1" controlId="formBasicPassword">
                        
                        <Form.Control className="password-input" type="password" placeholder="Password" />
                        <InputGroup.Text className='fisheye' onClick={togglePasswordVisibility}>
          {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
        </InputGroup.Text>
                        </Form.Group>
                        
                        <Form.Check
                        className='remember-me-button text-dark'
                        type="switch"
                        variant="dark"
                        id="custom-switch"
                        label="Remember me"
                        />
                        
                        <Button type="submit" className='d-flex align-items-center justify-content-center login-submit-button'>
                        Log in
                        </Button>
                    </Form>
                    </Col>
                    
                    <div className="forgot-password">
                    <a href="#"> Forgot your password?</a>
                    </div>
            </Row>
             <div className="horizontal-line"></div>
  <Row>
    <Col>
    <div className='sign-up-footer'>
      Don't have an account? <span ><Link to="/signup">Sign Up for Musicshop.</Link></span>
      </div>
    </Col>
  </Row>
</div>

    </div>
   
           
            </div>
        

     );
}
 
export default LogIn;