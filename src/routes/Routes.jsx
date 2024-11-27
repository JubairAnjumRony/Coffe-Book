import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Coffes from "../pages/Coffes";
import Dashboard from "../pages/Dashboard";
import CoffeCards from "../components/CoffeCards";
import CoffeDetails from "../pages/CoffeDetails";

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
                        element: <CoffeCards/>,
                        loader: ()=> fetch('../coffees.json'),
                 },

                 {
                    path: '/',
                    element: <CoffeCards />,
                    loader: () => fetch('../coffees.json'),
                  },
                ],
            },
            {
                path:'/coffes',
                element:<Coffes />,
                loader: ()=>fetch('../coffees.json')
            },
            {
                path:'/dashboard',
                element:<Dashboard/>
            },
            {
                path:'/coffee/:id',
                element:<CoffeDetails/>,
                loader: ()=>fetch('../coffees.json')
            }
       
       
     ]

    }
])
export default routes;