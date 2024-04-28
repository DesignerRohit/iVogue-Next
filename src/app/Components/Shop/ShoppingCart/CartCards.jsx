import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Icon } from "@iconify/react";
import { useProduct } from '@/store/CartProvider/CartData';

const CartCards = ({product_image,title,quantity,discountedPrice,prodId,type}) => {
  const[item,SetItem] = useState(quantity);
  const productcontext = useProduct();
  const handleAddItem = () => {
    SetItem(item+1);
    let filteredData = productcontext.value.map((cartitem)=>{
      return(cartitem.key===prodId?{...cartitem,quantity:item+1}:cartitem)
    });
    productcontext.setallProducts(filteredData);
  }
  // remove cart
  
  useEffect(()=>{
    if(item===0){
      const filteredCartData = productcontext.cartvalue.filter((cartItem) => {
        return cartItem !== prodId;
      });
      productcontext.setCartData(filteredCartData);
     }
  },[item])


  const handleReduceItem = () => {
    if(item>1){
      SetItem(item-1);
      let filteredData = productcontext.value.map((cartitem)=>{
        return(cartitem.key===prodId?{...cartitem,quantity:item-1}:cartitem)
      });
      productcontext.setallProducts(filteredData);
    }
    else{
      SetItem(item-1);
      let filteredData = productcontext.value.map((cartitem)=>{
        return(cartitem.key===prodId?{...cartitem,quantity:item-1}:cartitem)
      });
      productcontext.setallProducts(filteredData);

    }

  }
  const handleDeleteItem = () => {
    SetItem(0);
    const newProducts = productcontext.value.map((product)=>{
      return (product.key===prodId?{...product,quantity:0}:product)
    })
    productcontext.setallProducts(newProducts);
  }
  
  return (
    <>
      <div className="row pt-5">
        <div className="col-md-6">
         <div className="row align-items-center ">
          <div className="col-lg-4">
          <div className="bg-light-emphasis">
              <Image src={product_image} alt="image" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-8">
          <div className="d-flex flex-column gap-3">
              <p className="mb-0 fs-6 lh-sm  fw-bold text-black text-uppercase">
                {`${type} For ${title}`}
              </p>
              <div className="d-flex gap-3">
                <div className="icon-wrap btn btn-subtle-dark rounded-0 p-58 d-flex justify-content-center align-items-center " >
                  <Icon icon="fluent:edit-32-regular" className="fs-6" />
                </div>
                <div className="icon-wrap btn btn-subtle-dark rounded-0 p-58 d-flex justify-content-center align-items-center " >
                  <Icon icon="mi:delete" className="fs-6" onClick={handleDeleteItem} />
                </div>
              </div>
  
          </div>
          </div>
         </div>
        </div>
        <div className="col-md-4 align-self-center ">
          <div className="d-flex gap-55 align-items-center justify-content-center ">
            <button className='btn p-0 border-0' onClick={handleReduceItem}>
            <Icon
              icon="ph:minus-bold"
              className="text-gray-variant fs-5 pointer"
            />
            </button>
            <span className="py-59 text-black px-7 border fs-6 border-2 border-gray-variant">
              {item}
            </span>
           <button className='btn p-0 border-0' onClick={handleAddItem}>
           <Icon
              icon="ph:plus-bold"
              className="text-gray-variant fs-52 pointer"
            />
           </button>
          </div>
        </div>
        <div className="col-md-2 align-self-center justify-content-center ">
          <h3 className="fs-6 fw-bold text-black text-center">{`Rs.${item*discountedPrice}`}</h3>
        </div>
      </div>
    </>
  );
}

export default CartCards
