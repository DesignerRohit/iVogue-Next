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
import ProductCard from "@/app/Components/Products/Cards/ProductCard";


const initState = {
  allCase: "active",
  leatherCase: "",
  hardcase: "",
  transparentCase: "",
  phoneCase: "",
};

const emptyCases = {
  allCase: "",
  leatherCase: "",
  hardCase: "",
  transparentCase: "",
  phoneCase: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "AllCase":
      return { ...state, ...emptyCases, allCase: "active" };
      break;
    case "LeatherCase":
      return { ...state, ...emptyCases, leatherCase: "active" };
      break;
    case "HardCase":
      return { ...state, ...emptyCases, hardCase: "active" };
      break;
    case "TransparentCase":
      return { ...state, ...emptyCases, transparentCase: "active" };
      break;
    case "PhoneCase":
      return { ...state, ...emptyCases, phoneCase: "active" };
      break;
  }
};



const TemperedGlass = () => {
      const ProductData = useProduct();
  const tempered_glass = ProductData.value.filter((prod)=>{
    return prod.mastercat==='Guard';
  })
  const [tempered, setTempered] = useState([]);
 



  const handleMobileCovers = () => {
    setTempered(tempered_glass);
  };


  useEffect(() => {
    handleMobileCovers();
  }, []);
  return (
    <>
      <TemperedHeader />
      {/* <div className="d-flex gap-4 overflow-x-auto d-flex justify-content-md-center pb-md-11 pb-8">
        <div
          className={`d-flex flex-column gap-3 covertype ${state.allCase}`}
          onClick={() => {
            handleMobileCovers("all");
            handleDispatch("AllCase");
          }}
        >
          <div
            className={`d-flex justify-content-center align-items-center  bg-indigo fs-4`}
            style={{ width: "140px", height: "70px" }}
          >
            <span className="text-center text-base fs-4 text-white">All</span>
          </div>
          <p className="text-center text-base fs-4 text-dark">All</p>
        </div>
        <CategoryItem
          image={leather_img}
          title="Leather Case"
          handleData={() => {
            handleMobileCovers("leather-case");
            handleDispatch("LeatherCase");
          }}
          Case={state.leatherCase}
        />
        <CategoryItem
          image={hard_img}
          title="Hard Case"
          handleData={() => {
            handleMobileCovers("hard-case");
            handleDispatch("HardCase");
          }}
          Case={state.hardCase}
        />
        <CategoryItem
          image={transparent_img}
          title="Transparent Case"
          handleData={() => {
            handleMobileCovers("transparent-case");
            handleDispatch("TransparentCase");
          }}
          Case={state.transparentCase}
        />
        <CategoryItem
          image={phone_img}
          title="Phone Cases"
          handleData={() => {
            handleMobileCovers("phone-case");
            handleDispatch("PhoneCase");
          }}
          Case={state.phoneCase}
        />
      </div> */}

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
             <div className="d-flex justify-content-between gap-51 py-lg-2 py-58 px-51 border border-2 border-subtle-dark pointer">
                <span className="fs-5  fw-normal text-black">
                Sort By : to sellers
                </span>
                <Icon icon="f7:chevron-right" className="fs-53 text-black" />
            </div>
             </div>
            <div className="row gy-4">
              {tempered.length == 0 ? (
                <CustomSkeleton />
              ) : (
                tempered.map((cover) => {
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
                      parenturl='tempered-glass'
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

export default TemperedGlass
