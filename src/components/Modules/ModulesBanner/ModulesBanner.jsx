import Particle from "../ParticleJS/Particle";
import img from "../../../assets/sliderImg/Edusutie-free-school-management-software-min.png";
import "./ModulesBannerStyle/ModulesBannerStyle.css";
const ModulesBanner = () => {
    return (
        <div >
            <Particle />
            <div className="text-center ">
               <div className="relative">
               <h1 className="text-5xl font-semibold text-white">School Management Software Modules</h1>
                <p className="mt-2 text-lg font-semibold text-white">Discover Easy to Customizable, time-efficient School Software Modules</p>
                <button className="btn btn-secondary mt-10 h-14 w-40 text-base bg-[#FA4D56] hover:bg-[#FA4D56] text-white">Explore all</button>
                <div>
                 <img className="mx-auto mt-2" src={img} alt="" />
                </div>
               </div>
            </div>
        </div>
    );
};

export default ModulesBanner;