import { BsArrowRight } from "react-icons/bs";
import "./ImportnceOfSchoolSoftwareStyle/ImportanceOfSchoolSoftware.css";
const ImportanceOfSchoolSoftware = () => {
    return (
        <div className="div-gradient py-20">
<div className="w-[65%] mx-auto text-center">
            <h1 className="text-4xl font-semibold text-white">Importance Of School Software System</h1>
            <p className="mt-3 leading-relaxed text-lg font-normal text-[#d1d3da]">With the use of modern technology, our best school software in Pakistan removes all the hurdles that schools most commonly encounter. The modules and interface are designed to cater to the managerial needs that lessen the hassle and bridge the gap between parents and school management. It skillfully contributes to enhancing the quality of education.</p>
        </div>
        <div className="flex justify-center items-center mt-12">
                <button className="btn capitalize rounded-3xl h-12 bg-transparent text-white text-base hover:bg-[#ffffff] hover:border-[2px] hover:text-[#9728A3]  flex items-center justify-center hover-effect">Learn more <BsArrowRight className="text-xl mt-1 w-[45px]" /></button>
          </div>
        </div>
    );
};

export default ImportanceOfSchoolSoftware;