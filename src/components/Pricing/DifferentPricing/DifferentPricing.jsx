import yearIcon from "../../../assets/icon/Month.png";
import monthIcon from "../../../assets/icon/Year.png";
const DifferentPricing = () => {
    return (
        <div className="mt-32 px-16">
            <h1 className="text-center text-3xl font-semibold">What Are the Different Pricing Packages of Edusuite?</h1>
    <div className="flex gap-x-10 mt-12">
        <div className="card w-full bg-base-100 shadow-xl mx-auto hover:shadow-2xl cursor-pointer">
            <figure className="px-10 pt-10">
                <img src={monthIcon} alt="month" className="w-20" />
            </figure>
            <div className="card-body items-center text-center pt-5">
                <h2 className="text-[#5C3465] text-2xl font-semibold">Monthly Package</h2>
                <p className="font-normal leading-normal px-10 text-[#989EB4]">We provide an effective monthly school management system pricing plan for every institute. Our starter package starts from 30 PKR/student/month, while our pro package goes for 50 PKR/student/month. Furthermore, you can contact with us for an enterprise package to manage a large number of students.</p>
            </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl mx-auto hover:shadow-2xl cursor-pointer">
        <figure className="px-10 pt-10">
            <img src={yearIcon} alt="year" className="w-20" />
        </figure>
        <div className="card-body items-center text-center pt-5">
            <h2 className="text-[#5C3465] text-2xl font-semibold">Yearly Package</h2>
            <p className="font-normal leading-relaxed px-10 text-[#989EB4]">In the yearly plan, our minimum price for a starter package starts from 75 thousand PKR per year, depending on the number of students you have in your institute. While our pro package yearly cost 140,000 PKR only. You can get an exclusive quote for the enterprise package by getting in touch with us.</p>
        </div>
        </div>
            </div>
        </div>
    );
};

export default DifferentPricing;