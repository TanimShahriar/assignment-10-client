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
      <h2 className="text-center text-4xl font-bold mb-10">Welcome to Brand Shop</h2>
      <p className="text-center max-w-screen-lg mx-auto">Festival and cultural event planners curate immersive experiences that celebrate art, music, food, and traditions. These events can vary widely, from food festivals and film festivals to cultural parades and heritage celebrations. Event managers ensure a vibrant atmosphere, artist bookings, logistics, and safety.</p>
      <div className='grid lg:grid-cols-3 p-1 lg:p-2  gap-4 container mx-auto my-5'>
        {
          categories.map(category => <Category key={category.id} category={category}></Category>)
        }
      </div>

    </div>
  );
};

export default Categories;