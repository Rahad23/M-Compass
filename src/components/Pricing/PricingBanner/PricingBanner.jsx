import "./PricingBannerStyle/PricingBanner.css";
const PricingBanner = () => {
    return (
        <div className="h-[500px] bgColor flex justify-center">
            <div className="inline-block mt-32 text-center">
            <h1 className="text-4xl font-semibold text-white">Inexpensive School Management System Pricing Plans</h1>
            <p className="mt-3 text-lg text-white">Low Cost Giving You the Full Educational Boost</p>
            <div className="mt-10 flex gap-4 justify-center items-center">
            <button className="btn bg-[#FF0066] hover:bg-[#FF0066] border-none rounded-2xl text-white text-base h-[55px] ">See All Pricing Plans</button>
            <button className="btn bg-[#1DC9B7] hover:bg-[#1DC9B7] border-none rounded-2xl text-white text-base h-[55px] ">Get Started for Free!</button>
            </div>
            </div>
        </div>
    );
};

export default PricingBanner;