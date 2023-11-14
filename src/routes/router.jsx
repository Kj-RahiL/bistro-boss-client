import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Register/Login";
import SignUp from "../pages/Register/SignUp";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'menu',
            element: <Menu></Menu>
        },
        {
            path:'order/:category',
            element: <Order></Order>
        }
      ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/signUp',
        element:<SignUp></SignUp>
    }
  ]);