import Banner from "./Banner";
import Categories from "./Categories";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Services from "./Services";
import Testimonial from "./Testimonial";
;

const Home = () => {

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Categories></Categories>
      <Services></Services>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;