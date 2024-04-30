
'use client'
import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import img1 from "/public/images/homepage/mobile.png";
import FeaturedProduct from './FeaturedProduct';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularProducts = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
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
                slidesToScroll: 1,
                dots: true
              }
            }
          ]
      };
    return (
        <>
            <div className='py-md-12 py-8'>
                <div className='container'>
                    <h2 className='text-center fs-8 fw-semibold mb-sm-5 mb-3'>Popular Products</h2>
                    <div className="slider-container accessories">
                        <Slider {...settings}>
                            <FeaturedProduct image={img1} title="iPhone 15 Pro Max" price="1399" discount="700" discountedPrice='699' />
                            <FeaturedProduct image={img1} title="iPhone 15 Pro Max" price="1399" discount="700" discountedPrice='699' />
                            <FeaturedProduct image={img1} title="iPhone 15 Pro Max" price="1399" discount="700" discountedPrice='699' />
                            <FeaturedProduct image={img1} title="iPhone 15 Pro Max" price="1399" discount="700" discountedPrice='699' />
                        </Slider>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PopularProducts
