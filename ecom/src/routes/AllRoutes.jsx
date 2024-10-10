import { createBrowserRouter } from "react-router-dom";
import HomeWrapper from "./HomeWrapper";
import Home from "../pages/Home";
import SignupCard from '../pages/LoginSignup';
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import ProtectedRoute from "../component/ProtectedRoute";
import Profile from "../pages/Profile";
import SingleProduct from "../pages/SingleProduct"; 
import SingleBlog from "../pages/blogs/SingleBlog";
import Blogs from "../pages/blogs/Blogs";
import Contact from "../pages/Contact";
import Messages from "../pages/Messages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeWrapper val={false} />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/products",
                element: <HomeWrapper val={true} />,
                children:[
                    {
                        path: ":id",
                        element: <SingleProduct />
                    },
                    {
                        index:true,
                        element:<Products/>
                    }
                ]
            },
            {
                path: "/cart",
                element: <HomeWrapper val={true} />,
                children:[
                    {
                        index:true,
                        element:<Cart/>
                    }
                ]
            },
            {
                path: "/blogs",
                element: <HomeWrapper val={true} />,
                children:[
                    {
                        index:true,
                        element:<Blogs/>
                    },
                    {
                        path:':id',
                        element:<SingleBlog/>
                    }
                ]
            },
            {
                path: "/login",
                element: <HomeWrapper val={true} />,
                children:[
                    {
                        index:true,
                        element:<SignupCard/>
                    }
                ]
            },
            {
                path: "/profile",
                element: (
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                )
            },{
                path:"/contact",
                element:<Contact />
            },{
                path:"/message",
                element:<Messages />
            }
        ]
    }
]);

export default router;
