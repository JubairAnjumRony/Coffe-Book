

const Heading = ({title,subtitle}) => {
    return (
        <div className="flex flex-col justify-center items-center my-12">
           <h1 className="text-4xl">{title}</h1> 
           <p className="text-center items-center font-thin">{subtitle}</p>
        </div>
    );
};

export default Heading;