import  toast  from 'react-hot-toast';
// get all coffees from localStorage
// add a coffee to local storage


const getAllFavourities = () =>{
   const all = localStorage.getItem('favorites')
   if(all){
    const favorites = JSON.parse(all)
    console.log(favorites)
    return favorites;

   }
   else{
    console.log([]);
    return [];
   }

   
}

// add a coffee to local storage
const addFavorite = coffee =>{
    // get all previously saved coffe data
    const favorites = getAllFavourities();
    const isExist = favorites.find(item=> item.id == coffee.id);
    if(isExist) return  toast.error('Already Added to favorites');
    favorites.push(coffee);
 
    localStorage.setItem('favorites',JSON.stringify(favorites));
    toast.success("successfully added");
}

// Remove a coffee from local storage ew
 const removeFavorite = id =>{
    // get all previously saved coffee data
    const favorites = getAllFavourities()
    const remaining = favorites.filter(coffee => coffee.id != id)
    localStorage.setItem('favorites',JSON.stringify(remaining))
    toast.success('successfully Removed!');
 }

export {addFavorite,getAllFavourities,removeFavorite}