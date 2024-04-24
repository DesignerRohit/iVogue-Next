"use client"
import React from 'react'
import Image from 'next/image'
import { BlogData } from '@/api/blog/blogpost'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Newsletter from '@/app/Components/HeroSection/Newsletter'
const LatestBlog = () => {
    return (
        <>
            <div className='py-12'>
                <div className='container'>
                    <h2 className='text-center fs-8 fw-semibold mb-8'>Latest Blog</h2>
                    <div className='row'>
                        {BlogData.map((blog) => {
                            return (
                                <div className="col-md-4 col-sm-12 mb-7" key={blog.key}>
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
            <Newsletter/>
        </>
    )
}

export default LatestBlog
