import React, { useEffect } from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "../../redux/slice/CartSlice";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarPage = () => {
  const dispatch = useDispatch();

  const amount = useSelector((state) => state.CartSlice.amount);
  const cartData = useSelector((state) => state.CartSlice.cart);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartData]);

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="navbar-main"
      >
        <Container>
          <Navbar.Brand className="fs-3">
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              e-Commerce
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link className="ml-4 fs-5">
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className="ml-4 fs-5">
                <Link
                  to="/product"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Product
                </Link>
              </Nav.Link>
              <Nav.Link className="ml-4 fs-5">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Login
                </Link>
              </Nav.Link>

              <Nav.Link eventKey={2}>
                <Link
                  to="/cart"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <FaCartArrowDown className="fs-4 mr-5" />
                </Link>

                <span className="nav_cart_arr cart_Item_count mx-2 p-1">
                  {amount}
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarPage;
