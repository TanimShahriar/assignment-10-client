import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Cart = ({ product }) => {
  const { _id, name, photo } = product;

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

        fetch(`http://localhost:5000/product/${_id}`, {
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
              // const remaining = productss.filter(pro => pro._id !== _id);
              // setProductss(remaining);
            }

          })


      }
    })
  }


  return (
    <div className="m-4 p-4 grid grid-cols-4 gap-7 items-center border-2 border-red-700 rounded-lg">
      <img src={photo} alt="" />
      <div className="col-span-2 space-y-3">
        <h2 className="font-medium">Name: {name}</h2>
      </div>
      <div>
        <div className="col-span-1 btn-group btn-group-vertical space-y-5">
          <button className="btn btn-active">View</button>
          <Link to={`updateProduct/${_id}`}><button className="btn">Edit</button></Link>
          <button onClick={() => handleDelete(_id)} className="btn">X</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

