import { Link } from "react-router-dom";

const Banner = () => {
  return (

    <div className="relative carousel w-full">

      <div id="slide1" className="carousel-item relative lg:w-full z-0">
        <div className="hero h-80 w-[390px] lg:w-full lg:h-[700px] mb-20" style={{ backgroundImage: 'url(https://i.ibb.co/rwc22Rx/smartprix.png)' }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-2xl lg:text-5xl w-[350px] lg:w-[550px] mx-auto font-bold">Exotic product at your doorstep</h1>
              <p className="mb-5 w-[345px] lg:w-[700px]">Welcome to Quotient, the ultimate online resource for all your celebratory needs. From the exuberance of birthday parties to the elegance of wedding ceremonies and the enduring love of anniversaries.</p>
              <button className="px-3 lg:px-5 py-1 lg:py-2 rounded-md bg-green-500 text-white border-0 capitalize">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>


      <div id="slide2" className="carousel-item relative lg:w-full">
        <div className="hero h-80 w-[390px] lg:w-full lg:h-[700px] mb-20" style={{ backgroundImage: 'url(https://i.ibb.co/WHHqGdC/TV.jpg)' }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-2xl lg:text-5xl w-[350px] lg:w-[550px] mx-auto font-bold">Exotic product at your doorstep</h1>
              <p className="mb-5 w-[345px] lg:w-[700px]">Welcome to Quotient, the ultimate online resource for all your celebratory needs. From the exuberance of birthday parties to the elegance of wedding ceremonies and the enduring love of anniversaries.</p>
              <button className="px-3 lg:px-5 py-1 lg:py-2 rounded-md bg-green-500 text-white border-0 capitalize">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative lg:w-full">
        <div className="hero h-80 w-[390px] lg:w-full lg:h-[700px] mb-20" style={{ backgroundImage: 'url(https://i.ibb.co/2WZgh22/apple-full-product-suite-sept-2023.png)' }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-2xl lg:text-5xl w-[350px] lg:w-[550px] mx-auto font-bold">Exotic product at your doorstep</h1>
              <p className="mb-5 w-[345px] lg:w-[700px]">Welcome to Quotient, the ultimate online resource for all your celebratory needs. From the exuberance of birthday parties to the elegance of wedding ceremonies and the enduring love of anniversaries.</p>
              <button className="px-3 lg:px-5 py-1 lg:py-2 rounded-md bg-green-500 text-white border-0 capitalize">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>



    </div>


  );
};

export default Banner;