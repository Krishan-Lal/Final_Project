import Axios from 'axios';
import React, { useState, useEffect } from "react";
import { Navbar } from "../../src/components/Navbar";
import { Product } from "../shop/Product";

export const Shop = () => {

  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await Axios.get("http://localhost:3000/products");
    setData(response.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <section>
        <h1><center> ReactMart.com </center></h1>
        <div className='products gap-5'>
          {data.map((product) => (
            <Product data={product} key={product.id} />
          ))}
        </div>
      </section>
    </div>
  );
}