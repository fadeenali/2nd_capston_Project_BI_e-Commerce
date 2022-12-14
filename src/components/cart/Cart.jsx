import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { Button } from "react-bootstrap";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  calculateTotal,
} from "../../redux/slice/CartSlice";
import emptyImg from "./cart-empty.jpg";

import { AiOutlineArrowLeft } from "react-icons/ai";

const Cart = () => {
  const cartData = useSelector((state) => state.CartSlice.cart);
  const cartSubtotal = useSelector((state) => state?.CartSlice?.total);
  const subTotal = cartSubtotal + 100;

  // geting sub count from the cartSlice
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartData]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/product");
  };

  // if cart is empty so show
  if (cartData < 1) {
    return (
      <div className="cartEmpty" style={{ minHeight: "53vh" }}>
        <div className="cart_Empty_img  d-flex justify-content-center">
          <img src={emptyImg} alt="emptyCartImage" className="img-fluid" />
        </div>
        <div className="btn d-flex justify-content-center text-center ">
          <Button
            className="add_To_Cart btn btn-danger "
            onClick={() => backToHome()}
            style={{ outline: "none" }}
          >
            Add something to cart
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart_main">
      <div className="cart">
        <section className="py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="row">
              <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                {/* if  the cart array is empty soo render the img else render the cart table */}
                {cartData < 1 ? (
                  <div className="cartEmpty my-5" style={{ minHeight: "40vh" }}>
                    <div className="cart_Empty_img  d-flex justify-content-center">
                      <img
                        src={emptyImg}
                        alt="emptyCartImage"
                        className="img-fluid"
                      />
                    </div>
                    <div className="btn d-flex justify-content-center text-center ">
                      <Button
                        className="add_To_Cart btn btn-danger  mb-5"
                        onClick={() => backToHome()}
                        style={{ outline: "none" }}
                      >
                        Add something to cart
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div
                    className="table-responsive"
                    style={{ height: "40vh", overflowY: "scroll" }}
                  >
                    <table className="table overflow-scroll">
                      <thead>
                        <tr>
                          <th scope="col" className="border-0 bg-light">
                            <div className="p-2 px-3 text-uppercase">
                              Product
                            </div>
                          </th>
                          <th scope="col" className="border-0 bg-light">
                            <div className="p-2 px-3 text-uppercase">Name</div>
                          </th>
                          <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Quantity</div>
                          </th>
                          <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Price</div>
                          </th>
                          <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Remove</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartData?.map((item) => {
                          const { id, image, name, price, amount } = item;

                          return (
                            <tr key={id}>
                              <th scope="row" className="border-0">
                                <div className="p-2">
                                  <img
                                    src={image}
                                    alt="productImage"
                                    width="70"
                                    className="img-fluid rounded shadow-sm"
                                  />
                                </div>
                              </th>
                              <td className="border-0 align-middle text-uppercase">
                                <strong> {name} </strong>
                              </td>
                              <td className="border-0 align-middle">
                                <Button
                                  className="btn btn-light border border-0 fs-5 fw-bold "
                                  onClick={() => {
                                    if (amount === 1) {
                                      dispatch(removeFromCart(item.id));
                                    }
                                    dispatch(decreaseQuantity(item));
                                  }}
                                >
                                  -
                                </Button>

                                <strong className="mx-2 fs-5">
                                  {" "}
                                  {amount}{" "}
                                </strong>

                                <Button
                                  className="btn btn-light border border-0 fs-5 fw-bold "
                                  onClick={() =>
                                    dispatch(increaseQuantity(item))
                                  }
                                >
                                  +
                                </Button>
                              </td>
                              <td className="border-0 align-middle">
                                <strong> {price} ???</strong>
                              </td>
                              <td className="border-0 align-middle">
                                <Button
                                  variant="dark"
                                  onClick={() =>
                                    dispatch(removeFromCart(item.id))
                                  }
                                >
                                  {" "}
                                  <FaTrash />{" "}
                                </Button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
              <div className="clear-btn d-flex  justify-content-end">
                <Button
                  variant="danger"
                  className="mx-4 col-lg-3 "
                  onClick={() => dispatch(clearCart())}
                >
                  {" "}
                  Clear cart
                </Button>
              </div>
            </div>
            <div className="row py-5 p-4 bg-white rounded shadow-sm">
              <div className="col-lg-6">
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">
                  Coupon code
                </div>
                <div className="p-4">
                  <p className="mb-4">
                    <em>
                      If you have a coupon code, please enter it in the box
                      below
                    </em>
                  </p>
                  <div className="input-group mb-4 border rounded-pill p-2">
                    <input
                      type="text"
                      placeholder="Apply coupon"
                      aria-describedby="button-addon3"
                      className="form-control border-0"
                    />
                    <div className="input-group-append border-0">
                      <button
                        id="button-addon3"
                        type="button"
                        className="btn btn-dark px-4 rounded-pill"
                      >
                        <i className="fa fa-gift mr-2"></i>Apply coupon
                      </button>
                    </div>
                  </div>
                </div>

                <div class="p-4  row">
                  <Button className="col  btn-lg" onClick={() => backToHome()}>
                    {" "}
                    <AiOutlineArrowLeft /> continue Shiping{" "}
                  </Button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">
                  Order summary{" "}
                </div>
                <div className="p-4">
                  <p className="mb-4">
                    <em>
                      Shipping and additional costs are calculated based on
                      values you have entered.
                    </em>
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Order Subtotal </strong>
                      <strong> {cartSubtotal} ???</strong>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">
                        Shipping and handling
                      </strong>
                      <strong>100.00 ???</strong>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Tax</strong>
                      <strong>0.00 ???</strong>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Total</strong>
                      <h5 className="fw-bold fs-4"> {subTotal} ???</h5>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-dark rounded-pill py-2 d-md-block"
                  >
                    Procceed to checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
