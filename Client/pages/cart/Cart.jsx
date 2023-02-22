import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/shop-context";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
import { Navbar } from "../../src/components/Navbar";
import Axios from 'axios';

export const Cart = () => {

    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await Axios.get("http://localhost:3000/products");
        setData(response.data);
    };

    useEffect(() => { loadData(); }, []);

    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    return (
        <div>
            <Navbar />
            <div>
                <h1><center> Your Cart Items </center></h1>
            </div>
            <div>
                {data.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} key={product.id} />;
                    }
                })}
            </div>
            <div>
                {totalAmount > 0 ?
                    <div className="d-flex flex-row mb-3 justify-content-center m-3">
                        <h4>Subtotal: ${totalAmount}</h4>
                        <span><br />
                            <Link to="/Shop">
                                <button className="btn btn-dark m-3"> Continue Shopping </button>
                            </Link>
                            <Link to="/Thankyou">
                                <button className="btn btn-dark"> Checkout </button>
                            </Link>
                        </span>
                    </div>
                    : <h1><center> Your cart is Empty </center></h1>}
            </div>
        </div>
    );
}