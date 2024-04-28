"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from "/public/images/logo.png"
import { NAV_LINKS } from '@/api/navigation/navigation'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { usePathname } from 'next/navigation'
import { useProduct } from '@/store/CartProvider/CartData'
import CartCanvas from './CardCanvas'

const Header = () => {
  const [baseurl, setbaseurl] = useState();
  const pathname = usePathname();
  const productContext = useProduct();
  const items = productContext.cartvalue.length;
  useEffect(() => {
    const url = window.location.origin;
    setbaseurl(url);
  }, [])
  return (
    <>
      <div className="border-bottom border-2">
        <div className="container">
          <div className=' bg-white d-flex justify-content-between align-items-center py-3'>
            <Link href={'/'}><Image src={logo} alt='image' /></Link>
            <ul className='d-flex gap-5 list-unstyled mb-0 ms-auto d-lg-flex d-none'>
              {NAV_LINKS.map((nav_link) => {
                return (
                  <li key={nav_link.key} className='fs-5 font-normal' ><Link href={nav_link.href} as={`${baseurl}/${nav_link.href}`} className={`text-decoration-none fw-normal ${pathname.includes(nav_link.href) ? 'text-primary' : ''}`}>{nav_link.label}</Link></li>
                )
              })}
            </ul>
            <div className="d-flex align-items-center ms-auto gap-5">
              <form className='ps-2 border border-light-gray rounded-2 position-relative d-lg-flex align-items-center d-none'>
                <Icon icon='bitcoin-icons:search-outline' className='text-muted fs-8' />
                <input type="search" className="form-control ps-2 py-2 fw-light fs-4 border-0 shadow-none " id="exampleFormControlInput1" placeholder="Search for Products, brands and more..." />
              </form>
              <div className="d-flex gap-7">
                <Link href="/" className='text-black hover-link'><Icon icon="tabler:user" fontSize={25} /></Link>
                <Link  className='text-black hover-link position-relative' data-bs-toggle="offcanvas" href="#Cartoffcanvas" role="button" aria-controls="Cartoffcanvas">
                  <Icon icon="tabler:shopping-cart" fontSize={25}  />
                  {items === 0 ? null : <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle  bg-black">
                    {items}
                  </span>}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Call Cart Canvas From right side */}
      <CartCanvas/>
    </>
  )
}

export default Header
