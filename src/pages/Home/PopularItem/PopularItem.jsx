
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCard from "./MenuCard";



const PopularItem = () => {
    const [menu] = useMenu([])
    
    const popularItems =menu.filter(item => item.category === 'popular')
    // const [menus, setMenus] = useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenus(popularItems)
    //     })
    // },[])
    return (
        <div className="mb-20">
            <SectionTitle heading={'Check it out'} 
            subHeading={"FROM OUR MENU"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popularItems.map(menu=><MenuCard key={menu._id} menu={menu}></MenuCard>)
                }
            </div>
            <div className="text-center mt-10">
                <button className="btn btn-outline border-0 border-b-4">View Full  Menu</button>
            </div>
        </div>
    );
};

export default PopularItem;