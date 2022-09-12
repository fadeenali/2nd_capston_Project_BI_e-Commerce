import React from "react";
import "./model.css";
import { ImCross } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";

const Model = ({ modelImg, closeModel }) => {
  return (
    <>
      <div className="main" onClick={() => closeModel(false)} >
        <div className="body"  >
          <img className="image" src={modelImg.image} />
           <div className="reviews">
             <h4>  <AiFillStar className="bg-warning m-1"/>  
                  <AiFillStar className="bg-warning m-1" />  
                  <AiFillStar className="bg-warning m-1" />  
                  <AiFillStar className="bg-warning m-1" />  
                  <AiFillStar className="bg-warning m-1" />  
             </h4>
           </div>
        </div>
        <ImCross className="closeBtn" onClick={() => closeModel(false)} />
      </div>
    </>
  );
};

export default Model;
