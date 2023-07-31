import "./FeaturesBenefitsStyle/FeaturesBenefits.css";
const FeaturesBenefits = () => {
    return (
        <div className="setImg my-32 px-16">
           <div className="mt-14 inline-block w-[85%]">
           <h1 className="text-4xl font-semibold text-[#182C5E]">School Management System Features & Benefits</h1>
            <p className="mt-3 text-lg text-[#677294] font-medium">You can develop an education management system according to your needs and wants. Our professional developers are aware all the hurdles an institution faces, therefore, they build compatible and best school software in Pakistan that meets your demands.</p>
           </div>
        <div className="grid grid-cols-2 mt-16">
            <div className=" mx-auto">
                <h4 className="text-[#051441] text-2xl font-semibold">Benefits for Students & Parents</h4>
                <p className="mt-1 text-lg font-normal text-[#677294]">Our software is also helpful for students and parents. The top features your students and their parents will enjoy are:</p>
            </div>
            <div className=" mx-auto">
                <h4 className="text-[#051441] text-2xl font-semibold">Benefits for Teachers & School Management</h4>
                <p className="mt-1 text-lg font-normal text-[#677294]">The benefits for school management and teachers include:</p>

            </div>
        </div>
        <div className="grid grid-cols-2 px-10">
        <ul style={{ listStyleType: "disc" }} className="mt-5 text-lg leading-relaxed text-[#677294]">
                    <li>Online fee payment from anywhere anytime.</li>
                    <li>Track student’s attendance and sends instant message on absence.</li>
                    <li>Easy communication between students and teachers.</li>
                    <li>Effective collaboration between parents and teacher.</li>
                    <li>Get online reports of the students.</li>
                    <li>Login ids and interface for students.</li>
                    <li>Online access to timetables, school events & student information.</li>
                    <li>Keep track and give updates of student progress.</li>
                </ul>
                <ul style={{ listStyleType: "disc" }} className="mt-5 text-lg leading-relaxed text-[#677294]">
                    <li>Manage error-free finance records.</li>
                    <li>Keep track on teacher’s/students attendance through biometric machines with face detectors.</li>
                    <li>Effective communication between teachers and parents.
</li>
                </ul>
        </div>
        </div>
    );
};

export default FeaturesBenefits;