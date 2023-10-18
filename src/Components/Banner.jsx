import { Link } from "react-router-dom";

const Banner = () => {
  return (

    <div className="hero border-red-600 h-[60vh]" style={{ backgroundImage: 'url(https://i.ibb.co/rmZdRZm/Bannerr.jpg)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold">Welcome to,</h1>
          <h1 className="mb-5 text-3xl font-semibold text-green-500">Quotient Tech & Electronics</h1>
          <p className="mb-5">Welcome to The Quotient, the ultimate online resource for all your celebratory needs. From the exuberance of birthday parties to the elegance of wedding ceremonies and the enduring love of anniversaries, we are your go-to destination for planning, tips, and inspiration for these cherished events.</p>
          <Link to="/gallery"> <button className="px-2 lg:px-5 py-1 lg:py-2 bg-green-600 text-white cursor-pointer">Explore</button></Link>
        </div>
      </div>
    </div>


  );
};

export default Banner;