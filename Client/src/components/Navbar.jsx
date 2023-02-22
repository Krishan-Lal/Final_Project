import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../pages/context/shop-context";
import { name } from "../../pages/login/Login";
import "./Navbar.css";

export const Navbar = () => {

    const { itemcount } = useContext(ShopContext);

    return (
        <div className="sticky-top">
            <nav className="p-3 navbar bg-dark shadow" data-bs-theme="dark">
                <h1>Welcome {name}</h1>
                <div>
                    <div className="d-flex justify-content-end">
                        <Link to="/Shop">
                            <button className="badge text-bg-light">Home</button>
                        </Link>
                        <Link to="/">
                            <button className="badge bg-secondary">Logout</button></Link>
                    </div>
                    <Link to="/cart">
                        <span><i className="fa fa-shopping-cart"> Checkout ({itemcount})</i></span>
                    </Link>
                </div>
            </nav>
        </div>
    );
};