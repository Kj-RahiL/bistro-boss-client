import FoodCard from "../../../Components/Food/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const OrderTab = ({ items }) => {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
                <div className="grid md:grid-cols-3 gap-10 mt-20">
                    {
                        items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                    }
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default OrderTab;