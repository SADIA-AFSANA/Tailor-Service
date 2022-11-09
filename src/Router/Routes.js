import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Home/Home/Services/Services";
import Login from "../Pages/Login/Login";
import Review from "../Pages/Review/Review";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Signup from "../Pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/serviceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/review/:id',
                element: <Review></Review>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '*',
                element: <p className="text-bold text-5xl ">not found</p>
            }
        ]

    },
]);

export default router;