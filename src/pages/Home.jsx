import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";



const Home = () => {
    const categories =useLoaderData()
    return (
        <div>
    
        <Banner/>
        {/* Hero section */}

        {/* <Heading title={'This is a title'} subtitle={'This is a subtitle'}/> */}

        {/* Another way to do this */}

        
        <Heading title='Browse Coffe by category'
        subtitle = 'Choose your desired coffe category through specific coffes fit in your taste'/>

        {/* Categories section */}

      <Categories categories={categories}/>
        {/* Dynamic nested componenets */}
        <Outlet/>
        </div>
    );
};

export default Home;