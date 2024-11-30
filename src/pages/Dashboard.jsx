import Heading from "../components/Heading";
import {useState,useEffect} from 'react'
import Card from '../components/Card'
import {getAllFavourities,removeFavorite} from '../Utils'



const Dashboard = () => {

    const [coffees,setCoffees] = useState([])
    useEffect(()=>{
       const favorites = getAllFavourities();
       setCoffees(favorites)

    },[])

    const handleRemove = (id)=>{
       removeFavorite(id)


       const favorites = getAllFavourities()  /*this two lines make sure that card also removes from react dom */
       setCoffees(favorites)
    }
    
    return (
        <>
        <div>
            <Heading
            title='Welcome to Dashboard'
            subtitle='Manage coffes that you have previously added as favorite.You can view or remove from here.'
            
            />
        </div>

 <div className="grid grid-cols-3 gap-4 my-12 px-4">
{
   coffees.map(coffee => (<Card
   key={coffee.id}
   handleRemove={handleRemove}
   coffee={coffee}/>)

  )
  }

    </div>
   </>
    );
};

export default Dashboard;