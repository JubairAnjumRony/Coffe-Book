import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Coffes from "../pages/Coffes";
import Dashboard from "../pages/Dashboard";
import CoffeCards from "../components/CoffeCards";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/category/:category',
                        element: <CoffeCards/>
                    },
                ],
            },
            {
                path:'/coffes',
                element:<Coffes />
            },
            {
                path:'/dashboard',
                element:<Dashboard/>
            }
       
       
     ]

    }
])
export default routes;