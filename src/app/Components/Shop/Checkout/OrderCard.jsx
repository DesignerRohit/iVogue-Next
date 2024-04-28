import Image from 'next/image'
import React from 'react'

const OrderCard = ({image,quantity,discountedPrice,title,type}) => {
  return (
    <div className="d-flex justify-content-between align-items-center my-8">
    <div className="d-flex align-items-center gap-3 text-nowrap row">
       <div className="row">
        <div className="col-lg-2">
        <div className="bg-light-emphasis">
        <Image
          src={image}
          alt="image"
          className="img-fluid"
        />
      </div>
        </div>
        <div className="col-lg-10 d-flex align-items-center ">
        <div className="d-flex flex-column gap-0">
        <p className="mb-0 fs-6 fw-bold text-black text-uppercase">
          {`${type} For ${title}`}
        </p>
        <div className="d-flex gap-1">
          <span className="fs-4 text-black">QTY :</span>
          <span className="fs-4 text-black">{quantity}</span>
        </div>
         </div>
        </div>
       </div>

    </div>
    <span className="fs-6 fw-bold text-black">{`Rs.${quantity*discountedPrice}`}</span>
  </div>
  )
}

export default OrderCard
