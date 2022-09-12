import React from "react";
import NavbarPage from "./components/navbar/NavbarPage";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Product from "./components/Products/Product";
import Cart from "./components/cart/Cart";
import Login from "./components/login-Signup/Login";
import Signup from "./components/login-Signup/Signup";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <NavbarPage />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
