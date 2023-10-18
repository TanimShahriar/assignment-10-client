/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Category = ({ category }) => {

  const { id, brand, image } = category;

  return (
    <Link className={`rounded-lg border-purple-600 border cursor-pointer`}>
      <figure><img className="w-full h-48 lg:h-72" src={image} alt="Shoes" /></figure>
      <div className="">

        <p className=" mx-4 mb-4 mt-2 font-medium text-2xl">{brand}</p>


        {/* {
          description.length > 210 ?
            <p className='mt-4 mx-4 mb-4 flex flex-col gap-4'>{description.slice(0, 210)}.... <Link to={`/categories/${id}`} className='text-orange-600'><button className="flex items-center gap-3 px-2 lg:px-6 py-1 lg:py-2 bg-[#D72050] text-white font-medium text-xl">Details..</button></Link></p>
            : <p> {description}</p>
        } */}






      </div>
    </Link>
  );
};

export default Category;

