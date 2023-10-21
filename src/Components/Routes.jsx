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
import PrivateRoute from "./PrivateRoute";
import CategoryDetails from "./CategoryDetails";
import FullDetails from "./FullDetails";
import Gallery from "./Gallery";



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
        path: "/categories/:id",
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
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },

      {
        path: "/myCart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/addtocart")
      },
      {
        path: "myCart/updateProduct/:id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: '/categoryDetails/:id',
        loader: () => fetch("http://localhost:5000/product"),
        element: <CategoryDetails></CategoryDetails>
      },
      {
        path: '/categoryDetails/:id/updateProduct/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      }
      ,
      {
        path: '/fullDetails/:_id',
        element: <PrivateRoute><FullDetails></FullDetails></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>
      }


    ]
  },
]);

export default router;



