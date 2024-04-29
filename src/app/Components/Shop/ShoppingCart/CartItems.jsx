import Image from "next/image";
import React from "react";
import CartCards from "./CartCards";
import { useProduct } from "@/store/CartProvider/CartData";

const CartItems = () => {
  const productcontext = useProduct();
  const allProducts = productcontext.value;
  const cartData = productcontext.cartvalue;

  const filteredCart = cartData.map((prod)=>{
    return(allProducts.find((item)=>{
        return item.key===prod
    }))
  });
  return (
    <>
      <div className="col-lg-7">
        <div className="d-flex justify-content-between py-8 mb-10 border-2 border-bottom ">
          <h3 className="fw-bold fs-7 text-dark text-uppercase ">
            Shopping Cart
          </h3>
          <h3 className="fw-bold fs-7 text-dark text-uppercase ">{`${cartData.length} Item`}</h3>
        </div>
        <div className="shop-cart-scroll d-flex">
         <div className="shop-cart-items">
         <div className="row pb-7">
          <div className="col-6">
            <div className="d-flex">
              <span className="fs-6 text-black fw-normal ">
                Product Details
              </span>
            </div>
          </div>
          <div className="col-4">
            <div className="d-flex">
              <span className="fs-6 text-black fw-normal">Quantity</span>
            </div>
          </div>
          <div className="col-2 text-center">
            <span className="fs-6 text-black fw-normal  text-center">
              Price
            </span>
          </div>
        </div>
        <div className="cart-border border-2 border-bottom"></div>
         {filteredCart.length===0?<h1>No Product in this cart yet!</h1>:filteredCart.map((prod)=>{
          return (<CartCards key={prod.key} prodId={prod.key} product_image={prod.thumbnail} title={prod.title} quantity={prod.quantity} discountedPrice={prod.discountedPrice} type={prod.mastercat} />)
         })}
         </div>
         </div>
      </div>
    </>
  );
};

export default CartItems;
