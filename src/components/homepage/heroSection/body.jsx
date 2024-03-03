import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import img1 from "./../../../assets/img/Education.png";
import "./body.css";
import { Link } from "react-router-dom";
import SignUp from "../../sign up/signUp";

const BodySection = () => {
  const isLoggedIn = localStorage.getItem("signUp");

  const logout = () => {
    localStorage.removeItem("signUp");
    alert("Logged out");
    window.location.reload();
  };

  return (
    <>
      <Container>
        <div className="section">
          <Row className="align-items-center justify-content-center">
            <Col lg="5" md="5">
              <div className="body-content text-center">
                <h2 className="">
                  PastQuest
               
                </h2>
                <small>
                  <b>
                    <span className="text-1"> Your Reliable quiz app.</span>
                  </b>
                </small>
                <p className="my-4 text-3">
                  "Embark on a captivating journey through time and knowledge
                  with PastQuest – your ultimate quiz app! Delve into a treasure
                  trove of historical, cultural, and general knowledge quizzes
                  that transport you across different eras. From ancient
                  civilizations to modern history, PastQuest challenges your
                  intellect and sparks curiosity. – where every quiz is a voyage
                  through time!".
                </p>
                <div className="search">
                  <div className="d-flex mb-5 justify-content-center align-items-center search-form">
                    {isLoggedIn ? (
                      <>
                        <Link
                          to="/practice_test"
                          className=" startquiz-button m-2"
                        >
                          Start Quiz
                        </Link>
                        <button
                          onClick={logout}
                          className=" logout-button"
                        >
                          Log out
                        </button>
                      </>
                    ) : (
                      <>
                        <Link to="/login" className=" signin-button m-2">
                          Log in
                        </Link>
                        <Link
                          to="/signup"
                          className=" signup-button"
                        >
                          Get Started
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="7" md="7">
              <Image
                className="welcome-image text-center mt-4"
                src={img1}
                alt=""
                fluid
              />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default BodySection;
