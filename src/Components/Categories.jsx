import { useEffect, useState } from "react";
import Category from "./Category";


const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    fetch('brand.json')
      .then(res => res.json())
      .then(data => setCategories(data))

  }, [])

  return (
    <div className="mt-16">
      <div className="flex flex-col justify-center items-center ">
        <div className="text-xl md:text-3xl text-green-500 font-bold capitalize">Welcome To Brand Shop</div>
        <div className="border-b-4 border-green-500 -mt-2"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
        <div className="text-black  text-center mt-5 max-w-screen-lg">Festival and cultural event planners curate immersive experiences that celebrate art, music, food, and traditions. These events can vary widely, from food festivals and film festivals to cultural parades and heritage celebrations. Event managers ensure a vibrant atmosphere, artist bookings, logistics, and safety.
        </div>
      </div>

      <div className='grid lg:grid-cols-3 p-1 lg:p-2  gap-5 container mx-auto my-5 '>
        {
          categories.map(category => <Category key={category.id} category={category}></Category>)
        }
      </div>

    </div>
  );
};

export default Categories;
