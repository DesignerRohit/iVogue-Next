import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'
import user from "../../../../public/images/product-review/review-user.png"

const ProductReviews = () => {
  return (
    <>
      <div className="container my-52">
        <div className="d-flex justify-content-between align-items-center mb-54">
        <h2 className='text-black fs-54 fw-bold letter text-center mb-0'>Customer Reviews</h2>
        <button className='btn btn-primary rounded-0 py-3 px-10 fw-semibold  fs-5 '>Write A Review</button>
        </div>
        <div className="row  ">
          <div className="col-lg-4 d-flex align-items-stretch ">
            <div className="review-rating px-9 text-center d-flex align-items-center ">
              <div className='d-flex flex-column gap-3'>
              <div className="d-flex justify-content-center ">
                <Icon icon='material-symbols-light:star-outline' className='text-primary fs-54' />
                <Icon icon='material-symbols-light:star-outline' className='text-primary fs-54' />
                <Icon icon='material-symbols-light:star-outline' className='text-primary fs-54' />
                <Icon icon='material-symbols-light:star-outline' className='text-primary fs-54' />
                <Icon icon='material-symbols-light:star-outline' className='text-primary fs-54' />
               </div>
               <p className='fw-normal text-indigo fs-55 mb-0 lh-sm'>DailyObjects Legendary Logos Stride 2.0 Case Cover For</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
               <div className="bg-light-primary border border-b-2 border-white py-7 px-5 rounded-top-3">
                <p className='mb-0 text-gray-emphasis fw-normal fs-5 lh-sm'>Lorem ipsum dolor sit amet consectetur. Urna pretium nullam id tincidunt iaculis enim augue mauris. Eget arcu habitant sed ut sed posuere ac. Habitant pulvinar fringilla tristique auctor laoreet. Sed ligula et feugiat hac sed orci id.</p>
               </div>
               <div className="d-flex py-13 px-5 bg-light-primary rounded-bottom-3 align-items-center align-items-center  justify-content-between  ">
                  <div className="d-flex align-items-center gap-2">
                  <div className="round-35 fs-6 fw-bold text-white d-flex justify-content-center align-items-center ">
                  B
                </div>
                <div className="d-flex flex-column ">
                  <h3 className='fs-6 fw-bold text-primary mb-0 lh-1'>Barry Brett</h3>
                  <span className='fw-bold fs-4 text-gray-emphasis lh-1'>a week ago</span>
                </div>
                  </div>
                     <div className="align-self-center">
                     <button className='btn btn-primary rounded-0 align-self-center d-flex ps-3 pe-7 align-items-center border-0 border-indigo  border-3 border-bottom '>
                    <Icon icon='material-symbols-light:star' className='text-white fs-6' />
                    <span className='fs-3 align-self-center position-relative'>5</span>
                    </button>
                     </div>
               </div>
          </div>
          <div className="col-lg-4">
               <div className="bg-light-primary border border-b-2 border-white py-7 px-5 rounded-top-3">
                <p className='mb-0 text-gray-emphasis fw-normal fs-5 lh-sm'>Lorem ipsum dolor sit amet consectetur. Urna pretium nullam id tincidunt iaculis enim augue mauris. Eget arcu habitant sed ut sed posuere ac. Habitant pulvinar fringilla tristique auctor laoreet. Sed ligula et feugiat hac sed orci id.</p>
               </div>
               <div className="d-flex py-13 px-5 bg-light-primary rounded-bottom-3 align-items-center align-items-center  justify-content-between  ">
                  <div className="d-flex align-items-center gap-2">
                  <Image src={user} className='img-fluid' alt="image rounded-circle" />
                <div className="d-flex flex-column ">
                  <h3 className='fs-6 fw-bold text-primary mb-0 lh-1'>Paul Bishop</h3>
                  <span className='fw-bold fs-4 text-gray-emphasis lh-1'>a week ago</span>
                </div>
                  </div>
                     <div className="align-self-center">
                     <button className='btn btn-primary rounded-0 align-self-center d-flex ps-3 pe-7 align-items-center border-0 border-indigo  border-3 border-bottom '>
                    <Icon icon='material-symbols-light:star' className='text-white fs-6' />
                    <span className='fs-3 align-self-center position-relative'>5</span>
                    </button>
                     </div>
               </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductReviews
