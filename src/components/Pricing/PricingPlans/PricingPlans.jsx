import { BsArrowRightShort } from 'react-icons/bs';
import "./PricingPlansStyle/PricingPlans.css";
const PricingPlans = () => {
    return (
        <div className="set-bg-image-pricing mt-36 py-20">
            <h1 className="text-[#051441] text-center text-3xl font-semibold">Exclusive Affordable Pricing Plans</h1>
            <p className="leading-loose w-[65%] mx-auto mt-3 text-lg text-[#677494] font-normal">We have all kinds of exclusive school management software pricing packages that enable you to choose the one that fits your needs.  If you are not sure which school management software pricing package is best for you, you can choose our “free school management software” plan.</p>
            <p className="text-center mt-8 text-lg text-[#677494] font-normal">Request a Quote with us for a Monthly & yearly package that you required. <br /> And Prices are based on yearly basis: Get upto 10% OFF on all yearly packages including <br /> standard, pro, enterprise, and ultimate.</p>
           
           <div className="flex justify-center mt-8">
           <button className="btn bg-[#5C3465] hover:bg-[#FFF] rounded-3xl hover:text-[#5C3465] hover:border-[1px] hover:border-[#5C3465] text-white text-base h-[55px]"><BsArrowRightShort className="text-3xl " />Request a Quote!</button>
           </div>
        </div>
    );
};

export default PricingPlans;