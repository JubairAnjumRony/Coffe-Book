import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import  { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <div>
             <Toaster />
            {/* Navbar */}
            <div className="h-12">
            <Navbar/>
            </div>
            <div className="min-h-[calc(100vh-228px)] py-12 container mx-auto px-12"> 
                <Outlet/>   {/* Dynamic section */}
                </div>          
      
            <Footer/>
        </div>
    );
};

export default MainLayout;