import React from "react";
import { Carousel } from "react-bootstrap";
import "./../assets/css/slider.css";
import Slider1 from "./../assets/images/slider/a.jpg";
import Slider2 from "./../assets/images/slider/b.jpg";
import Slider3 from "./../assets/images/slider/c.jpg";
import Slider4 from "./../assets/images/slider/d.jpg";
const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="w-100" src={Slider1} alt="Slider Img" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="w-100" src={Slider2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="w-100" src={Slider3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="w-100" src={Slider4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
