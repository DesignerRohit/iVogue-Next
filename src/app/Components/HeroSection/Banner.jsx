import React from 'react'
import Image from 'next/image'
import img1 from "../../../../public/images/homepage/mobile.png";

const Banner = () => {
  return (
    <>
     <div className='bg-primary-subtle pt-9'>
        <div className='text-center '>
            <h1 className='fw-bolder fs-14 text-dark mb-0 lh-1'>iPhone 15 Pro Max</h1>
            <p className='fw-bolder fs-10 text-dark'>Cases Villa 360° Protection Case 9H </p>
            <button className='btn btn-primary px-8 py-2 mt-3'>Shop now</button>
            <div>
            <Image
                src={img1}
                alt="img"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            
        </div>
     </div>
    </>
  )
}

export default Banner
