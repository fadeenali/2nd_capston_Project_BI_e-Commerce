import React from "react";
import "./Home.css";
import Cart from "../cart/Cart";
import GotoProducts from "../GotoProducts/GotoProducts";
import Login from "../login-Signup/Login";
import Signup from "../login-Signup/Signup";
import NavbarPage from "../navbar/NavbarPage";
import Product from "../Products/Product";
import Sale from "./sale/Sale";

const Home = () => {
  return (
    <div className="Home_main">
      <Sale />
      <GotoProducts/>
    </div>
  );
};

export default Home;
