import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/CheckOut/Bookings/Bookings";
import PrivetRoute from "../Privetroute/PrivetRoute";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/booking/:id',
                element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
            ,
            {
                path:'/bookings',
                element:<PrivetRoute><Bookings></Bookings></PrivetRoute>
            }
        ]
    }
])

export default router;