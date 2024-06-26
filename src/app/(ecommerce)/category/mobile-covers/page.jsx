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
import CategoryItem from "@/app/Components/MobileCovers/CategoryItem";
import FilterBlock from "@/app/Components/MobileCovers/FilterBlock";
import CustomSkeleton from "@/app/Components/Skeleton/CustomSkeleton";
import Pagination from "@/app/Components/Products/Pagination";
import Link from "next/link";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useProduct } from "@/store/CartProvider/CartData";
import CoverHeader from "@/app/Components/MobileCovers/CoverHeader";
import ProductCard from "@/app/Components/Products/Cards/ProductCard";
import { useSearchParams } from "next/navigation";


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



const MobileCovers = () => {
  const ProductData = useProduct();
  const searchparams = useSearchParams();

  const Covers_Cases = ProductData.value.filter((prod)=>{
    return prod.mastercat==='Cover';
  })
  const [covers, setCovers] = useState([]);
  const [state, dispatch] = useReducer(reducer, initState);



  const handleDispatch = (caseType) => {
    dispatch({type:caseType})
  }

  const handleMobileCovers = (category) => {
    if (category !== "all") {
      const filteredCovers = Covers_Cases.filter((cover) => {
        return category === cover.category;
      });
      setCovers(filteredCovers);
    } else {
      setCovers(Covers_Cases);
    }
  };






  useEffect(() => {
    if(searchparams.get('prodcat')===null){
      handleMobileCovers("all");
      handleDispatch("AllCase");
    }
    else{
      let data = searchparams.get('prodcat');
     
      if(data=='leather-case'){
        handleMobileCovers(data);
        handleDispatch("LeatherCase");
      }
      else if(data=='hard-case'){
        handleMobileCovers(data);
        handleDispatch("HardCase");
      }
      else if(data=='transparent-case'){
        handleMobileCovers(data);
        handleDispatch("TransparentCase");        
      }
      else{
        handleMobileCovers(data);
        handleDispatch("PhoneCase");    
      }
    }
    
  },[]);

  return (
    <>
      <CoverHeader />
      <div className="d-flex gap-4 overflow-x-auto d-flex justify-content-md-center pb-md-11 pb-0 mb-sm-0 mb-8">
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
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-3 d-xl-block d-none">
            <FilterBlock />
          </div>
          <div className="col-xl-9">
            <div className="d-flex justify-content-xl-end justify-content-between  mb-7 align-items-center ">
              <Link
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                className="d-xl-none d-block"
              >
                <Icon icon="mage:filter" className="text-black fs-9" />
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
              {covers.length == 0 ? (
                <CustomSkeleton />
              ) : (
                covers.map((cover) => {
                  return (
                    <ProductCard
                      key={cover.key}
                      title={cover.title}
                      price={cover.price}
                      discountedPrice={cover.discountedPrice}
                      thumbnail={cover.thumbnail}
                      image={cover.image}
                      discount={cover.discount}
                      prodId={cover.key}
                      parenturl="mobile-covers"
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
      <Pagination />
      <div className="mb-md-52 mb-10">
        <Newsletter />
      </div>

      {/* Offcanvas */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fs-8" id="offcanvasExampleLabel">
            IVogue
          </h5>
          <button
            type="button"
            className="btn-close fs-5"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-0">
          <SimpleBar className="filter-simplebar">
            {" "}
            <div className="p-4">
              {" "}
              <FilterBlock />
            </div>
          </SimpleBar>{" "}
        </div>
      </div>
    </>
  );
};

export default MobileCovers;
