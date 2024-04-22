"use client"
import React from "react";
import Image from 'next/image'
const FeaturedProduct = ({image,title,price,discountedPrice,discount}) => {
  return (
    <>
      <div className="p-6">
        <div className="productbox bg-gray p-3 position-relative">
          <div className="badge position-absolute bg-primary-subtle rounded-0 text-dark fw-normal fs-4 px-3">
            New
          </div>
          <div className="text-center hover-img overflow-hidden">
            <Image src={image} alt="img" className="img-fluid" />
          </div>
          <h5 className="text-dark-gray fs-6 mb-6">{title}</h5>
          <div className="d-flex align-items-center justify-content-between">
            <h6 className="text-dark-gray fw-normal mb-0 fs-5">{`From Rs.${discountedPrice}`}</h6>
            <p className="text-dark-gray  mb-0 fs-5 text-decoration-line-through ">{price}</p>
            <span className="text-indigo fs-5">{`Save rs.${discount}`}</span>
          </div>
          <button className="btn btn-outline-indigo px-8 mt-2 py-55 lh-1 fs-3 border-2  w-100 fw-normal">
            Inquire Now
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedProduct;
