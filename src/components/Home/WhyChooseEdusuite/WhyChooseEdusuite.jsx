import { CiMobile4 } from "react-icons/ci";
import { BiBarChartAlt, BiCalendar } from "react-icons/bi";
import { BsBook, BsCreditCard2Back, BsCursor } from "react-icons/bs";
import { SlSpeedometer } from "react-icons/sl";
import { FaGraduationCap } from "react-icons/fa";
// import phoneImg from "../../../assets/School-Management-System-Mobile-App.png";
import logo from "../../../assets/mCompass.jpeg";
const WhyChooseEdusuite = () => {
    return (
        <div className="my-10 px-16">
            <h1 className="text-3xl text-[#051441] text-center font-semibold">Why Choose mCampus?</h1>
            <p className="border-double border-t-0 border-x-0 border-4 border-[#961276] text-center w-[10%] mx-auto mt-1"></p>
            <div className="grid grid-cols-3 mt-10 gap-x-10">
            <div>
                <ul className="grid gap-y-10 mt-10">
                    <li className="flex items-center gap-x-4">
                    <span className="bg-[#F3AF4E] p-5 rounded-full">
                    <CiMobile4 className="text-2xl text-white " />
                    </span>
                    <span className="text-[#051441] font-semibold text-[18px]">Easy to Use Mobile App</span>
                    </li>
                    <li className="flex items-center gap-x-4">
                    <span className="bg-[#914AEE] p-5 rounded-full">
                    <BiCalendar className="text-2xl text-white " />
                    </span>
                    <span className="text-[#051441] font-semibold text-[18px]"> Quick Attendance Record</span>
                    </li>
                    <li className="flex items-center gap-x-4">
                    <span className="bg-[#DC143C] p-5 rounded-full">
                    <BsBook className="text-2xl text-white " />
                    </span>
                    <span className="text-[#051441] font-semibold text-[18px]">Library Automation</span>
                    </li>
                    <li className="flex items-center gap-x-4">
                    <span className="bg-[#FA6FD1] p-5 rounded-full">
                    <BsCreditCard2Back className="text-2xl text-white " />
                    </span>
                    <span className="text-[#051441] font-semibold text-[18px]">Effective Fee Management</span>
                    </li>
                </ul>

            </div>
            <div className="flex items-center">
            <img className="rounded-3xl shadow-md" src={logo} alt="" />
            </div>
            <div>
                <ul className="grid gap-y-10 mt-10">
                    <li className="flex items-center gap-x-4">
                    <span className="bg-[#961276] p-5 rounded-full">
                    <SlSpeedometer className="text-2xl text-white " />
                    </span>
                    <span className="text-[#051441] font-semibold text-[18px]">Easy Timetable Management</span>
                    </li>
                    <li className="flex items-center gap-x-4">
                    <span className="bg-[#21C7FD] p-5 rounded-full">
                    <FaGraduationCap className="text-2xl text-white " />
                    </span>
                    <span className="text-[#051441] font-semibold text-[18px]">Admission Management</span>
                    </li>
                    <li className="flex items-center gap-x-4">
                    <span className="bg-[#FA6666] p-5 rounded-full">
                    <BiBarChartAlt className="text-2xl text-white " />
                    </span>
                    <span className="text-[#051441] font-semibold text-[18px]">Inventory Management</span>
                    </li>
                    <li className="flex items-center gap-x-4">
                    <span className="bg-[#F3AF4E] p-5 rounded-full">
                    <BsCursor className="text-2xl text-white " />
                    </span>
                    <span className="text-[#051441] font-semibold text-[18px]">Transport Management</span>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default WhyChooseEdusuite;