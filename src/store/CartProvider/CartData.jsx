"use client"

import { PRODUCTS } from "@/api/Products/products";

const { createContext, useState, useContext } = require("react");
const ProductContext = createContext(null);

export const ProductProvider = (props) => {
    const [allProducts , setallProducts] = useState(PRODUCTS);
    const [cartData , setCartData] = useState([]);
    return(
        <ProductContext.Provider value={{
            value:allProducts,
            setallProducts,
            cartvalue:cartData,
            setCartData
        }}>
           {props.children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => {
    return (useContext(ProductContext));
}