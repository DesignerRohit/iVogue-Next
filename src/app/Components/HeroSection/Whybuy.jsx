import React from 'react'
import Image from 'next/image'
import { Whybuydata } from '@/api/homepage/homepage'
const WhyBuy = () => {
    return (
        <>
            <div className='py-sm-12 py-7'>
                <div className='container'>
                    <h2 className='text-center fs-8 fw-semibold mb-5'>Why buy on the iVogue.</h2>
                    <div className='row' >
                    {Whybuydata.map((WhyBuy) => {
                      return (
                        <div className="col-lg-4 mb-lg-0 mb-6" key={WhyBuy.key}>
                            <div className='bg-gray p-sm-8 p-4'>
                                <div className='row d-flex align-items-center px-2'>
                                    <div className='col-4 border-end py-4'>
                                        <Image
                                            src={WhyBuy.img}
                                            alt="img"
                                            style={{ width: "65px",height:"65px"}}
                                        />
                                    </div>
                                    <div className='col-8 ps-4'>
                                        <h2 className='mb-0 text-dark-light fs-7 fw-normal ms-2'>{WhyBuy.title}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                         )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyBuy
