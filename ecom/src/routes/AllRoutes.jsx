import { createBrowserRouter } from "react-router-dom";
import HomeWrapper from "./HomeWrapper";
import Home from "../pages/Home";
import SignupCard from '../pages/LoginSignup'
import {RouterProvider} from 'react-router-dom'



const router=createBrowserRouter([
    {
        path:"/",
        element:<HomeWrapper />,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:"/login",
                element: <SignupCard/>
            }
        ]
    }
])
export default router;
