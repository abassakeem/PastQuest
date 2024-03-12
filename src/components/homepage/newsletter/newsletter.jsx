import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./newsletter.css"


const Newsletter = () => {
    return ( 
        <div className="newsletter">
        <Container >
            <div className="newsletter-section">

            
            <Row>
                <Col lg="12" className="text-center">
                    <h2 className="newsletter-h2">TRY US OUT</h2>
                     <Form className="d-flex justify-content-center align-items-center flex-column subscribe-form">
                        <div className="">
                         
                        </div>
                       
                        <div className="mt-2">
                              <button className="subscribe-button" >Sign up</button>
                        </div>
                      
                    </Form>
                </Col>
            </Row>
            </div>
        </Container>
        </div>
     );
}
 
export default Newsletter;