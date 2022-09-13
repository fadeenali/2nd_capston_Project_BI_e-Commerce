import React from "react";
import "./model.css";
import { ImCross } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";

const Model = ({ modelImg, closeModel }) => {
  return (
    <>
      <div className="main" onClick={() => closeModel(false)}>
        <div className="body  text-center row">
          <div className="model-images col-lg-12">
            <img className="image " src={modelImg.image} />
          </div>
          <div className="rating col-lg-12 col-sm-12">
            <h4> {modelImg.rating} </h4>
          </div>
          <div className="reviews text-white col-lg-12 col-sm-12">
            <h3> {modelImg.review} </h3>
          </div>
        </div>
        <ImCross className="closeBtn" onClick={() => closeModel(false)} />
      </div>
    </>
  );
};

export default Model;
