"use client";
import React, { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import product_image from "/public/images/homepage/product.png"
import { Icon } from "@iconify/react";
import ThumbProduct from "@/app/Components/Products/Cards/ThumbProduct";
import Link from "next/link";
import ProductPreviewCard from "@/app/Components/Products/Cards/ProductPreviewCard";
import { useRouter } from "next/navigation";
import { useProduct } from "@/store/CartProvider/CartData";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SelectedProduct = ({data}) => {

  
    const router = useRouter();
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
    const [prodQuantity,setQuantity] = useState(0);
   
    const productContext = useProduct();

    const handleAddProduct = () => {
        setQuantity(prodQuantity+1);
      }
    const handleDeleteProduct = () => {
        if(prodQuantity>=1){
          setQuantity(prodQuantity-1);
        }
      }

      

      const handleshoppingCart = () => { 

        const filteredData = productContext.value.map((prod)=>{
           return(prod.key===data.key?{...prod,quantity:prod.quantity+prodQuantity}:prod)
        });
        productContext.setallProducts(filteredData);
        if(productContext.cartvalue.length===0){
          const cartInfo = [...productContext.cartvalue,data.key];
          productContext.setCartData(cartInfo);
        }
        else{
          let filteredInfo = productContext.cartvalue.filter((prod)=>{
            return (prod===data.key)
          });
          if(filteredInfo.length===0){
            const cartInfo = [...productContext.cartvalue,data.key];
          productContext.setCartData(cartInfo)
          }
          else{}
        }
        if(prodQuantity===0){
          toast.error("No Item Added!");
        }
        else{
          router.push(`/shop/shopping-cart/`);
        }
      }
  
    useEffect(() => {
      setNav1(sliderRef1);
      setNav2(sliderRef2);
    }, []);
    return (
      <>
      <div className="container mt-10">
      <div className="slider-container product-slider">
        <div className="row gy-4">
          <div className="col-lg-6">
            <h2> </h2>
            <h4></h4>
            <Slider asNavFor={nav2} dots={true} ref={(slider) => (sliderRef1 = slider)}>
              <ProductPreviewCard shareIcon="solar:share-outline" heartIcon="ph:heart" image={data.sliderthumbnail} prodInfo = {data} />
               {data.photos.map((prod,index)=>{
                return(  <ProductPreviewCard key={index} shareIcon="solar:share-outline" heartIcon="ph:heart" image={prod} prodInfo = {data} />)
               })}
            </Slider>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-between gap-lg-0 gap-4">
              <div>
              <h5 className="fs-6 text-gray-emphasis text-uppercase fw-normal mb-1">{data.title}</h5>
             <h3 className="text-black fw-bold fs-8">{`Legendary Logos Stride 2.0 ${data.mastercat} For ${data.title}`}</h3>
              </div>
             <div className="d-flex gap-lg-10 align-items-center flex-lg-nowrap flex-wrap gap-4">
             <h3 className="text-subtle-dark fw-bold fs-8 mb-0" style={{letterSpacing:"0.5px"}}>{`Rs.${data.discountedPrice}`}</h3>
             <h3 className="text-lightgray-emphasis text-decoration-line-through  fw-bold fs-8 mb-0" style={{letterSpacing:"1px"}} >{data.price}</h3>
             <div className="d-flex flex-column gap-1">
             <div className="d-flex align-items-center ">
                <Icon icon={"ic:baseline-star-rate"} className="fs-8 text-warning" />
                <Icon icon={"ic:baseline-star-rate"} className="fs-8 text-warning" />
                <Icon icon={"ic:baseline-star-rate"} className="fs-8 text-warning" />
                <Icon icon={"ic:baseline-star-rate"} className="fs-8 text-warning" />
                <Icon icon={"ic:baseline-star-half"} className="fs-8 text-warning" />
                <span className="fs-4 ms-2 text-black">4.5</span>
              </div>
              <p className="fs-2 text-gray-emphasis mb-0" style={{letterSpacing:"1px"}}>Reviews (135)</p>
             </div>
             </div>
            {/* Slider */}
            <div>
          <h4 className="fs-6 text-uppercase text-subtle-dark fw-normal letter" >Collection</h4>
        <Slider
          asNavFor={nav1}
          ref={(slider) => (sliderRef2 = slider)}
          slidesToShow={6}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false}
          dots={false}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
              }
            }
          ]}
          className="thumbSlider"
          
        >
          <ThumbProduct image={data.thumbnail}/>
          {data.photos.map((prodImg,index)=>{
            return( <ThumbProduct key={index} image={prodImg}/>)
          })}
        </Slider>
        </div>
          <div>
          <h3 className="text-subtle-dark fw-bold fs-6 half-letter ">Exciting Offers</h3>
        <ul className="list-unstyled ">
          <li className="fs-6 fw-normal text-subtle-dark text-capitalize d-flex align-items-center  gap-51"><div className="round-12 bg-subtle-dark"></div>buy any 2 get extra 20 off </li>
          <li className="fs-6 fw-normal text-subtle-dark text-capitalize d-flex align-items-center  gap-51"><div className="round-12 bg-subtle-dark"></div>Free Duffle Bag on all orders above Rs.2499 </li>
        </ul>
          </div>
           <div className="d-flex flex-column gap-2">
           <div className="d-flex flex-wrap">
          <div className="d-flex align-items-center  gap-7 py-6 px-7  border border-subtle-dark border-2 cartbtn ">

           <button className="btn p-0 border-0"><Icon icon="ph:plus" className="text-subtle-dark fs-53 pointer" onClick={handleAddProduct} /></button>
           <span className="text-subtle-dark fs-53">{prodQuantity}</span>
           <button className="btn p-0 border-0"><Icon icon="ph:minus" className="text-subtle-dark fs-53 pointer" onClick={handleDeleteProduct} /></button>
          </div>
          <div className="flex-grow-1">
          <div className="d-flex btn btn-primary rounded-0 justify-content-center align-align-items-center h-100" onClick={handleshoppingCart}>
          <span className="text-white fw-normal letter fs-53 text-uppercase align-self-center">Add to bag</span>
          </div><ToastContainer />
          </div>
           </div>
           <div className="d-flex justify-content-between align-items-center ">
            <div className="d-flex align-items-center gap-2">
              <Icon icon="iconamoon:gift-thin" className="text-subtle-dark fs-52" />
              <span className="fs-6 text-subtle-dark fw-normal">Make it a gift</span>
            </div>
            <Link href="#" className="fs-4 text-indigo fw-normal">Learn More</Link>
           </div>
           </div>
           <form className='ps-2 border border-light-gray rounded-2 position-relative d-flex align-items-stretch  '>
                <input type="nmber" className="form-control ps-2 py-2 fw-light fs-5 border-0 shadow-none " id="exampleFormControlInput1" placeholder="Enter Pincode To Check Delivery..." />
                <div className="check">
                Check
                </div>
              </form>
          </div>
        </div>
  
      </div>
      </div>

      </>
    );
}

export default SelectedProduct
