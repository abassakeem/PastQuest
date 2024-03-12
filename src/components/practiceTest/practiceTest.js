import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./practicetest.css";
import practiceTest from "./../../assets/img/DeskWriting .png";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import PracticeTestInstructions from "../practiceTest/practiceTestInstructions";
import { Helmet } from "react-helmet";
import { useState } from "react";
const PracticeTest = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isLoggedIn = localStorage.getItem("signUp");

  return (
    <div className="practice-test-container">
      <Container>
        <Link to="/" className="btn btn-light text-dark back-button">
          Back
        </Link>

        <div className="section">
          <Row className="d-flex text-center align-items-center justify-content-center">
            <Col
              lg="12"
              className="align-items-center justify-content-center text-center practice-test  links"
            >
              <div className="practice-test-text">
                <h2>PastQuest</h2>
                <p>Practice Test</p>
              </div>
            </Col>
            <Col xxs="6" xs="6" sm="6" md="6" lg="6">
            {isLoggedIn ? (
              <div className="right">
                <div className="instructions p-3">
                  <PracticeTestInstructions />
                </div>
                <div className="buttons d-flex align-items-center justify-content-center text-center">
                  <p
                    onClick={handleShow}
                    className=" start-button mt-4"
                   
                  >
                    Start{" "}
                  </p>


                  <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body> <Container>
            <Row>
                <Col>
        <Helmet><title>Quiz Instructions - Quiz App</title></Helmet>
        <div className="instructions container">
            
        <h6>Have you gone through the instructions?</h6>
            <div>
                
                
            </div>
        </div>
        </Col>
        </Row>
        </Container></Modal.Body>
        <Modal.Footer>
          <button className='modal-back-btn'  onClick={handleClose}>
          <Link className='modal-back-link' to="/practice_test">No take me back</Link>
          </button>
          <button className='modal-back-btn' onClick={handleClose}>
          <Link className='modal-start-link' to="/practice_test/start">Okay, Let's do this!</Link>
          </button>
        </Modal.Footer>
      </Modal>

                </div>
              </div>
               ) : (
                <>
                <h3>Want to take a test?</h3>
                  <Link to="/login" className=" signin-button m-2">
                    Log in
                  </Link>
                  
                </>
              )}
            </Col>{" "}
            <Col md="6" lg="6">
              <Image
                className="quiz-image text-center "
                src={practiceTest}
                alt=""
                fluid
              />{" "}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default PracticeTest;
