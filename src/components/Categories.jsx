import { NavLink } from 'react-router-dom';



const Categories = ({categories}) => {
 
    return (
        // imported from daisy ui tab
        <div role='tablist' className='tabs tabs-lifted'>   
            
        {
            categories.map(c=>(<NavLink
                key={c.category}
                to={`/category/${c.category}`}
                role='tab'
                className={({isActive})=> `tab text-2xl font-thin ${isActive? 'tab-active': ''}`} //this sets category coffee tabs onclick active
                >{c.category}
                </NavLink>))
        }
        <div className="grid grid-cols-3 gap-4 my-12 px-4">
   

        </div>
        
  </div>
       
    );
};

export default Categories;