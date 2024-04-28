"use client";
import { Icon } from "@iconify/react"
import Image from 'next/image'
import img from "/public/images/homepage/insta1.png";
import Link from "next/link";

const CartCanvas = () => {
    return (
        <>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="Cartoffcanvas" aria-labelledby="CartoffcanvasLabel">
                <div className="offcanvas-body px-0">
                    <div className="position-relative text-center my-4 mb-9">
                        <p className="mb-0 fs-4 px-12 d-inline-block bg-white text-dark z-1 position-relative">
                            <Icon icon="tabler:shopping-cart" className="text-black" fontSize={30} /></p>
                        <span className="border-top w-100 position-absolute top-50 start-50 translate-middle"></span>
                    </div>
                    <div className="px-12 ">
                        <div className="canvas-footer">
                            <div className="d-flex justify-content-between align-items-center border-bottom pb-8 mb-8" >
                                <div className="d-flex align-items-center gap-3 ">
                                    <Image
                                        src={img}
                                        alt="img"
                                        style={{ width: "120px", height: "auto", maxHeight: "150px" }}
                                    />
                                    <div className="">
                                        <h4 className="text-black fs-52 ">Lichi Lather Case</h4>
                                        <p className="d-flex fs-4 align-items-center mb-0">Min Qty: <strong className="text-black d-flex">1 Qty <span className="px-3">|</span> Iphone 15 Pro </strong></p>
                                    </div>
                                </div>
                                <div className="icon-wrap btn btn-subtle-dark rounded-0 py-2 px-2  d-flex justify-content-center align-items-center " >
                                    <Icon icon="mi:delete" className="fs-8" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center" >
                                <div className="d-flex align-items-center gap-3 ">
                                    <Image
                                        src={img}
                                        alt="img"
                                        style={{ width: "120px", height: "auto", maxHeight: "150px" }}
                                    />
                                    <div className="">
                                        <h4 className="text-black fs-52 ">Lichi Lather Case</h4>
                                        <p className="d-flex fs-4 align-items-center mb-0">Min Qty: <strong className="text-black d-flex">1 Qty <span className="px-3">|</span> Iphone 15 Pro </strong></p>
                                    </div>
                                </div>
                                <div className="icon-wrap btn btn-subtle-dark rounded-0 py-2 px-2  d-flex justify-content-center align-items-center " >
                                    <Icon icon="mi:delete" className="fs-8" />
                                </div>
                            </div>
                        </div>

                        <h2 className="text-black mb-8">200</h2>    
                        <button className="btn btn-outline-indigo px-8 py-55 lh-1 fs-3 border-2  w-100 fw-normal">Go To Cart</button>
                        <p className="text-center mt-2">Shipping & Taxes Calculates At Checkout.</p>    
                    </div>



                </div>
            </div>
        </>
    )
}

export default CartCanvas
