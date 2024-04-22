import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import accessory from "/public/images/homepage/accessories.png"
import AccessoriesCard from "./Cards/AccessoriesCard";

const Accessories = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
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
        <div className="d-flex mb-53 gap-1 justify-content-center align-items-center">
          <h1 className="fs-8 text-dark text-text-capitalize  text-center fw-bold mb-0">
            Add On Accessory: Phone Utility Lanyard
          </h1>
          <Icon icon="ep:info-filled" className="text-subtle-dark fs-5" />
        </div>
        {/* Slider */}
        <div className="slider-container accessories mb-53">
      <Slider {...settings}>
        <AccessoriesCard image={accessory} price={1199} />
        <AccessoriesCard image={accessory} price={1199} />
        <AccessoriesCard image={accessory} price={1199} />
        <AccessoriesCard image={accessory} price={1199} />
        <AccessoriesCard image={accessory} price={1199} />
        <AccessoriesCard image={accessory} price={1199} />
        <AccessoriesCard image={accessory} price={1199} />
      </Slider>
    </div>
      </div>
    </>
  );
};

export default Accessories;
