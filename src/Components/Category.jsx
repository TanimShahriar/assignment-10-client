/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Category = ({ category }) => {

  const { id, brand, image } = category;

  return (
    <Link to={`/categoryDetails/${brand}`} className={`rounded-lg bg-green-500  shadow-lg cursor-pointer`}>
      <figure><img className="w-full h-44 lg:h-64 " src={image} alt="Shoes" /></figure>
      <div className="">

        <p className=" mx-4 mb-4 mt-2 font-medium text-2xl">{brand}</p>


      </div>
    </Link>
  );
};

export default Category;

