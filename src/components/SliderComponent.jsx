import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className=" h-40 bg-white ">
        <h3>1</h3>
      </div>
      <div className=" h-40 bg-white ">
        <h3>2</h3>
      </div>
      <div className=" h-40 bg-white ">
        <h3>3</h3>
      </div>
      <div className=" h-40 bg-white ">
        <h3>4</h3>
      </div>
      <div className=" h-40 bg-white ">
        <h3>5</h3>
      </div>
      <div className=" h-40 bg-white ">
        <h3>6</h3>
      </div>
    </Slider>
  );
}