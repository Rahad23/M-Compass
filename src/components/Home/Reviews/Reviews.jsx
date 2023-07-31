import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import "./ReviewsStyle/Reviews.css";
import student1 from "../../../assets/reviews/student1.png";
import student2 from "../../../assets/reviews/student2.jpg";
import student3 from "../../../assets/reviews/student3.png";
const Reviews = () => {
    return (
        <div className='flex px-16 justify-between my-20 items-center'>
           <div>
           <h1 className='text-4xl leading-snug font-semibold text-[#687395]'>Loved by Schools, Colleges & Universities across the globe.</h1>
            <span className='mt-2 inline-block text-[#826EDD] font-medium'>Testimonials</span>
           </div>
            <div className='w-[500px] shadow-md py-5 px-8'>
            <Swiper
            style={{
                "--swiper-navigation-size": "25px",
                "--swiper-pagination-bullet-width": "15px",
                "--swiper-pagination-bullet-height": "15px","--swiper-pagination-bullet-inactive-opacity": ".6",
              }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoHeight={true}
                pagination={false}
                avigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={false}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    
                    <div>
                    <div className="avatar flex justify-center">
                <div className="w-20 rounded-full">
                    <img src={student1} alt="" />
                </div>
                    </div>
                        <p className='mt-3 text-center font-medium text-[#687395]'>Software for school management is aplenty but not every system is worth investing in. I came to know about Edusuite and I can say that I have faced no issues with the system. What I liked the most was the alerts and notifications feature as well as the option to store student attendance online. </p>
                        <div className="text-center mt-6">
                            <h4 className='text-xl font-semibold text-gray-950'>Farhan Raza</h4>
                        <h6 className='font-semibold text-gray-500'>Lead Teacher</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                    <div className="avatar flex justify-center">
                <div className="w-20 rounded-full">
                    <img src={student2} alt="" />
                </div>
                    </div>
                    <p className='mt-3 text-center font-medium text-[#687395]'>Software for school management is aplenty but not every system is worth investing in. I came to know about Edusuite and I can say that I have faced no issues with the system. What I liked the most was the alerts and notifications feature as well as the option to store student attendance online. </p>
                    <div className="text-center mt-6">
                        <h4 className='text-xl font-semibold text-gray-950'>Zeeshan Ahmad</h4>
                    <h6 className='font-semibold text-gray-500'>Administrator</h6>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                    <div className="avatar flex justify-center">
                <div className="w-20 rounded-full">
                    <img src={student3} alt="" />
                </div>
                    </div>
                    <p className='mt-3 text-center font-medium text-[#687395]'>Software for school management is aplenty but not every system is worth investing in. I came to know about Edusuite and I can say that I have faced no issues with the system. What I liked the most was the alerts and notifications feature as well as the option to store student attendance online.</p>
                    <div className="text-center mt-6">
                        <h4 className='text-xl font-semibold text-gray-950'>Bilal Salman</h4>
                    <h6 className='font-semibold text-gray-500'>Academic Adviser</h6>
                    </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    );
};

export default Reviews;