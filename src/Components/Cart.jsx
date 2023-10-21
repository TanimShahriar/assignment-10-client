import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Cart = ({ product, products, setProducts }) => {
  const { id, _id, name, photo, brand, price, type } = product;
  console.log(product);

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/addtocart/${_id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
              )
              const remaining = products.filter(pro => pro._id !== _id);
              setProducts(remaining);
            }

          })


      }
    })
  }


  return (
    <div className="m-1 p-4  gap-7 items-center border shadow-lg  rounded-lg">
      <img className="mb-3 w-32 lg:w-full h-20 lg:h-72" src={photo} alt="" />
      <div className=" space-y-1 ">
        <h2 className="font-medium">Model: {name}</h2>
        <h2 className="font-medium">Brand: {brand}</h2>
        <h2 className="font-medium">Price: {price} BDT</h2>
        <h2 className="font-medium">Type: {type}</h2>

      </div>
      <div>
        <div className=" flex  gap-4 mt-5">
          <Link to={`/fullDetails/${_id}`} className='text-orange-600'><button className="px-2 rounded-md lg:px-3 py-1 lg:py-2 bg-blue-600 text-white w-16 lg:w-20">Details..</button></Link>
          <Link to={`updateProduct/${_id}`}><button className="px-2 rounded-md lg:px-3 py-1 lg:py-2 bg-blue-600 text-white w-16 lg:w-20">Edit</button></Link>
          <button onClick={() => handleDelete(_id)} className="px-2 rounded-md lg:px-3 py-1 lg:py-2 bg-blue-600 text-white w-16 lg:w-20">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

