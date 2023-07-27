// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import slideImg from "../../assets/sliderImg/slide1.jpg";
const Slider = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false, // Set to false if you want the autoplay to continue even when the user interacts with the slider
                }}
                navigation={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]} // Include Autoplay module here
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
