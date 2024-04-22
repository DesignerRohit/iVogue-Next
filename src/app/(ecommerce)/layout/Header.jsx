"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from "/public/images/logo.png"
import { NAV_LINKS } from '@/api/navigation/navigation'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const Header = () => {
  const [baseurl, setbaseurl] = useState();
  useEffect(() => {
    const url = window.location.origin;
    setbaseurl(url);
  }, [])
  return (
    <>
      <div className="container">
        <div className=' bg-white d-flex justify-content-between align-items-center py-3'>
          <Link href={'/'}><Image src={logo} alt='image' /></Link>
          <ul className='d-flex gap-5 list-unstyled mb-0 ms-auto'>
            {NAV_LINKS.map((nav_link) => {
              return (
                <li key={nav_link.key} className='fs-5 font-normal' ><Link href={nav_link.href} as={`${baseurl}/${nav_link.href}`} className='text-decoration-none fw-normal'>{nav_link.label}</Link></li>
              )
            })}
          </ul>
          <div className="d-flex align-items-center ms-auto gap-5">
            <form className='ps-2 border border-light-gray rounded-2 position-relative d-flex align-items-center '>
              <Icon icon='bitcoin-icons:search-outline' className='text-muted fs-8' />
              <input type="search" className="form-control ps-2 py-2 fw-light fs-4 border-0 shadow-none " id="exampleFormControlInput1" placeholder="Search for Products, brands and more..." />
            </form>
            <div className="d-flex gap-7">
            <Link href="/" className='text-black hover-link'><Icon icon="tabler:user" fontSize={25} /></Link>
              <Link href='#' className='text-black hover-link position-relative'>
              <Icon icon="tabler:shopping-cart" fontSize={25} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle  bg-black">
                1
              </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
