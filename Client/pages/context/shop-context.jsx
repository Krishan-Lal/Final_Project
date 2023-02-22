import React, { useState, useEffect, createContext } from "react";
import Axios from 'axios';

export const ShopContext = createContext(null);

const getDefaultCart = () => {

    let cart = {};
    for (let i = 1; i < 9 + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {

    const [data, setData] = useState([]);

    const [itemcount, setItemcount] = useState(0);

    const loadData = async () => {
        const response = await Axios.get("http://localhost:3000/products");
        setData(response.data);
    };
    useEffect(() => { loadData(); }, []);

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = data.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount.toFixed(2);
    };
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        setItemcount(itemcount + 1);
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        setItemcount(itemcount - 1);
    };
    const contextValue = { cartItems, addToCart, removeFromCart, getTotalCartAmount, itemcount };
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};