import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./Cart";
import { useState } from "react";


const MyCart = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);

  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-screen-2xl mx-auto grid  lg:grid-cols-2 gap-4'>
        {
          products.map(product => <Cart key={product._id} products={products} setProducts={setProducts} product={product}></Cart>)
        }
      </div>
    </div>
  );
};

export default MyCart;