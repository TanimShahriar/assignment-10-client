import { createBrowserRouter } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ErrorPage from "./ErrorPage";
import Root from "./Root";
import Home from "./Home";
import Categories from "./Categories";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import MyCart from "./MyCart";


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
        path: "/categories",
        element: <Categories></Categories>,
      },

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
      },

      {
        path: "/myCart",
        element: <MyCart></MyCart>,
        loader: () => fetch("http://localhost:5000/product")
      },
      {
        path: "myCart/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      },

    ]
  },
]);

export default router;



