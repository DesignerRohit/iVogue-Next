import { FILTER_BRAND, FILTER_MODEL } from "@/api/Products/products";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import FilterBrand from "./FilterBrand";
import FilterModel from "./FilterModel";

const FilterBlock = () => {
    const [slider , setSlider] = useState(0);
  return (
    <>
    <div className="d-flex justify-content-between align-items-center mb-13">
       <div className="d-flex gap-55 align-items-center ">
         <Icon icon='mage:filter' className="text-black fs-55" />
         <span className="fs-8 fw-bold text-black">Filter By</span>
       </div>
       <a href="#" className="fs-5 text-black fw-normal">Clear All</a>
    </div>
    <div className="d-flex flex-column gap-55">
      <h4 className="fs-22 fw-bold text-black">Price</h4>
       <div className="d-flex flex-column gap-55">
       <input type="range" min="1" onChange={(e) =>{setSlider(e.target.value)}} max="100" value={slider} className="slider" id="myRange"/>
      <div className="d-flex gap-2">
        <span className="fs-4 fw-normal text-black">Rs01</span>
        <span className="fs-4 fw-normal text-black">To</span>
        <span className="fs-4 fw-normal text-black">Rs300</span>
      </div>
       </div>
    </div>
    <hr className="filter-line" />
    <div className="d-flex justify-content-between mb-4">
      <h4 className="fs-22 fw-bold text-black">Choose Brand</h4>
      <Icon icon='fluent:chevron-right-16-filled' className="fs-52 text-black" />
    </div>
      <div className="brand-filter d-flex flex-column gap-13">
       {FILTER_BRAND.map((brand)=>{
        return (<FilterBrand key={brand.key} brand={brand.brand} quantity={brand.quantity} />)
       })}
      </div>
      <hr className="filter-line" />
      <div className="d-flex justify-content-between mb-4">
      <h4 className="fs-22 fw-bold text-black">Choose Model</h4>
      <Icon icon='fluent:chevron-right-16-filled' className="fs-52 text-black" />
     </div>
     <div className="brand-filter d-flex flex-column gap-13">
       {FILTER_MODEL.map((model)=>{
        return (<FilterModel key={model.key} model={model.model} quantity={model.quantity} />)
       })}
      </div>
    </>
  );
};

export default FilterBlock;
