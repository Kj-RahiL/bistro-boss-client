import { Link } from "react-router-dom";
import MenuCard from "../../Home/PopularItem/MenuCard";
import Cover from "../Cover/Cover";


const MenuCategory = ({items, title, img }) => {
    return (
        <div className="my-24">
            {title && <Cover title={title} img={img}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mt-20">
                {
                    items.map(menu=><MenuCard key={menu._id} menu={menu}></MenuCard>)
                }
            </div>
            <Link to={`/order/${title}`} className="flex justify-center mt-10">
                <button className="btn btn-outline border-0 border-b-4">View Full  Menu</button>
            </Link>

        </div>
    );
};

export default MenuCategory;