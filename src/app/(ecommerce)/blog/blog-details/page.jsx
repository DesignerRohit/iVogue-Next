"use client"
import Newsletter from '@/app/Components/HeroSection/Newsletter'
import React from 'react'
import Image from 'next/image'
import img1 from "/public/images/blog/blog-details.png";
import Link from 'next/link';
import { Icon } from '@iconify/react';

const BlogDetails = () => {
    return (
        <>
            <div className='py-12'>
                <div className='container'>
                    <h2 className='text-center fs-10 fw-semibold '>Blog </h2>
                    <p className='text-center fs-4'>
                        Keep yourself updated on the recent trends and helpful tips on eco-friendly bags and sustainable living. Learn from them and spread the awareness to people around to be more eco-conscious.</p>
                    <div className='d-flex  justify-content-between mt-14'>
                        <div>
                            <h4 className='fs-8'>Lorem ipsum dolor sit amet consectetur.</h4>
                            <p className='fs-26'>November 15, 2022</p>
                        </div>
                        <div>
                            <select className="form-select rounded-0 mb-3  border-muted text-muted fs-5" style={{ minWidth: "250px", height:'50px' }} aria-label=".form-select-lg example">
                                <option selected>Archive</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <hr className='mt-4' />
                    <p className='mt-5'>
                        Lorem ipsum dolor sit amet consectetur. A morbi augue nibh eget. Eget ac elementum porta felis tempor interdum. Aliquam faucibus aliquam orci sem proin turpis ornare vulputate. Elit blandit neque mi facilisis. Nulla ut dignissim morbi nibh scelerisque.
                        Tellus elit elit congue non tellus quisque at pharetra. Diam vivamus duis neque sapien faucibus mauris nibh aliquam. Iaculis integer eu pellentesque congue tellus leo. Bibendum rutrum massa auctor eu. Ac tincidunt ultrices ipsum velit a habitant a eget viverra. Mauris quis porttitor quis odio pharetra pellentesque tortor
                    </p>
                    <h3 className='fs-8 mt-5'>Lorem ipsum dolor sit amet consectetur.</h3>
                    <p >
                        Lorem ipsum dolor sit amet consectetur. A morbi augue nibh eget. Eget ac elementum porta felis tempor interdum. Aliquam faucibus aliquam orci sem proin turpis ornare vulputate. Elit blandit neque mi facilisis. Nulla ut dignissim morbi nibh scelerisque.
                        Tellus elit elit congue non tellus quisque at pharetra. Diam vivamus duis neque sapien faucibus mauris nibh aliquam. Iaculis integer eu pellentesque congue tellus leo. Bibendum rutrum massa auctor eu. Ac tincidunt ultrices ipsum velit a habitant a eget viverra. Mauris quis porttitor quis odio pharetra pellentesque tortor
                    </p>
                    <Image
                        src={img1}
                        alt="img"
                        style={{ width: "100%", height: "auto" }}
                        className='my-8'
                    />
                    <h3 className='fs-8 mt-5'>Lorem ipsum dolor sit amet consectetur.</h3>
                    <p >
                        Lorem ipsum dolor sit amet consectetur. A morbi augue nibh eget. Eget ac elementum porta felis tempor interdum. Aliquam faucibus aliquam orci sem proin turpis ornare vulputate. Elit blandit neque mi facilisis. Nulla ut dignissim morbi nibh scelerisque.
                        Tellus elit elit congue non tellus quisque at pharetra. Diam vivamus duis neque sapien faucibus mauris nibh aliquam. Iaculis integer eu pellentesque congue tellus leo. Bibendum rutrum massa auctor eu. Ac tincidunt ultrices ipsum velit a habitant a eget viverra. Mauris quis porttitor quis odio pharetra pellentesque tortor
                    </p>
                    <ul className='d-flex flex-column ps-3 gap-3'>
                        <li>
                        Lorem ipsum
                        </li>
                        <li>
                        Lorem ipsum
                        </li>
                        <li>
                        Lorem ipsum
                        </li>
                        <li>
                        Lorem ipsum
                        </li>
                        <li>
                        Lorem ipsum
                        </li>
                        <li>
                        Lorem ipsum
                        </li>
                        <li>
                        Lorem ipsum
                        </li>

                        <li>
                        Lorem ipsum
                        </li>
                        <li>
                        Lorem ipsum
                        </li>
                        <li>
                        Lorem ipsum
                        </li>
                    </ul>
                    <h3 className='fs-8 mt-5'>Lorem ipsum dolor sit amet consectetur.</h3>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet consectetur. A morbi augue nibh eget. Eget ac elementum porta felis tempor interdum. Aliquam faucibus aliquam orci sem proin turpis ornare vulputate. Elit blandit neque mi facilisis. Nulla ut dignissim morbi nibh scelerisque.
                        Tellus elit elit congue non tellus quisque at pharetra. Diam vivamus duis neque sapien faucibus mauris nibh aliquam. Iaculis integer eu pellentesque congue tellus leo. Bibendum rutrum massa auctor eu. Ac tincidunt ultrices ipsum velit a habitant a eget viverra. Mauris quis porttitor quis odio pharetra pellentesque tortor
                    </p>
                    <h6 className='fs-6'>Thanks for reading,</h6>
                    <h6  className='fs-6 mb-3'>phonix</h6>
                    <p><strong>Categories</strong>:Lorem ipsum dolor sit amet consectetur. A morbi augue nibh eget.</p>
                    <p><Link href={'/'}><Icon icon='tabler:arrow-narrow-left' className='text-black me-2' height={20} /></Link>Lorem ipsum dolor sit amet consectetur. A morbi augue nibh eget</p>
                    <div className='d-flex gap-2 mt-4'>
                    <Link href={'/'} className='btn bg-primary-subtle text-dark'><Icon icon='ri:facebook-fill'  className='me-2 ' height={18} />Share on Facebook</Link>
                    <Link href={'/'} className='btn bg-secondary-subtle text-dark'><Icon icon='ri:twitter-fill' className=' me-2' height={18} />Share on Twitter</Link>
                    </div>
                </div>
            </div >
            <Newsletter />
        </>
    )
}

export default BlogDetails
