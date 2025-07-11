import { toast } from "react-toastify";
import { products } from "../assets/assets";
import { ShopContext } from "../context/ShopContext.jsx";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const ShopContextProvider = (props) => {
    const currency = '$';
    const shipping_charge = 10;

    const [search,setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(true);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async(itemId,size) => {

        if(!size){
            toast.error("Please select the size");
            return;
        }

        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            // If item already exists, increase quantity
            if(cartData[itemId][size])
                cartData[itemId][size] += 1;
            else
                cartData[itemId][size] = 1;
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        Object.values(cartItems).forEach(sizesObj => {
        Object.values(sizesObj).forEach(qty => {
            totalCount += qty;
            });
        });
        return totalCount;
    }

    const removeFromCart = (itemId, size) => {
        let cartData = structuredClone(cartItems);

        if (cartData[itemId] && cartData[itemId][size] !== undefined) {
            // Remove the size entry
            delete cartData[itemId][size];
            

        }

        setCartItems(cartData);
    };

    const increaseQuantity = (itemId,size) => {
        let cartData = structuredClone(cartItems);
        if(cartData[itemId] && cartData[itemId][size] !== undefined){
            cartData[itemId][size] += 1;
        }
        setCartItems(cartData)
    }

    const decreaseQuantity = (itemId,size) => {
        let cartData = structuredClone(cartItems);
        if(cartData[itemId] && cartData[itemId][size] !== undefined){
            cartData[itemId][size] -= 1;
            if(cartData[itemId][size] <= 0){
                delete cartData[itemId];
            }
        }
        setCartItems(cartData)
    }
    const value = {
        products, currency, shipping_charge,
        search, setSearch, showSearch, setShowSearch,
        addToCart, cartItems, setCartItems,
        getCartCount, removeFromCart, increaseQuantity, decreaseQuantity,
        navigate
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

// export default ShopContextProvider;