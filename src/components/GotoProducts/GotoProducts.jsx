import React from "react";
import "./gotoproducts.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Category = () => {
  const gotoproducts = [
    {
      id: 24,
      image: "images/swatch2.webp",
      name: "Smart watch",
      description:
        "acer nitro 5 laptop, 12GB DDR4 Ram , 1TB SSD, full HD display ,  ",
    },
    {
      id: 26,
      image: "images/Tshirt1.webp",
      name: "mans Tshirt",
      description: "best color , bets fabric, not gonna hurt you pocket ",
    },
    {
      id: 2,
      image: "images/zoom_frek3-2.png",
      name: "  Lifstyle x200",
      description:
        "Lorem ipsum douas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 12,
      image: "images/msi15.webp",
      name: "msi x15",
      description:
        "Lorem ipsum dosoluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 18,
      image: "images/boatHeadphone.jpg",
      name: "boat headphone",
      description:
        "acer nitro 5 laptop, 12GB DDR4 Ram , 1TB SSD, full HD display  ",
    },
    {
      id: 17,
      image: "images/lgTv.webp",
      name: "LG tv 52 inch",
      description:
        "LG 52inch TV| full HD display | dollby vesion sound support. ",
    },
    {
      id: 20,
      image: "images/neckband1.webp",
      name: "neckband",
      description:
        "acer nitro 5 laptop, 12GB DDR4 Ram , 1TB SSD, full HD display , ",
    },
    {
      id: 23,
      image: "images/shirt5.webp",
      name: "shirt",
      description: " best color , bets fabric, not gonna hurt you pocket ",
    },
  ];
  return (
    <div className="gotoproducts_main">
      <h1 className="mx-4 text-uppercase"> check out some existing products  </h1>
      <div className="row mt-5">
        {gotoproducts.map((item, index) => {
          const { id, image, name, category, price, description } = item;
          return (
            <>
              <div className="col-lg-3 col-md-6 col-sm-10  mb-5" key={id}>
                <div className="gotoproducts_card">
                  <img
                    src={image}
                    className="card-img-top  mb-3 card_img"
                    alt="shoes-pic"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <b> {name} </b>
                    </h5>
                    <p className="card-text"> {description} </p>
                    <h3> {price} </h3>
                    <h5> {category} </h5>
                  </div>
                  <Link
                    style={{ textDecoration: "none", color: "#fff" }}
                    to={"/product"}
                  >
                    <Button
                      className="d-flex justify-containt-center "
                      variant="dark"
                    >
                      View Product
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
