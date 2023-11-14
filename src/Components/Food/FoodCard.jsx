
const FoodCard = ({item}) => {
    const {name, recipe, image, price} = item
    return (
        <div className="card w-96 bg-base-100 shadow-xl text-black">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 text-white bg-slate-900 px-2">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;