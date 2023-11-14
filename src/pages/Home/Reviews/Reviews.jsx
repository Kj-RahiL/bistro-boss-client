import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <SectionTitle
                heading={'What Our Clients Say'}
                subHeading={"TESTIMONIALS"}
            ></SectionTitle>
            <div className="my-20">
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                    <div >
                        {
                            reviews.map(review => <SwiperSlide key={review._id}
                            >

                                <div className="mx-24 flex flex-col justify-center items-center">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <p className="py-5  text-xl">{review.details}</p>
                                    <h2 className="text-[#CD9003] text-3xl text-center mb-10">{review.name}</h2>
                                </div>
                            </SwiperSlide>)
                        }
                    </div>
                </Swiper>
            </div>

        </div>
    );
};

export default Reviews;