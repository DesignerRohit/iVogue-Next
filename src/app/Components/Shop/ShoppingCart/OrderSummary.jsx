import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useProduct } from "@/store/CartProvider/CartData";
import { useRouter } from "next/navigation";

const OrderSummary = () => {
  const productContext = useProduct();
  const cartInfo = productContext.cartvalue;
  const[totalPrice,setTotal] = useState(0);



  const handleTotalValue = () => {

    if(cartInfo.length>=1){
      const filteredData = cartInfo.map((Item)=>{
      return (productContext.value.find((prod)=>{
        return prod.key===Item
      }))
    });
   let total = filteredData.reduce((accum,item)=>{
        return accum+(item.quantity*item.discountedPrice)
    },0);
    setTotal(total);
  }
  
}
const router = useRouter();

const handleCheckout = () => {
  if(cartInfo.length>0){
    router.push("/shop/checkout");
  }
  else{
    alert("Your cart is empty");
  }
}
useEffect(()=>{
  handleTotalValue();
})
  return (
    <>
      <div className="col-xl-5  position-relative ">
        <div className="bg-cover ">
          <hr className="hr-order d-lg-block d-none w-100" />
          <hr className="hr-second-order d-lg-block d-none" />
        </div>
        <div className="floating-block">
          <div className=" pb-10 ps-lg-8 ps-7 pe-xxl-0 pe-lg-7 pe-4">
            <div className="d-flex justify-content-between py-8 mb-sm-10 mb-0 ">
              <h3 className=" fw-bold fs-7 text-dark text-uppercase ">
                Order Summary
              </h3>
            </div>
            <div className="d-flex flex-column gap-7">
              <div className="benefit d-flex flex-column  gap-7">
                <div className="addItem d-flex justify-content-between py-2 px-51 border border-2 border-subtle-dark">
                  <div className="d-flex gap-1 align-items-center ">
                    <Icon icon="ph:gift" className="text-black fs-6" />
                    <span className="fs-2 fw-normal text-black">
                      Make it a gift for inr 250
                    </span>
                  </div>
                  <button
                    className="btn btn-primary rounded-0 gap-1 fs-2 px-51 fw-nomral d-flex align-items-center "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Add
                    <Icon icon="ph:plus-bold" className="fs-2" />
                  </button>
                </div>
                <div className="addItem d-flex justify-content-between py-2 px-51 border border-2 border-subtle-dark">
                  <div className="d-flex gap-1 align-items-center ">
                    <Icon
                      icon="streamline:discount-percent-coupon"
                      className="text-black fs-4"
                    />
                    <span className="fs-2 fw-normal text-black">
                      Coupon & Offers
                    </span>
                  </div>
                  <Icon icon="f7:chevron-right" className="fs-8 text-black" />
                </div>
                <div className="addItem d-flex justify-content-between py-2 px-51 border border-2 border-subtle-dark">
                  <div className="d-flex gap-1 align-items-center ">
                    <Icon icon="tabler:gift-card" className="text-black fs-5" />
                    <span className="fs-2 fw-normal text-black">
                      Redeem Gift Card
                    </span>
                  </div>
                  <Icon icon="f7:chevron-right" className="fs-8 text-black" />
                </div>
              </div>
            </div>
          </div>
          <div className="ps-lg-8 ps-7 pe-xxl-0 pe-lg-7 pe-4 py-10 d-flex flex-column gap-55">
            <h4 className="fs-6 fw-bold text-black">Order Summary</h4>
            <div className="d-flex justify-content-between align-align-items-center ">
              <span className="text-black fs-6 fw-normal">
               {` Item Total (${cartInfo.length} Item)`}
              </span>
              <span className="text-black fs-6 fw-normal">{`Rs.${totalPrice}`}</span>
            </div>
            <div className="d-flex justify-content-between align-align-items-center ">
              <span className="text-black fs-6 fw-normal">Shipping</span>
              <span className="text-black fs-6 fw-normal">FREE</span>
            </div>
            <div className="d-flex justify-content-between align-align-items-center ">
              <span className="text-black fs-55 fw-bold">Grand Total</span>
              <span className="text-black fs-55 fw-bold">{`Rs.${totalPrice}`}</span>
            </div>
            <button className="btn btn-primary fw-bold fs-5  rounded-0" onClick={handleCheckout}>
              Process To Checkout
            </button>
          </div>
        </div>
      </div>
      {/* Offcanvas :- add */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="row g-0 align-items-center pt-12">
              <div
                className="col-3 bg-light-emphasis"
                style={{ height: "3px" }}
              ></div>
              <div className="col-6 d-flex justify-content-center ">
                <Icon icon="ph:gift-light" className="text-dark fs-9" />
              </div>
              <div
                className="col-3 bg-light-emphasis"
                style={{ height: "3px" }}
              ></div>
            </div>
            <div className="modal-body px-61">
              <h2 className="fs-8 fw-bold text-dark mt-8">
                SEND A PERSONALISED MESSAGE
              </h2>
              <p className="fs-5 fw-normal text-black mb-0 mt-4">
                A printed card of your personalised message will be enclosed in
                the packaging.
              </p>
              <form action="">
                <div className="row">
                  <div className="row gy-4">
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control fs-4 py-55"
                        id="Inputfirstname1"
                        aria-describedby="firstnameHelp"
                        placeholder="Recipient's name"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control fs-4 py-55"
                        id="Inputfirstname2"
                        aria-describedby="firstnameHelp"
                        placeholder="Senders Name"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control fs-4 py-55"
                        id="Inputfirstname3"
                        aria-describedby="firstnameHelp"
                        placeholder="Your Message"
                      />
                    </div>
                  </div>
                </div>
              </form>
              <button className="btn btn-outline-indigo w-100 border-2 py-6 my-53 fs-4">
                Save
              </button>
            </div>
            <div className=" pb-12">
              <div className="row g-0 align-items-center ">
                <div
                  className="col-3 bg-light-emphasis"
                  style={{ height: "3px" }}
                ></div>
                <div className="col-6 d-flex justify-content-center "></div>
                <div
                  className="col-3 bg-light-emphasis"
                  style={{ height: "3px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
