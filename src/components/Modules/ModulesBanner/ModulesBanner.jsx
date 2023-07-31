// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Particle from "../ParticleJS/Particle";
import img from "../../../assets/sliderImg/Edusutie-free-school-management-software-min.png";
import "./ModulesBannerStyle/ModulesBannerStyle.css";
// import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const ModulesBanner = () => {
    return (
        <div className="">

{/* <Swiper
        cssMode={true}
        navigation={false}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
            
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}




            <div className="particle">
            <Particle />
            </div>
            <div className="text-center mt-20 text-relative">
                <h1 className="text-5xl font-semibold text-white">School Management Software Modules</h1>
                <p className="mt-2 text-lg font-semibold text-white">Discover Easy to Customizable, time-efficient School Software Modules</p>
                <button className="btn btn-secondary mt-10 h-14 w-40 text-base bg-[#FA4D56] hover:bg-[#FA4D56] text-white">Explore all</button>
                <div>
                 <img className="mx-auto mt-2" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ModulesBanner;