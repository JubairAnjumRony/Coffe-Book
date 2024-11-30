import { NavLink, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

import Coffes from "../pages/Coffes";


const CoffeCards = () => {
    const navigate = useNavigate(); //this is used to navigate through pages
    const data = useLoaderData();   //this has all the 12 coffees
    // console.log('coffes are:',data);
    const {category} = useParams();  //params is used to to get the dynamic part and use it in component here we got three category name
    console.log(category );
    const [coffees,setCoffees] = useState([])
    useEffect(() =>{
        if(category) {
          //filter by category if a category is specified int the params
            const filterByCategory = [...data].filter(
                coffee => coffee.category === category)
                setCoffees(filterByCategory);
            }
            else{
                
                setCoffees(data.slice(0,6));    //show first 6 items when no Category is selected
            }
            
        } ,[category,data])    //dependency means which things are outside of this useEffect()

       
        
    return (
        <>
        <div className="grid grid-cols-3 gap-4 my-12 px-4">
            {
     coffees.map(coffee => (<Card
     key={coffee.id}
     coffee={coffee}/>)

     )
    }

        </div>
        <button className="btn btn-warning" onClick={() =>navigate('/coffes')}>view All</button>     
        {/* setCoffees(data) to show all coffes in the homepage */}

        </>
    );
};

export default CoffeCards;