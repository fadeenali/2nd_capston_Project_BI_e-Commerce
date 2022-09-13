import React from "react";
import Slider from "react-slick";
const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "kritika",
      review:
        "A really good experience with e-Commerce , really appreciate the service",
      image: "images/woman-avtar2.png",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      name: "Abhay kumar",
      review:
        "A really good experience with e-Commerce , really appreciate the service",
      image: "images/man-avatar1.webp ",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 3,
      name: "Priya",
      review:
        "A really good experience with e-Commerce , really appreciate the service",
      image: "images/woman-avatar3.png",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 4,
      name: "Rohit",
      review:
        "A really good experience with e-Commerce , really appreciate the service",
      image: "images/man-avatar1.webp",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 5,
      name: "faiz",
      review:
        "A really good experience with e-Commerce , really appreciate the service",
      image: "images/child-avtar.webp",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 6,
      name: "faiz",
      review:
        "A really good experience with e-Commerce , really appreciate the service",
      image: "images/child-avtar.webp",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <div className="" style={{ height: "60vh" }}>
      <h2> Customer Reviews </h2>
      <Slider {...settings}>
        {reviews.map((item) => {
          const { name, image, review, rating, id } = item;
          return (
            <div
              className="review_card m-5 text-center"
              key={id}
              style={{ width: "10rem" }}
            >
              <img
                src={image}
                className="card-img-top  mb-3 card_img align-center"
                alt="shoes-pic"
                style={{ borderRadius: "100%", height: "8rem", width: "8rem" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center  text-uppercase">
                  <b> {name} </b>
                </h5>
                <p
                  className="card-text text-center "
                  style={{ width: "12rem" }}
                >
                  {" "}
                  {review}
                </p>
                <h4> {rating}</h4>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Review;

<div className="gotoproducts_card">
  <img
    src="images/woman-avtar2.png"
    className="card-img-top  mb-3 card_img"
    alt="shoes-pic"
    style={{ borderRadius: "100%" }}
  />
  <div className="card-body">
    <h5 className="card-title">
      <b> Kritika </b>
    </h5>
    <p className="card-text">
      {" "}
      A really good experience with e-Commerce , really appreciate the service{" "}
    </p>
    <h4>⭐⭐⭐⭐⭐ </h4>
  </div>
</div>;
