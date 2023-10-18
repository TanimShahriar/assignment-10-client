import { createBrowserRouter } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ErrorPage from "./ErrorPage";
import Root from "./Root";
import Home from "./Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },

      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      }

    ]
  },
]);

export default router;



