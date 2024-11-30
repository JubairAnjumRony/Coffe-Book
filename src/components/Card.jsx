import { Link } from "react-router-dom";
import { useLocation } from 'react-router'
import { IoTrashBinOutline } from "react-icons/io5";

const Card = ({coffee,handleRemove}) => {
    const  {name,image,category,origin,type,id,rating,popularity} = coffee || {}
       const {pathname}  = useLocation();
      console.log(location);
    return (

        <div className='flex relative'>

            <Link to={`/coffee/${id}`}   /*this sets path to coffe details when clicked on a card */
            className='transition hover:scale-105 shadow-xl rounded-xl overflow-hidden'>

               <figure className='w-full h-48 overflow-hidden'>
                <img className='' src={image} alt=""></img>
                </figure>
                <div className='p-4'>
                    <h1 className='text-xl'>Name:{name}</h1>
                    <p>Category: {category}</p>
                    <p>Type: {type}</p>
                    <p>Origin: {origin}</p>
                    <p></p>Rating: {rating}
                    <p>Poplular:{popularity}</p>
                    
                    </div> 
                  
            </Link>
             {pathname == '/dashboard' && (<div onClick={()=>handleRemove(id)} className='absolute rounded-xl -top-5 -right-2 bg-warning cursor-pointer'><i><IoTrashBinOutline size={30}/></i></div>)}
        </div>
    );
};

export default Card;