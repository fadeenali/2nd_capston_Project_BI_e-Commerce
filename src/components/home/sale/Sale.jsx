import Carousel from "react-bootstrap/Carousel";
import saleimg from "../products sale img/saleimg.jpg";
import saleimg3 from "../products sale img/saleimg3.jpg";
import flipsale from "../products sale img/flipsale.png";
import iphone from "../products sale img/iphone13sale.jpg";
import zfoald from "../products sale img/zfoldsale.webp";
import "./sale.css";

function Sale() {
  return (
    <div className="sale_main">
      <div className="sale_carousel">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block  sale_img"
              src={saleimg}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block  sale_img" src={iphone} alt="Third slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block  sale_img"
              src={saleimg3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block  sale_img"
              src={flipsale}
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block  sale_img" src={zfoald} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Sale;
