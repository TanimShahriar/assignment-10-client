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
import FullDetail from "./FullDetail";


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
        element: <MyCart></MyCart>,
        loader: () => fetch("http://localhost:5000/addtocart")
      },
      {
        path: "myCart/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: '/categoryDetails/:id',
        loader: () => fetch("http://localhost:5000/product"),
        element: <CategoryDetails></CategoryDetails>
      },
      {
        path: '/categoryDetails/:id/updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      }
      ,
      {
        path: '/fullDetails/:_id',
        element: <FullDetails></FullDetails>,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: '/fullDetail',
        element: <FullDetail></FullDetail>,

      }



    ]
  },
]);

export default router;



