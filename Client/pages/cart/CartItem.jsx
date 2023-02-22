import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-row align-items-center mb-3 card shadow w-50 p-5">
        <img src={`./pages/images/${productImage}`} className="card-img-top pImg" />
        <div className="card-body">
          <h3 className="card-title">{productName}</h3>
          <h5 className="card-text">${price}</h5>
          <div>
            <button onClick={() => removeFromCart(id)}>-</button>
            <input type="text" value={cartItems[id]} readOnly className="text-center disabled" />
            <button onClick={() => addToCart(id)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}