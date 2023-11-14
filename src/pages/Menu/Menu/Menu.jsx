import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import coverImage from '../../../assets/menu/banner3.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../Category/MenuCategory";

import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu([])
    const pizza =menu.filter(item => item.category === 'pizza')
    const salad =menu.filter(item => item.category === 'salad')
    const dessert =menu.filter(item => item.category === 'dessert')
    const soup =menu.filter(item => item.category === 'soup')
    const offered=menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={coverImage} title={'OUR MENU'}></Cover>
            <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>

            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title='desserts' img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title='Pizzas' img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title='salads' img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title='soups' img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;