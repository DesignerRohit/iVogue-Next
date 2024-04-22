
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import mobile_image from "/public/images/homepage/mobile.png"
import CommonProductCard from "./Cards/CommonProductCard";

const LikedProducts = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrow:true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <>
      <div className="container">
        <div className="d-flex mb-8 gap-1 justify-content-center align-items-center">
          <h2 className="fs-8 text-dark text-capitalize   text-center fw-bold mb-0">
          You May Also Like
          </h2>
        </div>
        {/* Slider */}
        <div className="slider-container accessories mb-53">
          <Slider {...settings}>
            <CommonProductCard image={mobile_image} />
            <CommonProductCard image={mobile_image} />
            <CommonProductCard image={mobile_image} />
            <CommonProductCard image={mobile_image} />
            <CommonProductCard image={mobile_image} />
            <CommonProductCard image={mobile_image} />
          </Slider>
        </div>
      </div>
    </>
  );
};

export default LikedProducts;
