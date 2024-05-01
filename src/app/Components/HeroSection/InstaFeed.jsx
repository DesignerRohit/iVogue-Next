"use client"
import React from 'react'
import Image from 'next/image'
import { Instadata } from '@/api/homepage/homepage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from 'next/link'
const Instafeed = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 5,
        slidesToScroll: 1, 
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
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                initialSlide: 2
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
            <div className='py-sm-12 py-8 overflow-hidden'>
                <h2 className='text-center fs-8 fw-semibold mb-2'>Everyday Inspiration</h2>
                <p className='text-center fs-6 text-dark'>Follow @ivogue for latest update</p>
                <div className="slider-container">
                    <Slider {...settings}>
                        {Instadata.map((insta) => {
                            return (
                                <Link href={insta.url} className="" key={insta.key}>
                                    <div className='hover-img overflow-hidden p-3'>
                                        <Image
                                            src={insta.img}
                                            alt="img"
                                            className='object-fit-cover'
                                            style={{ width: "100%", height: "350px" }}
                                        />
                                    </div>
                                </Link>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Instafeed
