"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductInfo from "@/app/Components/MobileCovers/ProductInfo";
import Accessories from "@/app/Components/Products/Accessories";
import ProductFeatures from "@/app/Components/Products/ProductFeatures";
import ProductReviews from "@/app/Components/Products/ProductReviews";
import RecentProducts from "@/app/Components/Products/RecentProducts";
import NewProducts from "@/app/Components/Products/NewProducts";
import BestSellers from "@/app/Components/Products/BestSellers";
import LikedProducts from "@/app/Components/Products/LikedProducts";
import Newsletter from "@/app/Components/HeroSection/Newsletter";


const ProductDetail = () => {

  return (
    <>
    <ProductInfo/>
    <Accessories/>
    <ProductFeatures/>
    <ProductReviews/>
    <RecentProducts/>
    <NewProducts/>
    <BestSellers/>
    <LikedProducts/>
    <Newsletter/>
    </>
  );
};


export default ProductDetail



