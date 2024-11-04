import { useParams } from "react-router-dom";


const CoffeCards = () => {
    const {category} = useParams()
    console.log(category );
    return (
        <div>
            <h3>Coffe Cards .....{category}</h3>
        </div>
    );
};

export default CoffeCards;