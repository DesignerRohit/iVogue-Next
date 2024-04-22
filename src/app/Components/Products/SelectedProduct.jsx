"use client";
import React, { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import product_image from "/public/images/homepage/product.png"
import { Icon } from "@iconify/react";
import ThumbProduct from "@/app/Components/Products/Cards/ThumbProduct";
import Link from "next/link";
import ProductPreviewCard from "@/app/Components/Products/Cards/ProductPreviewCard";

const SelectedProduct = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
  
    useEffect(() => {
      setNav1(sliderRef1);
      setNav2(sliderRef2);
    }, []);
    return (
      <>
      <div className="slider-container container product-slider">
        <div className="row">
          <div className="col-lg-6">
            <h2> </h2>
            <h4></h4>
            <Slider asNavFor={nav2} dots={true} ref={(slider) => (sliderRef1 = slider)}>
              <ProductPreviewCard shareIcon="solar:share-outline" heartIcon="ph:heart" image={product_image} />
              <ProductPreviewCard shareIcon="solar:share-outline" heartIcon="ph:heart" image={product_image} />
              <ProductPreviewCard shareIcon="solar:share-outline" heartIcon="ph:heart" image={product_image} />
              <ProductPreviewCard shareIcon="solar:share-outline" heartIcon="ph:heart" image={product_image} />
              <ProductPreviewCard shareIcon="solar:share-outline" heartIcon="ph:heart" image={product_image} />
              <ProductPreviewCard shareIcon="solar:share-outline" heartIcon="ph:heart" image={product_image} />
            </Slider>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-between ">
              <div>
              <h5 className="fs-6 text-gray-emphasis text-uppercase fw-normal mb-1">iPhone XR</h5>
             <h3 className="text-black fw-bold fs-8">Legendary Logos Stride 2.0 Case Cover For iPhone XR</h3>
              </div>
             <div className="d-flex gap-10 align-items-center">
             <h3 className="text-subtle-dark fw-bold fs-8 mb-0" style={{letterSpacing:"0.5px"}}>Rs.799</h3>
             <h3 className="text-lightgray-emphasis text-decoration-line-through  fw-bold fs-8 mb-0" style={{letterSpacing:"1px"}} >1399</h3>
             <div className="d-flex flex-column gap-1">
             <div className="d-flex align-items-center ">
                <Icon icon={"ic:baseline-star-rate"} className="fs-8 text-warning" />
                <Icon icon={"ic:baseline-star-rate"} className="fs-8 text-warning" />
                <Icon icon={"ic:baseline-star-rate"} className="fs-8 text-warning" />
                <Icon icon={"ic:baseline-star-rate"} className="fs-8 text-warning" />
                <Icon icon={"ic:baseline-star-half"} className="fs-8 text-warning" />
                <span className="fs-4 ms-2 text-black">4.5</span>
              </div>
              <p className="fs-2 text-gray-emphasis mb-0" style={{letterSpacing:"1px"}}>Reviews (135)</p>
             </div>
             </div>
            {/* Slider */}
            <div>
          <h4 className="fs-6 text-uppercase text-subtle-dark fw-normal letter" >Collection</h4>
        <Slider
          asNavFor={nav1}
          ref={(slider) => (sliderRef2 = slider)}
          slidesToShow={6}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false}
          className="thumbSlider"
          
        >
          <ThumbProduct image={product_image}/>
          <ThumbProduct image={product_image}/>
          <ThumbProduct image={product_image}/>
          <ThumbProduct image={product_image}/>
          <ThumbProduct image={product_image}/>
          <ThumbProduct image={product_image}/>
        </Slider>
        </div>
          <div>
          <h3 className="text-subtle-dark fw-bold fs-6 half-letter ">Exciting Offers</h3>
        <ul className="list-unstyled ">
          <li className="fs-6 fw-normal text-subtle-dark text-capitalize d-flex align-items-center  gap-51"><div className="round-12 bg-subtle-dark"></div>buy any 2 get extra 20 off </li>
          <li className="fs-6 fw-normal text-subtle-dark text-capitalize d-flex align-items-center  gap-51"><div className="round-12 bg-subtle-dark"></div>Free Duffle Bag on all orders above Rs.2499 </li>
        </ul>
          </div>
           <div className="d-flex flex-column gap-2">
           <div className="d-flex">
          <div className="d-flex align-items-center  gap-7 py-6 px-7  border border-subtle-dark border-2 border-end-0 ">
           <Icon icon="ph:plus" className="text-subtle-dark fs-53 pointer" />
           <span className="text-subtle-dark fs-53">01</span>
           <Icon icon="ph:minus" className="text-subtle-dark fs-53 pointer" />
          </div>
          <div className="d-flex flex-grow-1 btn btn-primary rounded-0 justify-content-center align-align-items-center">
          <span className="text-white fw-normal letter fs-53 text-uppercase align-self-center">Add to bag</span>
          </div>
           </div>
           <div className="d-flex justify-content-between align-items-center ">
            <div className="d-flex align-items-center gap-2">
              <Icon icon="iconamoon:gift-thin" className="text-subtle-dark fs-52" />
              <span className="fs-6 text-subtle-dark fw-normal">Make it a gift</span>
            </div>
            <Link href="#" className="fs-4 text-indigo fw-normal">Learn More</Link>
           </div>
           </div>
           <form className='ps-2 border border-light-gray rounded-2 position-relative d-flex align-items-stretch  '>
                <input type="nmber" className="form-control ps-2 py-2 fw-light fs-5 border-0 shadow-none " id="exampleFormControlInput1" placeholder="Enter Pincode To Check Delivery..." />
                <div className="check">
                Check
                </div>
              </form>
          </div>
        </div>
  
      </div>
      </>
    );
}

export default SelectedProduct
