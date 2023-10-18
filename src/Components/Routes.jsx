import { createBrowserRouter } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ErrorPage from "./ErrorPage";
import Root from "./Root";
import Home from "./Home";
import Categories from "./Categories";
import AddProduct from "./AddProduct";


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
      // {
      //   path: "/categories",
      //   element: <Categories></Categories>,
      //   loader: () => fetch('/categories.json')
      // },

      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>
      }

    ]
  },
]);

export default router;



