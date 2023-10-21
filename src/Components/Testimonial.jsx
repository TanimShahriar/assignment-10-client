import { useEffect, useState } from "react";


const Testimonial = () => {

  const [categories, setCategories] = useState([]);


  useEffect(() => {

    fetch('testimonial.json')
      .then(res => res.json())
      .then(data => setCategories(data))

  }, [])


  return (
    <div className="flex justify-center mt-10 ">
      <div className="flex flex-col justify-center  my-10  space-y-28 lg:space-y-24 max-w-screen-2xl">
        <div className="flex flex-col justify-center items-center ">
          <div className="text-xl md:text-3xl text-green-500 font-bold uppercase">testimonials</div>
          <div className="border-b-4 border-green-500 -mt-2"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
          <div className="text-black text-center mt-5 max-w-screen-lg">Here we go, below some reviews of out clients say about our services. You can trust us and purchase our products.
          </div>
        </div>

        <div className='grid lg:grid-cols-3 p-1 lg:p-2  gap-4 container mx-auto my-5'>
          {
            categories.map(category => <div key={category.id}>


              <div className="bg-slate-200 shadow-lg flex flex-col justify-center items-center py-4 h-56 md:w-[80%] lg:w-fit">
                <div className="-mt-20 "><img src={category.image} className="rounded-full h-36 w-36" alt="" /></div>
                <p className="text-center text-sm p-5">{category.description}</p>
                <div className="flex flex-col lg:flex-row justify-center text-center lg:space-x-3">
                  <h1 className="text-green-500 text-lg font-semibold">{category.name}</h1>

                </div>
              </div>

            </div>)
          }
        </div>


      </div>
    </div>
  );
};

export default Testimonial;