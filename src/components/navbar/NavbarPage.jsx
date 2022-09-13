import React, { useEffect } from "react";
import "./Navbarpage.css";
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
        data-spy="affix"
        data-offset-top="20"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="navbar  navbar-inverse "
      >
        <Container>
          <Navbar.Brand className="fs-2">
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              e-Commerce
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to="/" className="ml-5 fs-5">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/product" className="ml-5 fs-5">
                Product
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="ml-5 fs-5">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="cart" eventKey={2} className="ml-5 fs-5">
                <FaCartArrowDown className="fs-5 mr-5" />
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
