import { useLoaderData, useParams } from "react-router-dom";

import Navbar from "./Navbar";
import Swal from "sweetalert2";



const FullDetails = () => {

  const fullDetails = useLoaderData();
  console.log(fullDetails);


  const handleToAddCart = (details) => {


    const name = details.name;
    const rating = details.rating;
    const brand = details.brand;
    const price = details.price;
    const detailss = details.details;
    const type = details.type;
    const photo = details.photo;

    const addtocart = { name, rating, brand, price, type, details: detailss, photo };
    console.log(addtocart);

    //send data to the server
    fetch("http://localhost:5000/addtocart", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(addtocart)
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


  const { _id } = useParams();
  const details = fullDetails.find(details => details._id == _id);
  console.log(details);

  return (


    <div className="mb-5">
      <Navbar></Navbar>
      <div className="shadow-lg p-5 rounded-lg mx-auto max-w-screen-2xl">

        <img src={details.photo} alt="" />
        <h2 className="my-5">{details.name}</h2>
        <h2 className="my-5">{details.brand}</h2>
        <h2 className="my-5">{details.price}</h2>
        <h2 className="my-5">{details.type}</h2>
        <div className="flex justify-between">
          <button onClick={() => handleToAddCart(details)} className="btn btn-primary">Add to cart</button>

        </div>
      </div>
    </div>





  );
};

export default FullDetails;