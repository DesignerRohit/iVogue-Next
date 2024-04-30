"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BannersliderData } from '@/api/homepage/homepage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const BannerSlide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:false,
        slidesToShow: 1,
        slidesToScroll: 1, 
    }
    return (
        <>
            <div className='container py-8 px-0'>
            <div className="slider-container banner-slider">
                    <Slider {...settings}>
                    {BannersliderData.map((bannerslider) => {
                        return (
                            <div key={bannerslider.key}>
                                
                                    <div className='position-relative  hover-img overflow-hidden'>
                                        <Image
                                            src={bannerslider.img}
                                            alt="img"
                                            className='object-fit-cover  d-md-block d-none'
                                            style={{ width: "100%", height: "700px" }}

                                        />
                                        <Image
                                            src={bannerslider.img}
                                            alt="img"
                                            className='object-fit-cover d-md-none d-block'
                                            style={{ width: "100%", height: "400px" }}

                                        />
                                        <div className='position-absolute banner-text'>
                                            <p className='text-white fs-6 fw-bold pb-2'>{bannerslider.subtitle}</p>
                                            <h5 className='text-white fs-9 fw-bold pb-2'>{bannerslider.title}</h5>
                                            <div className='d-flex align-baseline lh-lg pb-3'>
                                                <span className='fs-5 fw-normal fw-normal text-white'>RS</span>
                                                <h2 className='text-white fs-80 fw-bold mb-0'>{bannerslider.price}</h2>
                                            </div>
                                            <Link className="btn btn-primary px-10 py-2 mt-2" href={bannerslider.url} >Shop now
                                                </Link>  
                                        
                                        </div>
                                    </div>
                               
                            </div>
                        )
                    })}
                   </Slider>
                </div>
            </div>

        </>
    )
}

export default BannerSlide
