import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pic1 from "../pics/carousel1.png"
import pic2 from "../pics/carousel2.png"
import pic3 from "../pics/carousel3.jpg"

function Welcome_Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        pauseOnHover: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
      };
      return (
        <Slider {...settings} className='overflow-hidden rounded-xl'>
            <img src={pic1} alt="Demo pic"></img>
            <img src={pic2} alt="Demo pic"></img>
            <img src={pic3} alt="Demo pic"></img>
          
        </Slider>
      );
    }

export default Welcome_Carousel;
