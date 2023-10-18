import { Link } from "react-router-dom";
// import Swal from "sweetalert2";


const Cart = ({ product }) => {
  const { _id, name, photo } = product;



  return (
    <div className="m-4 p-4 grid grid-cols-4 gap-7 items-center border-2 border-red-700 rounded-lg">
      <img src={photo} alt="" />
      <div className="col-span-2 space-y-3">
        <h2 className="font-medium">Name: {name}</h2>
      </div>
      <div>
        <div className="col-span-1 btn-group btn-group-vertical space-y-5">
          <button className="btn btn-active">View</button>
          <Link to={`updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
          <button className="btn">X</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
