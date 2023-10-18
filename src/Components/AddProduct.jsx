import Swal from "sweetalert2";
import Navbar from "./Navbar";


const AddProduct = () => {
  const handleAddProduct = event => {
    event.preventDefault();


    const form = event.target;

    const name = form.name.value;
    const rating = form.rating.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const details = form.details.value;
    const type = form.type.value;
    const photo = form.photo.value;

    const newProduct = { name, rating, brand, price, type, details, photo };
    console.log(newProduct);

    //send data to the server
    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Product added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })

  }




  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto p-10  shadow-xl border rounded-lg">
        <h2 className="text-2xl text-center font-semibold my-5">Add Product</h2>
        <form onSubmit={handleAddProduct}>

          <div className="md:flex gap-5 mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="">

                <input type="text" placeholder="Product name" name="name" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="">

                <input type="text" placeholder="User Rating" name="rating" className="input input-bordered w-full" />
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

                <input type="text" placeholder="Brand" name="brand" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="">

                <input type="text" placeholder="Price" name="price" className="input input-bordered w-full" />
              </label>
            </div>
          </div>
          {/* category and details row*/}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <label className="">

                <input type="text" placeholder="Type" name="type" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="">

                <input type="text" placeholder="Details" name="details" className="input input-bordered w-full" />
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

                <input type="text" placeholder="Enter Photo URL" name="photo" className="input input-bordered w-full" />
              </label>
            </div>

          </div>
          <input type="submit" value="Add Product" className="px-4 py-3 bg-[#D2B48C] my-5 w-full rounded-md font-medium cursor-pointer" />


        </form>
      </div>
    </div>
  );
};

export default AddProduct;