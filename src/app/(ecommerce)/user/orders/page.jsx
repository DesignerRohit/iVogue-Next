"use client"
import { Icon } from '@iconify/react'
import React from 'react'
import phone from '/public/images/orders/phone.jpg'
import Image from 'next/image'

const Orders = () => {
  return (
    <>
      <div className="container">
         <h2 className='fs-7 fw-bold text-dark py-10 text-center border-bottom border-3'>Account holder Name</h2>
         <div className="d-flex justify-content-between align-items-center my-10">
          <div className="d-flex flex-column gap-1">
            <h3 className='fs-8 fw-bold lh-1'>All orders</h3>
            <span className='fs-6 fw-normal text-dark lh-1 text-capitalize '>from anytime</span>
          </div>
          <div className="d-flex gap-7">
          <form className='ps-2 border border-light-gray rounded-2 position-relative d-flex align-items-center '>
              <Icon icon='bitcoin-icons:search-outline' className='text-muted fs-8' />
              <input type="search" className="form-control ps-2 py-2 fw-light fs-4 border-0 shadow-none " id="exampleFormControlInput1" placeholder="Search for Products, brands and more..." />
            </form>
            <div className="filter-btn d-flex justify-content-center  align-items-center gap-2 bg-light-gray px-3 py-2">
                <Icon icon='lets-icons:filter' className='text-dark fs-52' />
                <span className='fs-6 text-dark fw-normal'>FILTER</span>
            </div>
          </div>
         </div>
         <div className="row gy-4 mb-52">
            <div className="col-lg-6">
            <div className=" d-flex flex-column py-4 bg-light-primary">
            <div className="d-flex gap-2 align-items-center text-black px-3">
             <Icon icon='majesticons:box-line' className='fs-52' />
             <span className='fs-6 fw-bold text-primary lh-1'>Delivered</span>
            </div>
            <div className="d-flex flex-column px-9">
             <span className='fs-3 fw-normal text-dark mt-0 mb-7'>On Wed, 26 Apr 2023</span>
             <div className="d-flex justify-content-between align-items-center delivered-card">
              <div className="d-flex gap-3 align-items-center ">
                <Image src={phone} alt='image' className='img-fluid bg-white' />
                <div className="d-flex flex-column gap-6">
                <h5 className='fs-5 mb-0 text-black fw-bold lh-1'>iPhone 15 Plus MagSafe Hybrid case</h5>
                <span className='fs-3 fw-normal text-black lh-1'>iPhone 15 Plus MagSafe Hybrid case</span>
                <span className='fs-3 fw-normal text-black lh-1'>Color : Blue</span>
              </div>
              </div>
               <Icon icon='f7:chevron-right' className='fs-8 text-black' />
             </div>
             <p className=' text-grayextra fs-3 fw-normal my-13 mb-2 d-flex gap-2 align-items-center '> <span className='round-6 bg-grayextra'></span> Exchange/Return window closed on Mon, 15 May 2023</p>
             <div className="d-flex gap-2 align-items-center ">
             <p className='mb-0 text-grayextra fs-3 fw-normal '>Rate Product</p>
             <div className="d-flex">
                <Icon icon='system-uicons:star' className='fs-4 text-grayextra' />
                <Icon icon='system-uicons:star' className='fs-4 text-grayextra' />
                <Icon icon='system-uicons:star' className='fs-4 text-grayextra' />
                <Icon icon='system-uicons:star' className='fs-4 text-grayextra' />
                <Icon icon='system-uicons:star' className='fs-4 text-grayextra' />
             </div>
             </div>
            </div>
         </div> 
            </div>
            <div className="col-lg-6">
            <div className=" d-flex flex-column py-4 bg-light-primary">
            <div className="d-flex gap-2 align-items-center text-black px-3">
             <Icon icon='majesticons:box-line' className='fs-52' />
             <span className='fs-6 fw-bold text-primary lh-1'>Delivered</span>
            </div>
            <div className="d-flex flex-column px-9">
             <span className='fs-3 fw-normal text-dark mt-0 mb-7'>On Wed, 26 Apr 2023</span>
             <div className="d-flex justify-content-between align-items-center delivered-card">
              <div className="d-flex gap-3 align-items-center ">
                <Image src={phone} alt='image' className='img-fluid bg-white' />
                <div className="d-flex flex-column gap-6">
                <h5 className='fs-5 mb-0 text-black fw-bold lh-1'>iPhone 15 Plus MagSafe Hybrid case</h5>
                <span className='fs-3 fw-normal text-black lh-1'>iPhone 15 Plus MagSafe Hybrid case</span>
                <span className='fs-3 fw-normal text-black lh-1'>Color : Blue</span>
              </div>
              </div>
               <Icon icon='f7:chevron-right' className='fs-8 text-black' />
             </div>
             <p className=' text-grayextra fs-3 fw-normal my-13 mb-2 d-flex gap-2 align-items-center '> <span className='round-6 bg-grayextra'></span> Exchange/Return window closed on Mon, 15 May 2023</p>
             <div className="d-flex gap-2 align-items-center ">
             <p className='mb-0 text-grayextra fs-3 fw-normal '>Rate Product</p>
             <div className="d-flex">
                <Icon icon='system-uicons:star' className='fs-4 text-grayextra' />
                <Icon icon='system-uicons:star' className='fs-4 text-grayextra' />
                <Icon icon='system-uicons:star' className='fs-4 text-grayextra' />
                <Icon icon='system-uicons:star' className='fs-4 text-grayextra' />
                <Icon icon='system-uicons:star' className='fs-4 text-grayextra' />
             </div>
             </div>
            </div>
         </div> 
            </div>
            <div className="col-lg-6">
            <div className=" d-flex flex-column py-4 bg-light-primary">
            <div className="d-flex gap-2 align-items-center text-black px-3">
             <Icon icon='majesticons:box-line' className='fs-52' />
             <span className='fs-6 fw-bold text-primary lh-1'>Delivered</span>
            </div>
            <div className="d-flex flex-column px-9">
             <span className='fs-3 fw-normal text-dark mt-0 mb-7'>On Wed, 26 Apr 2023</span>
             <div className="d-flex justify-content-between align-items-center delivered-card">
              <div className="d-flex gap-3 align-items-center ">
                <Image src={phone} alt='image' className='img-fluid bg-white' />
                <div className="d-flex flex-column gap-6">
                <h5 className='fs-5 mb-0 text-black fw-bold lh-1'>iPhone 15 Plus MagSafe Hybrid case</h5>
                <span className='fs-3 fw-normal text-black lh-1'>iPhone 15 Plus MagSafe Hybrid case</span>
                <span className='fs-3 fw-normal text-black lh-1'>Color : Blue</span>
              </div>
              </div>
               <Icon icon='f7:chevron-right' className='fs-8 text-black' />
             </div>
             <p className=' text-grayextra fs-3 fw-normal my-13 mb-2 d-flex gap-2 align-items-center '> <span className='round-6 bg-grayextra'></span> Exchange/Return window closed on Mon, 15 May 2023</p>
             <div className="d-flex gap-2 align-items-center ">
             <p className='mb-0 text-grayextra fs-3 fw-normal '>Rate Product</p>
             <div className="d-flex">
                <Icon icon='system-uicons:star' className='fs-4 text-grayextra' />
                <Icon icon='system-uicons:star' className='fs-4 text-grayextra' />
                <Icon icon='system-uicons:star' className='fs-4 text-grayextra' />
                <Icon icon='system-uicons:star' className='fs-4 text-grayextra' />
                <Icon icon='system-uicons:star' className='fs-4 text-grayextra' />
             </div>
             </div>
            </div>
         </div> 
            </div>
            <div className="col-lg-6">
            <div className=" d-flex flex-column py-4 bg-light-primary">
            <div className="d-flex gap-2 align-items-center text-black px-3">
             <Icon icon='majesticons:box-line' className='fs-52' />
             <span className='fs-6 fw-bold text-primary lh-1'>Delivered</span>
            </div>
            <div className="d-flex flex-column px-9">
             <span className='fs-3 fw-normal text-dark mt-0 mb-7'>On Wed, 26 Apr 2023</span>
             <div className="d-flex justify-content-between align-items-center delivered-card">
              <div className="d-flex gap-3 align-items-center ">
                <Image src={phone} alt='image' className='img-fluid bg-white' />
                <div className="d-flex flex-column gap-6">
                <h5 className='fs-5 mb-0 text-black fw-bold lh-1'>iPhone 15 Plus MagSafe Hybrid case</h5>
                <span className='fs-3 fw-normal text-black lh-1'>iPhone 15 Plus MagSafe Hybrid case</span>
                <span className='fs-3 fw-normal text-black lh-1'>Color : Blue</span>
              </div>
              </div>
               <Icon icon='f7:chevron-right' className='fs-8 text-black' />
             </div>
             <p className=' text-grayextra fs-3 fw-normal my-13 mb-2 d-flex gap-2 align-items-center '> <span className='round-6 bg-grayextra'></span> Exchange/Return window closed on Mon, 15 May 2023</p>
             <div className="d-flex gap-2 align-items-center ">
             <p className='mb-0 text-grayextra fs-3 fw-normal '>Rate Product</p>
             <div className="d-flex">
                <Icon icon='system-uicons:star' className='fs-4 text-grayextra' />
                <Icon icon='system-uicons:star' className='fs-4 text-grayextra' />
                <Icon icon='system-uicons:star' className='fs-4 text-grayextra' />
                <Icon icon='system-uicons:star' className='fs-4 text-grayextra' />
                <Icon icon='system-uicons:star' className='fs-4 text-grayextra' />
             </div>
             </div>
            </div>
         </div> 
            </div>
         </div>

      </div>

    </>
  )
}

export default Orders
