"use client";
import { Icon } from "@iconify/react"
import Image from 'next/image'
import img from "/public/images/homepage/insta1.png";
import Link from "next/link";
import CheckoutSummary from "../Shop/Checkout/CheckoutSummary";
import { useProduct } from "@/store/CartProvider/CartData";
import CartCanvasItem from "./CartCanvasItem";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartCanvas = () => {
  const router = useRouter();
  const productContext = useProduct();
  const items = productContext.cartvalue.length;
  const filteredCart = productContext.cartvalue.map((prod) => {
    return (productContext.value.find((item) => {
      return item.key === prod
    }))
  })
  return (
    <div
      className="offcanvas offcanvas-end cart-offcanvas"
      tabIndex="-1"
      id="Cartoffcanvas"
      aria-labelledby="CartoffcanvasLabel"
    >
      <div className="offcanvas-header ">

        <Link href={'#'} type="button" className="text-black ms-auto" data-bs-dismiss="offcanvas" aria-label="Close">
          <Icon icon="tabler:circle-x" fontSize={25} />
        </Link>
      </div>
      <div className="offcanvas-body px-0">
        <div className="position-relative  text-center my-4 mb-9">
          <Link href='#' className='text-black  bg-white z-1 px-10 hover-link position-relative'>
            <Icon icon="tabler:shopping-cart" fontSize={25} data-bs-toggle="offcanvas" href="#Cartoffcanvas" role="button" aria-controls="Cartoffcanvas" />
            {items === 0 ? null : <span className="position-absolute top-0 translate-middle badge rounded-circle  bg-black">
              {items}
            </span>}
          </Link>
          <span className="border-top w-100 position-absolute top-50 start-50 translate-middle"></span>
        </div>
        <div className="d-md-flex">
          <div className="cart-items px-4" style={{ minWidth: '500px' }}>
            {filteredCart.length === 0 ? <h1 className="my-4">No Product in this cart yet!</h1> : filteredCart.map((prod) => {
              const newcat = prod.category.replace('-', ' ').toUpperCase();
              return <CartCanvasItem prodId={prod.key} image={prod.thumbnail} title={prod.title} quantity={prod.quantity} category={newcat} />
            })}
          </div>
        </div>
      </div>
      <div className="offcanvas-footer px-4">
        <div>
          <button className="btn btn-outline-indigo px-8 py-55 lh-1 fs-3 border-2  w-100 fw-normal" onClick={() => {
            if (items == 0) {
              toast.error("Your cart is empty!");
            }
            else {
              router.push("/shop/shopping-cart");
            }
          }}>
            Go To Cart
          </button>
          <ToastContainer />
        </div>
        <p className="text-center mt-2">
          Shipping & Taxes Calculates At Checkout.
        </p>
      </div>
    </div>
  );
}

export default CartCanvas
