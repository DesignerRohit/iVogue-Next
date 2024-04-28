"use client"
import { Icon } from "@iconify/react";
import React from "react";
import ExpressCheckout from "@/app/Components/Shop/Checkout/ExpressCheckout";
import CheckoutSummary from "@/app/Components/Shop/Checkout/CheckoutSummary";

const CheckoutLayout = () => {


  return (
    <>
        <div className="container">
          <div className="row">
            <ExpressCheckout/>
            <CheckoutSummary/>
          </div>
        </div>
    </>
  );
};

export default CheckoutLayout;
