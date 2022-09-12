import React, { useState } from "react";
import "./Products.css";
import Model from "./Model";
import data from "./ProductData";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/slice/CartSlice";

// getting category of products
const catogryArr = [...new Set(data.map((currCat) => currCat.category))];

const Product = () => {
  // getting product from products slice
  const ProductData = useSelector((state) => state.ProductSlice);
  const cartarr = useSelector((state) => state.CartSlice);
  console.log(cartarr, "cartArr");
  const [product, setProduct] = useState(ProductData);
  const [catbtn, setCatbtn] = useState(catogryArr);
  const [modelOpen, setModelOpen] = useState(false);
  const [modelImg, setModelImg] = useState("");

  const dispatch = useDispatch();

  const handelClick = (item) => {
    dispatch(addToCart(item));
  };

  // products filter function
  const filterItem = (catogry) => {
    const updateitem = ProductData.filter((item) => {
      return item.category === catogry;
    });
    setProduct(updateitem);
  };

  //open model function

  const hadleModel = (item) => {
    setModelOpen(true);
    setModelImg(item);
  };

  return (
    <div>
      <div className="menu d-flex justify-content-center mb-5">
        {catbtn?.map((item, index) => {
          return (
            <Button
              key={index}
              className="mx-3 my-5"
              variant="danger"
              value={item}
              onClick={(e) => filterItem(e.target.value)}
            >
              {item}{" "}
            </Button>
          );
        })}
      </div>

      <div className="row Product_main">
        {modelOpen && <Model modelImg={modelImg} closeModel={setModelOpen} />}
        {product?.map((item, index) => {
          const { id, image, name, category, price, description } = item;
          return (
            <div className="col-lg-3 col-md-6 col-sm-10  mb-5" key={id}>
              <div className="Product_card">
                <img
                  src={image}
                  className="card-img-top  card_img"
                  alt="shoes-pic"
                  onClick={() => hadleModel(item)}
                />
                <div className="card-body text-align-center">
                  <h5 className="card-title">
                    <b> {name} </b>
                  </h5>
                  <p className="card-text">
                    {" "}
                    {description.slice(0, 58) + `....`}{" "}
                  </p>
                  <h4> {price} ₹ </h4>
                </div>
                <Button
                  className="d-flex justify-content-center "
                  variant="dark"
                  onClick={() => handelClick(item)}
                >
                  add to cart
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
