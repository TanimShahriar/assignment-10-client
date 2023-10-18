import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./Cart";


const MyCart = () => {
  const products = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-screen-2xl mx-auto grid grid-cols-2 gap-4'>
        {
          products.map(product => <Cart key={product._id} product={product}></Cart>)
        }
      </div>
    </div>
  );
};

export default MyCart;