"use client"
import React from 'react'
import Image from 'next/image'
import img1 from "/public/images/homepage/imgtext.png";
const ImageText = () => {
    return (
        <>
            <div className='container bg-primary-subtle'>

                <div className='row position-relative d-flex align-items-center'>
                    <div className='col-md-7'>
                        <div className='p-4'>
                            <h5 className='fs-5'>iPhone XR</h5>
                            <h2 className='fs-11'>Case Cover For Phones</h2>
                            <p className='fs-5'>Seize for your phone, accessories that just click. Stride 2.0 Phone Case Cover can be one such accessory for you! An upgradation of dependable protection coupled with uncompromised style, this new Case Cover offers supreme protection and is definitely the right choice for your vibe and style.</p>
                            <button className="btn btn-primary px-8 py-2 mt-3">Shop now</button>
                        </div>
                    </div>
                    <div className='col-md-5 pe-0'>
                        <div className='d-flex justify-content-end pt-5'>
                            <Image
                                src={img1}
                                alt="img"
                                style={{ height: "500px", width: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ImageText
