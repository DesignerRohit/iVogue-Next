"use client"
import React from 'react'
import Image from 'next/image'
import { BlogData } from '@/api/homepage/homepage'
import Link from 'next/link'
import { Icon } from '@iconify/react'
const LatestBlog = () => {
    return (
        <>
            <div className='py-sm-12 py-6'>
                <div className='container'>
                    <div className='d-flex justify-content-between align-items-center mb-sm-5 mb-4'>
                        <h2 className='text-center fs-8 fw-semibold '>Latest Blog</h2>
                        <button className="btn btn-primary px-sm-10 py-2">View All</button>
                    </div>

                    <div className='row'>
                        {BlogData.map((blog) => {
                            return (
                                <div className="col-md-4 col-sm-12 mb-sm-0 mb-6"  key={blog.key}>
                                    <div className='border p-4'>
                                        <Link href={blog.link} className='text-decoration-none' >
                                            <div className='overflow-hidden hover-img '>
                                                <Image
                                                    src={blog.img}
                                                    alt="img"
                                                    style={{ width: "100%", height: "auto", maxHeight: "230px" }}
                                                />
                                            </div>
                                            <div className='d-flex gap-2 justify-content-between text-decoration-none pt-4 '>
                                                <h3 className='mb-0 fw-bold text-black hover-link'>{blog.title}</h3>
                                                <Icon icon='carbon:arrow-up-right' className=' fs-8 text-black hover-link' />
                                            </div>
                                        </Link>

                                        <p className='fs-4 fw-normal pt-3 text-dark-light'>{blog.desc}</p>
                                        <small className='fs-3 fw-normal text-muted'>{blog.date}</small>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </div >
        </>
    )
}

export default LatestBlog
