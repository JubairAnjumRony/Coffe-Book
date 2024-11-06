import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";


const Coffes = () => {
    const data = useLoaderData();
    const[coffees,setCoffes] =useState(data);
    const handleSort = sortBy=>{
        if(sortBy =='popularity'){
        //  sort by popularity
        const sorted = [...data].sort((a,b) =>a.popularity-b.popularity)
        setCoffes(sorted);
        }else if(sortBy =='rating'){
            // sort by rating asc
            const sorted1 = [...data].sort((a,b)=>b.rating-a.rating)
            setCoffes(sorted1);
        }

    }
    return (
     <>    
            
            <div className="flex justify-between items-center my-12">
                <div>
                    <h1 className="text-3xl font-thin">
                        Sort Coffe &apos; by Populartity and Rating-&gt;
                    </h1>
                </div>
                <div className="space-x-4">
                    <button className="btn btn-warning" onClick={()=>handleSort('popularity')}>Sort By Popularity</button>
                    <button className="btn btn-warning " onClick={()=>handleSort('rating')}>Sort By Rating</button>
                </div>
            </div>
           
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
           { coffees.map(coffee => (<Card
            key={coffee.id}
            coffee={coffee}/>)
       
            )
        }
         </div> 
     </>
    )
};

export default Coffes;