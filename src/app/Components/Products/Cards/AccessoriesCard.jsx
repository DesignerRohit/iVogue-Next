import Image from 'next/image'
import React from 'react'

const AccessoriesCard = ({image,price}) => {
  return (
    <>
              <div className='position-relative p-6'>
          <Image src={image} alt="image" className="img-fluid" />
          <div className="row justify-content-between ">
           <div className="col-lg-8">
           <span className="text-dark-light fs-5">Orange Crossbody Phone Lanyard - Cord</span>
           </div>
            <div className="col-lg-4">
            <span className="text-dark-light fw-bold fs-6">{`Rs.${price}`}</span>
            </div>
          </div>
          <div className="d-flex gap-6 mt-3">
            <div className="round-25 bg-warning border border-2 border-subtle-dark"></div>
            <div className="round-25 bg-danger "></div>
            <div className="round-25 bg-dark "></div>
            <div className="round-25 bg-brown "></div>
            <div className="round-25 bg-success "></div>
          </div>
          <input className="form-check-input position-absolute top-0 right-0" type="checkbox" value="" id="flexCheckDefault"></input>
        </div>
    </>
  )
}

export default AccessoriesCard
