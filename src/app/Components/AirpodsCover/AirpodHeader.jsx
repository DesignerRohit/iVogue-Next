
"use client";
import React from 'react'
import summerSale from "/public/images/summer_sale.png";
import Image from "next/image";

const AirpodHeader = () => {
  return (
    <>
      <div className="wrapper bg-light-primary">
        <div className="container py-2 d-flex justify-start">
          <Image src={summerSale} alt="summer-image" />
        </div>
      </div>
      <div className="container">
        <h2 className="fw-bold fs-8  text-center  my-md-11 my-8">Airpods Cover</h2>
      </div>
    </>
  )
}

export default AirpodHeader

