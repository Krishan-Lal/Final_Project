import React from "react";
import { useNavigate } from 'react-router-dom';
import "../login/Login.css"

export const Thankyou = () => {

  const navigate = useNavigate();

  function home() {
    navigate('/');
    window.location.reload(false);
  };

  return (
    <div>
      <div className="login">
        <div>
          <h1>Thank you for shopping</h1>
          <h3>See you again</h3>
          <button onClick={home}>Logout</button>
        </div>
      </div>
    </div>
  );
}