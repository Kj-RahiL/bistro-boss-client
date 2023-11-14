import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedItem from "../Featured/FeaturedItem";
import MenuItem from "../PopularItem/PopularItem";
import Reviews from "../Reviews/Reviews";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <MenuItem></MenuItem>

            {/* call us section */}
            <div className="bg-[#151515] mb-20 mt-10">
                <h2 className="text-center text-white py-24 text-5xl font-semibold">Call Us: +88 0192345678910</h2>
            </div>

            <FeaturedItem></FeaturedItem>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;