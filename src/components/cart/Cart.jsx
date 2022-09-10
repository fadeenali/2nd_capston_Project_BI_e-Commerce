import React, { useState } from "react";
import CartSlice from "../../redux/slice/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { removeFromCart } from "../../redux/slice/CartSlice";
import emptyImg from "./cart-empty.jpg";

const Cart = () => {
  const cartData = useSelector((state) => state.CartSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const backToHome = () => {
    navigate("/product");
  };

  // remove the item from cart 
  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

//  clear all item from cart 
// const handleClear=()=>{
//   dispatch(clearCart())
// }

  return (
    <div className="cart_main">
      {cartData.length ? (
        <>
          <div className="cart">
            <section class="py-5">
              <div class="container px-4 px-lg-5 my-5">
                <div class="row">
                  <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                    <div
                      class="table-responsive"
                      style={{ height: "40vh", overflowY: "scroll" }}
                    >
                      <table class="table overflow-scroll">
                        <thead>
                          <tr>
                            <th scope="col" class="border-0 bg-light">
                              <div class="p-2 px-3 text-uppercase">Product</div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                              <div class="p-2 px-3 text-uppercase">Name</div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                              <div class="py-2 text-uppercase">Quantity</div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                              <div class="py-2 text-uppercase">Price</div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                              <div class="py-2 text-uppercase">Remove</div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartData?.map((item) => {
                            const {
                              id,
                              image,
                              name,
                              category,
                              price,
                              description,
                            } = item;

                            return (
                              <tr key={id}>
                                <th scope="row" class="border-0">
                                  <div class="p-2">
                                    <img
                                      src={image}
                                      alt="productImage"
                                      width="70"
                                      class="img-fluid rounded shadow-sm"
                                    />
                                  </div>
                                </th>
                                <td class="border-0 align-middle">
                                  <strong> {name.toUpperCase()} </strong>
                                </td>
                                <td class="border-0 align-middle">
                                  <Button className="btn btn-light border border-2">
                                    -
                                  </Button>
                                  <input
                                    type="text"
                                    value={quantity}
                                    style={{
                                      textAlign: "center",
                                      width: "30px",
                                      border: "none",
                                    }}
                                  />
                                  <Button className="btn btn-light border border-2">
                                    +
                                  </Button>
                                </td>
                                <td class="border-0 align-middle">
                                  <strong> {price} </strong>
                                </td>
                                <td class="border-0 align-middle">
                                  <Button
                                    variant="dark"
                                    onClick={() => handleRemove(item.id)}
                                  >
                                    <FaTrash />
                                  </Button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <Button className="btn btn-danger d-flex justify-content-center text-center"   > clear cart </Button>
                  </div>
                </div>

                <div class="row py-5 p-4 bg-white rounded shadow-sm">
                  <div class="col-lg-6">
                    <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">
                      Coupon code
                    </div>
                    <div class="p-4">
                      <p class="mb-4">
                        <em>
                          If you have a coupon code, please enter it in the box
                          below
                        </em>
                      </p>
                      <div class="input-group mb-4 border rounded-pill p-2">
                        <input
                          type="text"
                          placeholder="Apply coupon"
                          aria-describedby="button-addon3"
                          class="form-control border-0"
                        />
                        <div class="input-group-append border-0">
                          <button
                            id="button-addon3"
                            type="button"
                            class="btn btn-dark px-4 rounded-pill"
                          >
                            <i class="fa fa-gift mr-2"></i>Apply coupon
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">
                  Instructions for seller
                </div>
                <div class="p-4">
                  <p class="mb-4">
                    <em>
                      If you have some information for the seller you can leave
                      them in the box below
                    </em>
                  </p>
                  <textarea
                    name=""
                    cols="30"
                    rows="2"
                    class="form-control"
                  ></textarea>
                </div> */}
                  </div>
                  <div class="col-lg-6">
                    <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">
                      Order summary{" "}
                    </div>
                    <div class="p-4">
                      <p class="mb-4">
                        <em>
                          Shipping and additional costs are calculated based on
                          values you have entered.
                        </em>
                      </p>
                      <ul class="list-unstyled mb-4">
                        <li class="d-flex justify-content-between py-3 border-bottom">
                          <strong class="text-muted">Order Subtotal </strong>
                          <strong>39000 ₹</strong>
                        </li>
                        <li class="d-flex justify-content-between py-3 border-bottom">
                          <strong class="text-muted">
                            Shipping and handling
                          </strong>
                          <strong>100.00 ₹</strong>
                        </li>
                        <li class="d-flex justify-content-between py-3 border-bottom">
                          <strong class="text-muted">Tax</strong>
                          <strong>0.00 ₹</strong>
                        </li>
                        <li class="d-flex justify-content-between py-3 border-bottom">
                          <strong class="text-muted">Total</strong>
                          <h5 class="fw-bold">40000.00 ₹</h5>
                        </li>
                      </ul>
                      <a
                        href="#"
                        class="btn btn-dark rounded-pill py-2 d-md-block"
                      >
                        Procceed to checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : (
        <div className="cartEmpty">
          <div className="cart_Empty_img  d-flex justify-content-center">
            <img src={emptyImg} alt="emptyCartImage" className="img-fluid" />
          </div>
          <div className="btn d-flex justify-content-center text-center ">
            <Button className="add_To_Cart btn btn-danger " onClick={() => backToHome()}>
              Add somthing to cart
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
