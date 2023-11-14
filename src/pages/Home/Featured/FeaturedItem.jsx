import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg'
import './feature.css'
const FeaturedItem = () => {

    return (
        <div className="featured-item bg-fixed pt-8 my-20">
            <SectionTitle
                heading={'Check it out'}
                subHeading={"FROM OUR MENU"}
                text={true}
            ></SectionTitle>
            <div className="md:flex justify-center items-center py-8 px-24">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="ml-10 text-white text-2xl">
                    <p>March 20, 2023</p>
                    <h2>WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                    <button className="btn btn-outline border-0 border-b-4 text-white">Read More</button>

                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;