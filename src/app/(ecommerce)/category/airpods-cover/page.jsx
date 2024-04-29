"use client";

import React, { useReducer } from "react";
import { useEffect, useState } from "react";

import leather_img from "/public/images/leather_case.png";
import hard_img from "/public/images/hard_case.png";
import transparent_img from "/public/images/transparent_case.png";
import phone_img from "/public/images/phone-cases.png";
import MobileCoverCard from "@/app/Components/Products/Cards/ProductCard";
import { PRODUCTS } from "@/api/Products/products";
import { Icon } from "@iconify/react";
import Newsletter from "@/app/Components/HeroSection/Newsletter";
import CoverHeader from "../../../Components/MobileCovers/CoverHeader";
import CategoryItem from "@/app/Components/MobileCovers/CategoryItem";
import FilterBlock from "@/app/Components/MobileCovers/FilterBlock";
import CustomSkeleton from "@/app/Components/Skeleton/CustomSkeleton";
import Pagination from "@/app/Components/Products/Pagination";
import Link from "next/link";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useProduct } from "@/store/CartProvider/CartData";
import TemperedHeader from "@/app/Components/TemperedGlass/TemperedHeader";
import AirpodHeader from "@/app/Components/AirpodsCover/AirpodHeader";
import ProductCard from "@/app/Components/Products/Cards/ProductCard";





const AirpodsCover = () => {
      const ProductData = useProduct();
  const Airpods_Cases = ProductData.value.filter((prod)=>{
    return prod.mastercat==='Airpods';
  })
  const [airpods, setAirpods] = useState([]);

  const handleMobileCovers = () => {
    setAirpods(Airpods_Cases);
  };


  useEffect(() => {
    handleMobileCovers();
  }, []);
  return (
    <>
      <AirpodHeader />


      <div className="container">
        <div className="row">
          <div className="col-xl-3 d-xl-block d-none">
            <FilterBlock />
          </div>
          <div className="col-xl-9">
             <div className="d-flex justify-content-xl-end justify-content-between  mb-7 align-items-center ">
              <Link data-bs-toggle="offcanvas" href="#offcanvasExample" className="d-xl-none d-block"> 
              <Icon icon='mage:filter' className="text-black fs-9" />
              </Link>
              <div className="dropdown sort-parent-dropdown">
                <button
                  className="d-flex justify-content-between gap-51 py-lg-2 py-58 px-51 border border-2 border-subtle-dark pointer dropdown-toggle bg-white position-relative sort-dropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="fs-5  fw-normal text-black">
                    Sort By : to sellers
                  </span>
                  <Icon
                    icon="f7:chevron-right"
                    className="fs-53 text-black sort-icon"
                  />
                </button>
                <ul className="dropdown-menu top-0 w-100">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
             </div>
            <div className="row gy-4">
              {airpods.length == 0 ? (
                <CustomSkeleton />
              ) : (
                airpods.map((cover) => {
                  return (
                    <ProductCard
                      key={cover.key}
                      title={cover.title}
                      price={cover.price}
                      discountedPrice={cover.discountedPrice}
                      thumbnail={cover.thumbnail}
                      image={cover.image}
                      discount={cover.discount}
                      prodId = {cover.key}
                      parenturl='airpods-cover'
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
      <Pagination/>
      <div className="mb-52">
        <Newsletter />
      </div>

      {/* Offcanvas */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
    <h5 className="offcanvas-title fs-8" id="offcanvasExampleLabel">IVogue</h5>
    <button type="button" className="btn-close fs-5" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body p-0">
  <SimpleBar className="filter-simplebar"> <div className="p-4">  <FilterBlock/></div>
</SimpleBar>  </div>
</div>      

    </>
  )
}

export default AirpodsCover
