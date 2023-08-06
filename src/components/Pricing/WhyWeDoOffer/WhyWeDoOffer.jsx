import { BsCheck2 } from 'react-icons/bs';
import laptopImg from "../../../assets/edusuite-school-management-system-min.png";
const WhyWeDoOffer = () => {
    return (
        <div className='mt-24 px-16 grid grid-cols-2'>
            <div>
            <h1 className='text-4xl leading-tight font-semibold text-[#051441]'>Why We Do Offer <br /> School Management System <br /> Packages?</h1>
            <p className='mt-5 text-[#677494] text-base'>Edusuite school software adds value to your school system by improving the educational process. Our smooth and easy-to-use software is designed to raise your academic standards and proficiency at all levels. We offer</p>
            <ul className='mt-5 flex flex-col gap-y-4'>
                <li className="flex items-center gap-x-2 text-[#677494]">
                    <BsCheck2 className='text-xl text-[#9B57D7]' />
                    Easy to Operate & Highly Manageable & customizable Software System.
                </li>
                <li className="flex items-center gap-x-2 text-[#677494]">
                    <BsCheck2 className='text-xl text-[#9B57D7]' />
                    Easy to Use Mobile Application.
                </li>
                <li className="flex items-center gap-x-2 text-[#677494]">
                    <BsCheck2 className='text-xl text-[#9B57D7]' />
                    Easy to Use Mobile Application.
                </li>
                <li className="flex items-center gap-x-2 text-[#677494]">
                    <BsCheck2 className='text-xl text-[#9B57D7]' />
                    Track Real-time performance & Instant Report Delivery
                </li>
                <li className="flex items-center gap-x-2 text-[#677494]">
                    <BsCheck2 className='text-xl text-[#9B57D7]' />
                    Timely Management.
                </li>
                <li className="flex items-center gap-x-2 text-[#677494]">
                    <BsCheck2 className='text-xl text-[#9B57D7]' />
                    Available Add-ons On Demand.
                </li>
                <li className="flex items-center gap-x-2 text-[#677494]">
                    <BsCheck2 className='text-xl text-[#9B57D7]' />
                    Flexible & Customizable Modules.
                </li>
                <li className="flex items-center gap-x-2 text-[#677494]">
                    <BsCheck2 className='text-xl text-[#9B57D7]' />
                    User-Friendly Integration.
                </li>
            </ul>
            </div>
            <div>
                <img src={laptopImg} alt="" />
            </div>
        </div>
    );
};

export default WhyWeDoOffer;