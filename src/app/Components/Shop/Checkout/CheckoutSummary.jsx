import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import product_image from "/public/images/shop/product_cart.png";
import Image from "next/image";
import OrderCard from "./OrderCard";
import { useProduct } from "@/store/CartProvider/CartData";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckoutSummary = () => {
    const [discount , setDiscount] = useState("Apply Discount");
    const productContext = useProduct();
      
      const filteredCart = productContext.cartvalue.map((prod)=>{
           return (productContext.value.find((item)=>{
             return item.key===prod
           }))
      });
      
      const totalPrice = filteredCart.reduce((accum,item)=>{
        return(accum=accum+(item.quantity*item.discountedPrice))
      },0);

     const handleOrder = () => {
      toast.success("Order placed!");
     }

  return (
    <>
            <div className="col-lg-6 pe-0">
              <h3 className="text-uppercase fs-8 fw-bold mt-8">
                Order Summary
              </h3>
             {filteredCart.length===0?null:filteredCart.map((prod)=>{
              return <OrderCard image={prod.thumbnail} discountedPrice={prod.discountedPrice} quantity={prod.quantity} title={prod.title} type={prod.mastercat} />
             })}
              <div className="row">
                <div className="col-lg-8 h-100">
                  <input
                    type="text"
                    className="form-control fs-3 py-60"
                    id="exampleInputdiscount"
                    aria-describedby="emailHelp"
                    value={`${discount}`}
                    onChange={(e)=>setDiscount(e.target.value)}
                  />
                </div>
                <div className="col-lg-4">
                    <div className="addItem d-flex justify-content-between py-2 px-51 border border-2 border-subtle-dark pointer">
                      <div className="d-flex gap-1 align-items-center ">
                        <span className="fs-5 fw-normal text-black">
                        Apply Discount
                        </span>
                      </div>
                      <Icon
                        icon="f7:chevron-right"
                        className="fs-53 text-black"
                      />
                    </div>
                  </div>
              </div>
              <div className="border-2 border-top mt-57 pt-10"></div>
              <div className="d-flex flex-column gap-8">
                <div className="d-flex justify-content-between ">
                  <span className="fs-22 fw-normal text-black">Cart Subtotal</span>
                  <span className="fs-22 fw-normal text-black">{totalPrice}</span>
                </div>
                <div className="d-flex justify-content-between ">
                  <div className="d-flex flex-column ">
                  <span className="fs-22 fw-normal text-black lh-1">Shipping</span>
                  <span className="fs-4 fw-normal half-letter text-grayscale-variant">Flat Rate - Fixed</span>
                  </div>
                  <span className="fs-22 fw-normal text-black">Rs.0.00</span>
                </div>
                <div className="d-flex justify-content-between ">
                  <span className="fs-55 fw-bold text-black">Order Total</span>
                  <span className="fs-55 fw-bold text-black">{`RS${totalPrice}`}</span>
                </div>
                 <div>
                 <button className="btn btn-primary py-6 rounded-0 fs-5 fw-normal w-100" onClick={handleOrder}>Place Order</button>
                 <ToastContainer />
                 </div>
              </div>
            </div>      
    </>
  )
}

export default CheckoutSummary
