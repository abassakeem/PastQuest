import {
  Button,
  ButtonToolbar,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import "./header.css";
import { Link } from "react-router-dom";

//links for the navbar and thier display names
const navLinks = [
  {
    display: "Practice Test",
    url: "/practice_test",
  },
];
const isLoggedIn = localStorage.getItem("signUp");
const logout = () => {
  localStorage.removeItem("signUp");
  alert("Logged out");
  window.location.reload();
};
const Header = () => {
  return (
    <>
      <header className="header">
        {["md"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            id="navbar-container"
            className=" top-0 navbar-container mb-3"
          >
            <Container className="">
              <Navbar.Brand className="logo-text" to="/">
                Past<span className="quest">Quest</span>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                className="offcanvas-container     navbar-container"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                  ></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className=" justify-content-end">
                  <Nav
                    className="justify-content-between align-items-center text-center p-1 nav-list"
                    activeKey="/home"
                  >
                    {navLinks.map((item, index) => (
                      <Nav.Item>
                        <Nav.Link>
                          {" "}
                          <li className="nav-item" key={index}>
                            <Link to={item.url}>{item.display}</Link>
                          </li>
                        </Nav.Link>
                      </Nav.Item>
                    ))}

                    <div className="login g-5 ">
                      <Nav.Item>
                        <ButtonToolbar>
                        {isLoggedIn ? (
                      <>
                        
                        <button
                          onClick={logout}
                          className=" logout-button"
                        >
                          Log out
                        </button>
                      </>
                    ) : (
                      <>
                       
                        <Link
                          to="/signup"
                          className=" signup-button d-flex justify-content-center align-items-center"
                        >
                          Get Started
                        </Link>
                      </>
                    )}
                        </ButtonToolbar>
                      </Nav.Item>
                    </div>
                  </Nav>

                  {/* <div className="header-footer">
                    <div className="header-footer-header">
                        <h6>More from Study Junction</h6>
                    </div>
                    <div className="help">help</div>
                    <inite-friends>
                        invite friends
                    </inite-friends>
                </div> */}
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </header>
    </>
  );
};

export default Header;
