import img from "../../../assets/Edusuite-School-Erp-App.png";
const WithEdusuite = () => {
    return (
        <div className="grid grid-cols-2 mt-36 pl-2 pr-14 justify-center">
            <div>
                <img src={img} alt="" />
            </div>
           <div className="px-14">
           <h1 className="text-4xl font-semibold leading-tight text-[#051441]">Enhance Your Education System With Edusuite</h1>
            <p className="mt-5 text-lg font-medium text-[#677294]">Edusuite works on providing solutions to education systems. Our aim is to enhance the education system quality by providing the best school management software modules. We highly focus on the problem-solving capabilities of our system modules to facilitate students, parents, teachers and school management. We ensure the high value against the money you provide and always open to improvising education technologies according to your desires.</p>
           </div>
        </div>
    );
};

export default WithEdusuite;