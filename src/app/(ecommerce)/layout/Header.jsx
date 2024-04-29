"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from "/public/images/logo.png"
import { NAV_LINKS } from '@/api/navigation/navigation'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { usePathname } from 'next/navigation'
import { useProduct } from '@/store/CartProvider/CartData'
import CartCanvas from '@/app/Components/HeroSection/CartCanvas'

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
          <div className='bg-white d-flex justify-content-between align-items-center py-3'>
            <div className='d-flex gap-sm-4 gap-3'>
              <Link href={"#menucanvasExample"} className="d-xl-none d-flex text-black" data-bs-toggle="offcanvas"  role="button" aria-controls="menucanvasExample">
                <Icon icon="tabler:menu-2" fontSize={25} />
              </Link>
              <Link href={"#"} className="d-xl-none d-flex text-black" data-bs-toggle="modal" data-bs-target="#searchModal">
                <Icon icon="tabler:search" fontSize={25} />
              </Link>
            </div>
            <Link href={'/'}><Image src={logo} alt='image' /></Link>

            {/* Mobile Menu  */}
            <div className="offcanvas offcanvas-end bg-primary" tabIndex="-1" id="menucanvasExample" aria-labelledby="menucanvasExampleLabel">
              <div className="offcanvas-header ">

                <Link href={'#'} type="button" className="text-white ms-auto" data-bs-dismiss="offcanvas" aria-label="Close">
                  <Icon icon="tabler:circle-x" fontSize={25} />
                </Link>
              </div>
              <div className="offcanvas-body px-7">
                <ul className='list-unstyled mb-0 ms-auto'>
                  {NAV_LINKS.map((nav_link) => {
                    return (
                      <li key={nav_link.key} className='fs-5 font-normal mb-8' ><Link href={nav_link.href} as={`${baseurl}/${nav_link.href}`} className={`text-decoration-none fw-light ${pathname.includes(nav_link.href) ? 'text-warning' : ''}`}>{nav_link.label}</Link></li>
                    )
                  })}
                </ul>

                <ul className='mb-0 list-unstyled d-flex gap-4 border-top pt-4'>
                  <li><Link href={"/"}><Icon icon='ri:facebook-fill' className='text-white' height={25} /></Link></li>
                  <li><Link href={"/"}><Icon icon='ri:instagram-line' className='text-white' height={25} /></Link></li>
                  <li><Link href={"/"}><Icon icon='ri:linkedin-fill' className='text-white' height={25} /></Link></li>
                  <li><Link href={"/"}><Icon icon='ri:twitter-fill' className='text-white' height={25} /></Link></li>
                  <li><Link href={"/"}><Icon icon='ri:youtube-fill' className='text-white' height={25} /></Link></li>
                </ul>

              </div>
            </div>

            {/* Desktop Menu  */}
            <ul className='d-flex gap-5 list-unstyled mb-0 ms-auto d-xl-flex d-none'>
              {NAV_LINKS.map((nav_link) => {
                return (
                  <li key={nav_link.key} className='fs-5 font-normal' ><Link href={nav_link.href} as={`${baseurl}/${nav_link.href}`} className={`text-decoration-none fw-normal ${pathname.includes(nav_link.href) ? 'text-primary' : ''}`}>{nav_link.label}</Link></li>
                )
              })}
            </ul>
            <div className="d-flex align-items-center ms-xl-auto gap-5">
              <form className='ps-2 border border-light-gray rounded-2 position-relative d-xl-flex align-items-center d-none'>
                <Icon icon='bitcoin-icons:search-outline' className='text-muted fs-8' />
                <input type="search" className="form-control ps-2 py-2 fw-light fs-4 border-0 shadow-none " id="exampleFormControlInput1" placeholder="Search for Products, brands and more..." />
              </form>

              {/* Search Modal */}
              <div class="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
                <div class="modal-dialog  m-0 max-w-100 modal-xl">
                  <div class="modal-content rounded-0">
                    <div class="modal-body">
                      <form className='ps-2 border border-light-gray rounded-2 position-relative d-flex align-items-center'>
                        <Icon icon='bitcoin-icons:search-outline' className='text-muted fs-8' />
                        <input type="search" className="form-control ps-2 py-2 fw-light fs-4 border-0 shadow-none " id="exampleFormControlInput1" placeholder="Search for Products, brands and more..." />
                      </form>
                    </div>

                  </div>
                </div>
              </div>


              <div className="d-flex gap-sm-7 gap-3">
                <Link href="/" className='text-black hover-link'><Icon icon="tabler:user" fontSize={25} /></Link>
                <span className='text-black hover-link position-relative' data-bs-toggle="offcanvas" href="#Cartoffcanvas" role="button" aria-controls="Cartoffcanvas">
                  <Icon icon="tabler:shopping-cart" fontSize={25} />
                  {items === 0 ? null : <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle  bg-black">
                    {items}
                  </span>}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Call Cart Canvas From right side */}
      <CartCanvas />
    </>
  )
}

export default Header
