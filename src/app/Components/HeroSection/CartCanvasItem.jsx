import { useProduct } from '@/store/CartProvider/CartData'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const CartCanvasItem = ({ image, title, quantity, category, prodId }) => {
  const productContext = useProduct();
  const cartitems = productContext.cartvalue;

  // const[cartValue,setCartValue] = useState()

  const handleCartItems = () => {
    const filteredCart = cartitems.filter((prod) => {
      return (prod !== prodId)
    });
    const newProducts = productContext.value.map((prod) => {
      return (prod.key === prodId ? { ...prod, quantity: 0 } : prod)
    });
    productContext.setallProducts(newProducts);
    productContext.setCartData(filteredCart);
  }
  return (
    <div className="row justify-content-between align-items-center border-bottom pb-4 mb-4">

          <div className="col-12 col-md-3">
            <div className="d-flex align-items-center gap-3 ">
              <Image
                src={image}
                alt="img"
                className="img-fluid w-auto"
              />
            </div>
          </div>
          <div className="col-md-9 col-12 ">
            <div className='d-flex align-items-center justify-content-between'>
            <div>
              <h4 className="text-black fs-5">{category}</h4>
              <div className="d-flex gap-3">
                <div className="d-flex gap-1 pe-3 border-end border-2 border-black">
                  <span className="fs-4 fw-normal text-black text-nowrap ">Min Qty:</span>
                  <span className="fs-4 fw-bold text-black text-nowrap ">{`${quantity} Qty`}</span>
                </div>
                <div className="d-flex gap-1">
                  <span className="fs-4 fw-bold text-black text-nowrap ">{title}</span>
                </div>
              </div>
            </div>
            <div className=" icon-wrap btn btn-subtle-dark rounded-0 py-2 px-2  d-flex justify-content-center align-items-center " onClick={handleCartItems}>
              <Icon icon="mi:delete" className="fs-4" />
            </div>
            </div>
            
          </div>
    </div>
  )
}

export default CartCanvasItem
