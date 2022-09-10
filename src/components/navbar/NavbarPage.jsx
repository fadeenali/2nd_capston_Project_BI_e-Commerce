import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavbarPage = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="fs-3 px-4">
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              e-Commerce
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Phone</Nav.Link>
              <Nav.Link>electronics</Nav.Link>
              <Nav.Link>Dress</Nav.Link>
              <Nav.Link>Shoes</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="ml-4 fs-5">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Login
                </Link>
              </Nav.Link>
              <Nav.Link className="ml-4 fs-5">
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Signup
                </Link>
              </Nav.Link>
              <Nav.Link eventKey={2}>
                <Link
                  to="/cart"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <FaCartArrowDown className="fs-4 mr-5" />
                </Link>
                <span className="cart_Item_count mx-2">{`1`}</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarPage;
