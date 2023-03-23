import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Test.css";


export default function SimpleSlider() {
  var settings = {
    autoplay:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1,
    autoplaySpeed:2000
  };
  
  return (
    <Slider {...settings}>
      <div>
        <img src="hospital1.jpeg" alt="#" />
      </div>
      <div>
        <img src="hospital2.jpeg" alt="#" />
      </div>
      <div>
        <img src="hospital3.jpeg" alt="#" />
      </div>
      
    </Slider>
  );
}






