import { BsServer, BsPencil, BsArrowRight } from "react-icons/bs";
import { FiCheckSquare } from "react-icons/fi";
import "./SatisfactionStyle/SatisfactionStyle.css";
const Satisfaction = () => {
    const satisFicationCard=[
        {
            id: 1,
            icon: <BsServer className="text-4xl mx-auto text-white" />,
            title: "MODULES",
            description: "Edusuite developed its entire software and tools in a way that it can be customized according to your needs.",
            styleGradient: "-webkit-linear-gradient(19deg, #DC143C 0%, #F08080 100%)"
        },
        {
            id: 2,
            icon: <FiCheckSquare className="text-4xl mx-auto text-white" />,
            title: "MODULES",
            description: "Edusuite developed its entire software and tools in a way that it can be customized according to your needs.",
            styleGradient: " -webkit-linear-gradient(0deg,#B721FF 0%,#914AEE 100%)"
        },
        {
            id: 3,
            icon: <BsPencil className="text-4xl mx-auto text-white" />,
            title: "MODULES",
            description: "Edusuite developed its entire software and tools in a way that it can be customized according to your needs.",
            styleGradient: "-webkit-linear-gradient(40deg,#08AEEA 0%,#2AF59D 100%)"
        }
    ]

    return (
        <div className="px-16">
            <h1 className="text-center text-3xl font-semibold text-[#051441] leading-normal">Satisfaction Guarantee <br />Incredible School Management Software</h1>

            <div className="mt-10 grid grid-cols-3 gap-x-7">
            {
                satisFicationCard.map(data=>
                    <div className="card w-[340px] text-primary-content rounded-lg" key={data?.id} style={{backgroundImage: data.styleGradient}}>
            <div className="card-body p-5">
                 <span className="inline w-20 p-5 border-[1px] rounded-full">
                     {data.icon}
                 </span>
                 <h1 className="text-white text-[20px] font-semibold">{data?.title}</h1>
                <p className="text-[#FCF6FF]">{data?.description}</p>
                <div className="card-actions justify-start mt-7">
                    <span className="border-animate">
                    <span className="text-[#FBF9FD] cursor-pointer flex justify-center items-center">Learn More <BsArrowRight className="text-xl ml-2" /></span>
                    </span>
                </div>
            </div>
</div>
                    )
            } 
            </div>

        </div>
    );
};

export default Satisfaction;