import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <div className="h-12">
            <Navbar/>
            </div>
            <div className="min-h-[calc(100vh-228px)] py-12 container mx-auto px-12"> 
                <Outlet/>
                </div>{/* Dynamic section */}
            {/* Footer section */}
            <Footer/>
        </div>
    );
};

export default MainLayout;