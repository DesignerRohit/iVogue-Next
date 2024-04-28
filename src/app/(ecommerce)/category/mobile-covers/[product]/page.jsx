"use client"
import SelectedProduct from "@/app/Components/Products/SelectedProduct";
import ProductDetail from "@/app/Components/Products/ProductDetail";
import { useEffect, useState } from "react";
import { PRODUCTS } from "@/api/Products/products";
import CustomSkeleton from "@/app/Components/Skeleton/CustomSkeleton";
import { useProduct } from "@/store/CartProvider/CartData";


const MobileCover = ({params}) => {
  const productInfo = useProduct();
  const [ sliderData , setSliderData] = useState([]);
  const handleSlider = () => {
    const data = productInfo.value.filter((elem)=>{
      return (elem.key===params.product);
    });
    setSliderData(data);
  }
    useEffect(()=>{
      handleSlider();
    },[])
  return (
    <>
      {sliderData.length===0?<CustomSkeleton/>:<SelectedProduct Id={params.product} data={sliderData[0]}/>}
      <ProductDetail/>
    </>
  );
};


export default MobileCover



