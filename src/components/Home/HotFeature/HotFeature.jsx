// import icon1 from "../../../assets/icon/icon1.png";
// import icon2 from "../../../assets/icon/icon2.png";
// import icon3 from "../../../assets/icon/icon3.png";
// import icon4 from "../../../assets/icon/icon8.png";
import { PiExamLight, PiStudentLight } from 'react-icons/pi';
import { FcCheckmark } from 'react-icons/fc';
import { BsQuestionSquareFill } from "react-icons/bs";
import './HotFeatureStyle/HotFeature.css';
const HotFeature = () => {
    const hotFeatures=[
        {
            id: 1,
            title: "Study Material",
            description: "Management System",
            icon: <PiStudentLight className='text-5xl text-[#051441]' />
        },
        {
            id: 2,
            title: "Home mark management",
            description: "Management System",
            icon: <FcCheckmark className='text-5xl text-[#051441]' />
        },
        {
            id: 3,
            title: "Online Exam",
            description: "Management System",
            icon: <PiExamLight className='text-5xl text-[#051441]' />
        },
        {
            id: 4,
            title: "Question Bank",
            description: "Management System",
            icon: <BsQuestionSquareFill className='text-5xl text-[#051441]' />
        },
        
    ]

    return (
        <div className="mt-10 px-16">
            <h1 className="text-3xl text-center font-semibold text-[#051441]">Hot Feature</h1>
            <div className="grid grid-cols-4 gap-y-10 mt-10 justify-center">
                {
                    hotFeatures.map(data=>
                        <div className="card w-52 bg-base-100 border-[2px] border-[#ddd] hover:border-[#5C3465] cursor-pointer rounded-lg mx-auto" key={data?.id}>
                        <div className="card-body p-3">
                        <figure className="">
                        {/* <img src={data.icon} alt="Shoes" className="rounded-xl" /> */}
                        <span className='shadow-sm p-5 border-[1px] border-[#051441] rounded-full'>{data?.icon}</span>
                    </figure>
                          <div>
                          <h4 className="text-xl text-[#051441] p-0 text-center">{data.title}</h4>
                            <p className="text-center text-[#051441]">{data.description}</p>
                          </div>
                        </div>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default HotFeature;