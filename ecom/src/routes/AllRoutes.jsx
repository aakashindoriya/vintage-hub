import { createBrowserRouter } from "react-router-dom";
import HomeWrapper from "./HomeWrapper";
import Home from "../pages/Home";


const router=createBrowserRouter([
    {
        path:"/",
        element:<HomeWrapper />,
        children:[
            {
                index:true,
                element:<Home />
            }
        ]
    }
])