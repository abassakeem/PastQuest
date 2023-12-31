import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import img1 from "./../../../assets/img/welcome.svg";
import './body.css'
import { Link } from "react-router-dom/cjs/react-router-dom";

const BodySection = () => {
    return ( 
        <>
        <Container>
            <div className="section">
            <Row className="align-items-center justify-content-center">
                <Col lg= "5" md="5">
                    <div className="body-content">
                    <h2 className="mb-4 " >PastQuest<br/><small><span className="text-1"> Your Reliable quiz app.</span></small>
                       
                       
                        
                    </h2>
                    <p className="mb-4 text-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum voluptates ullam possimus delectus reprehenderit atque culpa, explicabo eveniet incidunt, est at repudiandae amet labore? Impedit labore nesciunt adipisci expedita incidunt?  .</p>
                    <div className="search ">
                    <div className="d-flex mb-5 justify-content-center align-items-center search-form">
                    <Link to="/practice_test" className="btn btn-primary signup-button m-2" >start</Link>
                        
                        <Link to="/signin" className="btn btn-outline-success signin-button" >Sign In</Link>
                    </div>
                    </div>
                    </div>
                    
                    
                </Col>
                <Col lg= "7" md="7">
                    <Image className="welcome-image text-center mt-4" src={img1} alt="" fluid /> </Col>
            </Row>
            </div>
        </Container>
        </>
     );
}
 
export default BodySection;