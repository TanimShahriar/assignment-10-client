/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Category = ({ category }) => {

  const { id, brand, image } = category;

  return (
    <Link className={`rounded-lg border-purple-600 border cursor-pointer`}>
      <figure><img className="w-full h-48 lg:h-72" src={image} alt="Shoes" /></figure>
      <div className="">

        <p className=" mx-4 mb-4 mt-2 font-medium text-2xl">{brand}</p>


      </div>
    </Link>
  );
};

export default Category;

