
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from './Navbar';
import Cart from "./Cart";


const CategoryDetails = () => {
  const categoryDetails = useLoaderData();
  const params = useParams();
  const lowerParams = (params.id.toLocaleLowerCase());
  console.log(lowerParams);

  return (
    <div>
      <Navbar></Navbar>

      <div className="carousel max-w-screen-sm lg:max-w-screen-2xl h-40 lg:h-[750px] border">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/nByV2Kd/LG-fridge-D.jpg" className="w-[1560px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>

        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/FnSLrF8/LGDesktop.webp" className="w-[1560px] " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/Wcsr3X0/sliderc.jpg" className="w-[1560px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/DVjMQvk/6804357-27090.jpg" className="w-[1560px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>


      </div>


      <div className='max-w-screen-2xl mx-auto grid  lg:grid-cols-3 gap-2'>
        {
          categoryDetails.filter((card => { return lowerParams == card.brand.toLocaleLowerCase() })).map(product => <Cart key={product._id} product={product}></Cart>)
        }
      </div>

    </div>
  );
};

export default CategoryDetails;



