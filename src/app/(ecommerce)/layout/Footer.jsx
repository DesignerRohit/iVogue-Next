"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import chat from "/public/images/svgs/chat-box.svg"
import { Company, Products } from '@/api/navigation/footernav'
import Link from 'next/link'
import { Icon } from '@iconify/react'
const Footer = () => {
  const [baseurl, setbaseurl] = useState();
  useEffect(() => {
    const url = window.location.origin;
    setbaseurl(url);
  }, [])
  return (
    <>
      <div className='py-sm-12 py-9 bg-indigo mt-0'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-12 text-sm-start text-center'>
              <Link href={'/'} className='text-decoration-none'>
                {/* <Image src={logo} alt='image' /> */}
                <h3 className='fs-9 text-white '>
                  LOGO NAME
                </h3>
              </Link>
              <p className='fs-4 text-white mt-lg-5 mt-3 mb-lg-0 mb-5 opacity-75 pe-md-10'>
                Lorem ipsum dolor sit amet consectetur. Fusce sit ipsum hac volutpat donec. Donec ut vivamus dui mauris malesuada justo. Pellentesque neque purus mattis ultricies at blandit aliquet nunc.
              </p>
            </div>
            <div className='col-lg-8 col-12'>
              <div className='row'>
                <div className='col-md-4 pe-md-16 text-sm-start text-center'>
                  <h4 className='text-white fs-22 pb-2 mb-0'>Company</h4>
                  <hr className='w-50 mt-0 mb-sm-4 mb-3 border-top-2 border-2 border-primary mx-md-0 mx-auto'></hr>
                  <ul className='footer-links d-flex flex-column gap-sm-4 gap-3 list-unstyled mb-0 ms-auto mb-md-0 mb-7'>
                    {Company.map((nav_link) => {
                      return (
                        <li key={nav_link.key} className='fs-5 fw-light' ><Link href={nav_link.href} as={`${baseurl}/${nav_link.href}`} className='text-decoration-none fw-light text-white'>{nav_link.label}</Link></li>
                      )
                    })}
                  </ul>
                </div>
                <div className='col-md-4 text-sm-start text-center'>
                  <h4 className='text-white fs-22 pb-2 mb-0'>Products</h4>
                  <hr className='w-50 mt-0 mb-sm-4 mb-3 border-top-2 border-2 border-primary  mx-md-0 mx-auto'></hr>
                  <ul className='footer-links d-flex flex-column gap-sm-4 gap-3 list-unstyled mb-0 ms-auto  mb-md-0 mb-7'>
                    {Products.map((nav_link) => {
                      return (
                        <li key={nav_link.key} className='fs-5 fw-light' ><Link href={nav_link.href} as={`${baseurl}/${nav_link.href}`} className='text-decoration-none fw-light text-white'>{nav_link.label}</Link></li>
                      )
                    })}
                  </ul>
                </div>
                <div className='col-md-4 text-sm-start text-center'>
                  <h4 className='text-white fs-22 pb-2 mb-0'>Info</h4>
                  <hr className='w-50 mt-0 mb-sm-4 mb-3 border-top-2 border-2 border-primary  mx-md-0 mx-auto '></hr>
                  <ul className=' d-flex flex-column gap-sm-4 gap-3 list-unstyled mb-0 ms-auto mb-0'>
                    <li className='fw-light text-white fs-5'>0000-0000-000</li>
                    <li className='fw-light text-white fs-5'> xyz@logoname.com</li>
                    <li className='fw-light text-white fs-5'>456 Sunshine Avenue Palm City New Delhi, India 110001</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom bg-purple py-3'>
        <div className='container py-3'>
          <div className='row align-items-center'>
            <div className='col-lg-4 text-lg-start text-center'>
              <ul className='mb-0 list-unstyled d-flex justify-content-lg-start justify-content-center gap-5'>
                <li><Link href={"/"}><Icon icon='ri:facebook-fill' className='text-white' height={25} /></Link></li>
                <li><Link href={"/"}><Icon icon='ri:instagram-line' className='text-white' height={25} /></Link></li>
                <li><Link href={"/"}><Icon icon='ri:linkedin-fill' className='text-white' height={25} /></Link></li>
                <li><Link href={"/"}><Icon icon='ri:twitter-fill' className='text-white' height={25} /></Link></li>
                <li><Link href={"/"}><Icon icon='ri:youtube-fill' className='text-white' height={25} /></Link></li>
              </ul>
            </div>
            <div className='col-lg-4 text-center my-lg-0 my-4'>
              <p className='mb-0 text-white fw-light '>Copyright © ---------- — 2024. All rights reserved</p>
            </div>
            <div className='col-lg-4 text-end'>
              <Link href={'/'} className='rounded-pill bg-lightpink py-2 ps-3 text-white fw-medium text-decoration-none'>Go to Top
                <span className='rounded-circle bg-primary py-2 px-1 ms-3'><Icon icon='ri:arrow-up-s-line' className='text-white' height={25} /></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Chat Button */}
      <Link href={'/'} className='rounded-circle bg-primary ms-3 position-fixed chat-icon d-flex align-items-center justify-content-center cursor-pointer'>
        <Image src={chat} alt='image' />
      </Link>
    </>
  )
}

export default Footer
