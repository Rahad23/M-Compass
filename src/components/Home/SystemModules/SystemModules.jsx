import icon1 from "../../../assets/icon/ams.png";
import icon2 from "../../../assets/icon/attendance.png";
import icon3 from "../../../assets/icon/Examination.png";
import icon4 from "../../../assets/icon/LMS.png";
import icon5 from "../../../assets/icon/Finance.png";
import icon6 from "../../../assets/icon/SMS.png";
import icon7 from "../../../assets/icon/TMS.png";
import icon8 from "../../../assets/icon/Admin.png";
import icon9 from "../../../assets/icon/Transport.png";
import icon10 from "../../../assets/icon/Library.png";
import { BsArrowRight } from "react-icons/bs";
import "./SystemModulStyle/SystemModulStyle.css";
const SystemModules = () => {

    const managementSystem=[
        {
            id: 1,
            title: "Admission",
            description: "Management System",
            icon: icon1
        },
        {
            id: 2,
            title: "Admission",
            description: "Management System",
            icon: icon2
        },
        {
            id: 3,
            title: "Admission",
            description: "Management System",
            icon: icon3
        },
        {
            id: 4,
            title: "Attendance",
            description: "Management System",
            icon: icon4
        },
        {
            id: 5,
            title: "Examination",
            description: "Management System",
            icon: icon5
        },
        {
            id: 6,
            title: "Learning (LMS)",
            description: "Management System",
            icon: icon6
        },
        {
            id: 7,
            title: "Finance",
            description: "Management System",
            icon: icon7
        },
        {
            id: 8,
            title: "Student",
            description: "Management System",
            icon: icon8
        },
        {
            id: 9,
            title: "Timetable",
            description: "Management System",
            icon: icon9
        },
        {
            id: 10,
            title: "Administration",
            description: "Management System",
            icon: icon10
        }
    ]

    return (
        <div className="mt-[120px] px-16 py-16 bg-[#F7F8FC]">
            <h1 className="text-3xl text-[#051441] font-semibold text-center">Explore School Management System Modules</h1>
            <div className="grid grid-cols-5 gap-y-10 mt-10">
                {
                    managementSystem.map(data=>
                        <div className="card w-52 bg-base-100 border-[2px] border-[#ddd] hover:border-[#5C3465] cursor-pointer rounded-lg" key={data?.id}>
                        <div className="card-body p-3">
                        <figure className="">
                        <img src={data.icon} alt="Shoes" className="rounded-xl" />
                    </figure>
                          <div>
                          <h4 className="text-2xl text-[#051441] p-0 text-center">{data.title}</h4>
                            <p className="text-center text-[#051441] font-semibold">{data.description}</p>
                          </div>
                        </div>
                        </div>
                        )
                }
            </div>
            <div className="flex justify-center items-center my-6 mt-24">
                <button className="btn capitalize rounded-3xl h-16 bg-[#5C3465] text-white text-lg hover:bg-[#ffffff] hover:border-[2px] hover:text-[#5C3465] hover:border-[#5C3465] flex items-center justify-center hover-effect">View all modules <BsArrowRight className="text-xl mt-1 w-[45px] iconRight" /></button>
          </div>
        </div>
    );
};

export default SystemModules;