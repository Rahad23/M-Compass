import icon1 from "../../../assets/icon/icon1.png";
import icon2 from "../../../assets/icon/icon2.png";
import icon3 from "../../../assets/icon/icon3.png";
import icon4 from "../../../assets/icon/icon8.png";
import icon5 from "../../../assets/icon/icon5.png";
import icon6 from "../../../assets/icon/icon9.png";
import icon7 from "../../../assets/icon/icon10.png";
import icon8 from "../../../assets/icon/icon14.png";
import icon9 from "../../../assets/icon/icon11.png";
import icon10 from "../../../assets/icon/icon13.png";
import icon11 from "../../../assets/icon/icon18.png";
import icon12 from "../../../assets/icon/icon19.png";
import icon13 from "../../../assets/icon/icon12.png";
import icon14 from "../../../assets/icon/icon16.png";
import icon15 from "../../../assets/icon/icon7.png";
import { BsArrowRight } from "react-icons/bs";
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
        },
        {
            id: 11,
            title: "Payroll",
            description: "Management System",
            icon: icon11
        },
        {
            id: 12,
            title: "Multi-Campus",
            description: "Management System",
            icon: icon12
        },
        {
            id: 13,
            title: "HR",
            description: "Management System",
            icon: icon13
        },
        {
            id: 14,
            title: "Certificate",
            description: "Management System",
            icon: icon14
        },
        {
            id: 15,
            title: "Library",
            description: "Management System",
            icon: icon15
        },

    ]

    return (
        <div className="mt-36 text-center px-14 ">
            <h1 className="text-4xl font-semibold text-[#051441]">Best School Management System Modules</h1>
            <p className="mt-8 px-24 leading-normal text-lg text-[#9BA2B9]">Our highly developed, time-efficient & cost-effective school management software modules help you to get closer with parents, staff and management. With EduSuite you can track records, manage extra-curricular activities and much more by just a single click. Our School system module includes</p>
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
                <button className="btn capitalize rounded-3xl h-16 bg-[#FA4D56] text-white text-lg hover:bg-[#ffffff] hover:border-[2px] hover:text-[#FA4D56] hover:border-[#FA4D56] flex items-center justify-center hover-effect">Request Demo <BsArrowRight className="text-xl mt-1 text-[#ffffff] hover:text-[#FA4D56] w-[30px] iconRight" /></button>
          </div>

        </div>
    );
};

export default SystemModules;