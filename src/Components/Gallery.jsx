import { Link } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const Gallery = () => {
  return (

    <div className="mt-10">
      <h2 className="text-center text-3xl font-semibold underline mb-5">Photo Gallery</h2>
      <Link to='/'> <button className="flex items-center gap-3 px-2 lg:px-7 ml-4 py-1 lg:py-3 bg-green-500 text-white font-medium text-xl"> <BsFillArrowLeftSquareFill className="text-xl"></BsFillArrowLeftSquareFill>Back to Home</button></Link>
      <div className="grid lg:grid-cols-3 gap-3 p-4">
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/rtQSYrB/T650i.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/qDySKn9/T-650i.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/MsyTXBQ/ps4.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/BCdCprT/slider-1.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/8mhjW1k/sony-cametature.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/MBhP7q4/9425704-801.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/Nmnj2QW/isometric-set.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/HNzBYxK/iWatch.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/YtwT08R/iMac.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/qNTjpvW/videogames1.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/gy81Hpw/washer50.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/5hH4tzj/samsung-Monitopr0x550.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/FnSLrF8/LGDesktop.webp" alt="" />

        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/nByV2Kd/LG-fridge-D.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/RpDtg3c/Gallery-23.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/r42DsPc/Gallery-24.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/ZM9DF2X/Gallery-31.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/41w5HBY/Gallery-32.jpg" alt="" />

        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/zGyZMqg/Gallery-33.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/sggyXp2/Gallery-34.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/TPzff9z/Gallery-35.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/3d1Kbhg/Gallery-16.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/M5D16Yc/Gallery-25.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/P15mCYS/Gallery-22.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/3yQKwTp/Gallery-21.jpg" alt="" />



      </div>

    </div>


  );
};

export default Gallery;