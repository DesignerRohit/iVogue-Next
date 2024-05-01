"use client";
 
import RecentProducts from "../../Products/RecentProducts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OrderSummary from "./OrderSummary";
import CartItems from "./CartItems";
import { useProduct } from "@/store/CartProvider/CartData";

const ShoppingCart = () => {
  const cartContext = useProduct();
  return (
    <>
    <div className="overflow-x-hidden ">
      <div className="container mb-md-52 mb-10">
        <div className="row gy-4">
          <CartItems/>
          <OrderSummary/>
        </div>
      </div>
    <RecentProducts/>
    </div>
    </>
  );
};

export default ShoppingCart;
