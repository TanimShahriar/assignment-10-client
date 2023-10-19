

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "./Navbar";

const UpdateProduct = () => {

  const product = useLoaderData();
  const { _id, name, rating, brand, price, type, details, photo } = product;

  const handleUpdateProduct = event => {

    event.preventDefault();


    const form = event.target;

    const name = form.name.value;
    const rating = form.rating.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const type = form.type.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedProduct = { name, rating, brand, price, type, details, photo };
    console.log(updatedProduct);

    //send data to the server
    fetch(`http://localhost:5000/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedProduct)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Product updated successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })


  }


  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto p-10 rounded-lg shadow-xl border">
        <h2 className="text-2xl text-center font-semibold my-5">We are going to update product in this section</h2>
        <form onSubmit={handleUpdateProduct}>
          {/* name and shape row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="">

                <input type="text" placeholder="Product name" name="name" defaultValue={name} className="input input-bordered w-72 lg:w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="">

                <input type="text" placeholder="Rating" name="rating" defaultValue={rating} className="input input-bordered w-72 lg:w-full" />
              </label>
            </div>
          </div>
          {/* supplier and taste row  */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <label className="">

                <input type="text" placeholder="Brand" name="brand" defaultValue={brand} className="input input-bordered w-72 lg:w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="">

                <input type="text" placeholder="Price" name="price" defaultValue={price} className="input input-bordered w-72 lg:w-full" />
              </label>
            </div>
          </div>

          <div className="md:flex gap-5 mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <label className="">

                <input type="text" placeholder="Type" name="type" defaultValue={type} className="input input-bordered w-72 lg:w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="">

                <input type="text" placeholder="Details" name="details" defaultValue={details} className="input input-bordered w-72 lg:w-full" />
              </label>
            </div>
          </div>
          {/* photo URL row */}
          <div className=" mb-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <label className="">

                <input type="text" placeholder="Enter Photo URL" name="photo" defaultValue={photo} className="input input-bordered w-72 lg:w-full" />
              </label>
            </div>

          </div>
          <input type="submit" value="Update Product" className="px-4 py-3 bg-green-500 my-5 w-full rounded-md font-medium cursor-pointer" />


        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;

