import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./Cart";
import { useState } from "react";


const MyCart = () => {
  const products = useLoaderData();
  const [productss, setProductss] = useState([]);

  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-screen-2xl mx-auto grid grid-cols-2 gap-4'>
        {
          products.map(product => <Cart key={product._id} productss={productss} setProductss={setProductss} product={product}></Cart>)
        }
      </div>
    </div>
  );
};

export default MyCart;