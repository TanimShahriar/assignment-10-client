import { useContext, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext, auth } from './AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail, signOut } from 'firebase/auth';
import Navbar from './Navbar';
// import { getAuth } from "firebase/auth";

const SignIn = () => {

  const { user } = useContext(AuthContext);

  const [signInError, setSignInError] = useState('');
  const [success, setSuccess] = useState('');
  const [displayUser, setDisplayUser] = useState('');
  const emailRef = useRef(null);
  console.log(displayUser);
  // const auth = getAuth();
  const { signIn } = useContext(AuthContext);
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  console.log("Location in the login page", location);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    console.log(email, password);

    setSignInError('');
    setSuccess('');

    signIn(email, password)
      .then(result => {
        console.log(result.user);
        setDisplayUser(notify());

        navigate(location?.state ? location.state : '/');

        if (result.user.emailVerified) {
          setSuccess("User logged in successfully");
        }

        // else {
        //   alert("Please verify your email address");
        // }
      })


      .catch(error => {
        console.error(error.message);
        setSignInError(notify());
      })

  }

  const notify = () => {
    toast("Email/Password doesn't match")
  }


  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user);
        setDisplayUser(result.user)
      })
      .catch(error => {
        console.error(error.message)
      })

  }


  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log("sent reset email", emailRef.current.value);
      return;

    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      console.log("Please provide valid email");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check your email")
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(result => {
        console.log(result);
        setDisplayUser(null);
      })
      .catch(error => {
        console.log(error.message);
      })
  }




  return (
    <div className="mt-5 ">

      <Navbar></Navbar>

      <div className="max-w-3xl h-[700px] mx-auto p-10 rounded-lg mt-5 shadow-lg border">


        <h2 className="text-center text-4xl font-semibold mt-5 mb-7  ">Sign in to your account</h2> <hr />
        <form onSubmit={handleSignIn} className=" mx-auto space-y-4 ">
          <div className="flex flex-col justify-center gap-4 ">
            <label className="text-xl font-semibold mt-6" htmlFor="">E-mail Address</label>
            <input className="px-4 py-4 rounded bg-slate-100" type="email" name="email" ref={emailRef} placeholder="Enter your email address" id="" required />
            <label className="text-xl font-semibold" htmlFor="">Password</label>
            <input className="px-4 py-4 rounded bg-slate-100" type="password" name="password" placeholder="Enter your password" id="" required />

          </div>

          <p>Forgot password? <span onClick={handleResetPassword} className="cursor-pointer text-cyan-700 underline">Reset password</span></p>


          <button className="w-full"> <input className="bg-slate-100 cursor-pointer font-medium px-4 py-4 w-full rounded-md hover:bg-slate-400 hover:text-black duration-200" type="submit" value="Sign in" /></button>

          <p className="text-center mt-4 text-lg font-medium">Don't Have an Account? <Link to='/signup' className="text-blue-700 font-medium underline">Sign up</Link></p>

          <p className="text-center">-------  or  -------</p>

          <input onClick={handleGoogleSignIn} className="bg-slate-100 cursor-pointer font-medium px-4 py-3 hover:bg-slate-400 hover:text-black duration-200 w-full mb-4 rounded-md" type="submit" value="Sign in with Google" />

        </form>

        {
          signInError &&
          <div>
            <h2 className="text-lg text-center font-semibold text-red-700">{signInError}</h2>
          </div>
        }

        {
          success &&
          <div>
            <h2 className="text-lg text-center font-semibold text-green-700">{success}</h2>
          </div>
        }

      </div>








      <ToastContainer />

    </div >
  );
};

export default SignIn;