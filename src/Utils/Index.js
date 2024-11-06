// get all coffees from localStorage
// add a coffee to local storage




const addFavorite = coffee =>{
    const favorites = []
    favorites.push(coffee);
    localStorage.setItem('favorites',JSON.stringify(favorites));
}
export {addFavorite}