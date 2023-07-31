// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import "./SliderStyle/SliderStyle.css";
import slideImg from "../../../assets/sliderImg/slide1.jpg";
const Slider = () => {
    return (
        <div>
            <Swiper
            style={{
                "--swiper-navigation-size": "25px",
                "--swiper-pagination-bullet-width": "15px",
                "--swiper-pagination-bullet-height": "15px","--swiper-pagination-bullet-inactive-opacity": ".6",
              }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                avigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img src={slideImg} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slideImg} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slideImg} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slideImg} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slideImg} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slideImg} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slideImg} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slideImg} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slideImg} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
