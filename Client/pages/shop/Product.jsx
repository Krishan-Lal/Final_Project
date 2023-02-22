import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import "./Product.css";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="card d-flex align-items-center p-3 m-5 shadow">
      <img src={`./pages/images/${productImage}`} className="card-img-top pImg" />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">${price}</p>
        <a className="btn btn-outline-dark" onClick={() =>
          addToCart(id)}>Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</a>
      </div>
    </div>
  );
};