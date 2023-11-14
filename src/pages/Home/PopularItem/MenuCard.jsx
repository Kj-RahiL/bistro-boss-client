

const MenuCard = ({menu}) => {
    const {name, recipe, image, price} = menu
    return (
        <div className="flex ">
            <img style={{borderRadius:'0px 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
            <div className="ml-5">
                <div className="flex justify-between text-xl pb-1">
                    <h2 className="font-light">{name} ------------------</h2>
                    <p className="text-[#BB8506]">${price}</p>
                </div>
                <p className="text-[#737373]">{recipe}</p>
            </div>
        </div>
    );
};

export default MenuCard;