// import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";




const Navbar = () => {


  const { user, setUser, signOutt } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutt()
      .then(result => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch(error => {
        console.log(error.message);
      })
  }


  const navLinks = <>

    <NavLink className="focus:bg-green-600 px-3 py-1 text-lg font-semibold rounded-md focus:text-white" to='/'>Home</NavLink>
    <NavLink className="focus:bg-green-600 px-3 py-1 text-lg font-semibold rounded-md focus:text-white" to='/gallery'>Gallery</NavLink>
    <NavLink className="focus:bg-green-600 px-3 py-1 text-lg font-semibold rounded-md focus:text-white" to='/addProduct'>Add Product</NavLink>
    <NavLink className="focus:bg-green-600 px-3 py-1 text-lg font-semibold rounded-md focus:text-white" to='/myCart'>My Cart</NavLink>


    <NavLink className="focus:bg-green-600 px-3 py-1 text-lg font-semibold rounded-md focus:text-white" to='/signup'>Sign Up</NavLink>


  </>



  return (

    <div>

      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <Link to="/"><img className="h-12 lg:h-24" src="https://i.ibb.co/93X2qrK/tech-logo.jpg" alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {
            user ?
              <img className="h-12 w-12 rounded-full" src={user.photoURL} alt="" />
              :
              <CgProfile className="text-2xl md:text-4xl lg:text-5xl cursor-pointer"></CgProfile>
          }
          {
            user ?
              <div className="flex items-center gap-1">

                <h2 className="text-center text-sm lg:text-lg font-medium lg:font-semibold">{user.displayName}</h2>
                <button onClick={handleSignOut} className="text-sm lg:text-base text-white font-light lg:font-semibold px-2 lg:px-5 py-1 lg:py-2 bg-blue-600 rounded-md">Sign out</button>
                <h2></h2>
              </div>
              :
              <Link to='/signin'>
                <button className="text-sm lg:text-base text-white font-semibold px-2 py-1 lg:px-6 lg:py-2 bg-green-600 rounded-md">Sign in</button>
              </Link>
          }




        </div>
      </div>

    </div>

  );
};

export default Navbar;