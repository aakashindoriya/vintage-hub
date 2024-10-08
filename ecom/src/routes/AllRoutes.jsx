import { createBrowserRouter } from "react-router-dom";
import HomeWrapper from "./HomeWrapper";
import Home from "../pages/Home";
import {RouterProvider} from 'react-router-dom'


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


const AllRoutes = () => {
    return <RouterProvider router={router}></RouterProvider>
  }
  
  export default AllRoutes