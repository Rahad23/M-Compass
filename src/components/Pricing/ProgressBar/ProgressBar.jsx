import "./ProgressBarStyle/ProgressBar.css";
const ProgressBar = () => {
    return (
            <div className="grid grid-cols-3 justify-center set-bg-image shadow-md">
                <div className="px-7 my-10">
                    <h1 className="text-xl font-semibold mb-2 text-[#051441]">24X7 Customer Support</h1>
                <div className="h-7 w-full bg-neutral-200 dark:bg-[#ddd]">
                <div className="h-7 bg-[#21C7FD] text-white text-right pr-2" style={{width: "100%"}}>100%</div>
            </div>
        </div>
        <div className="px-7 my-10">
        <h1 className="text-xl font-semibold mb-2 text-[#051441]">Free User Trainings</h1>
                <div className="h-7 w-full bg-neutral-200 dark:bg-[#ddd]">
                <div className="h-7 bg-[#FA6666] text-white text-right pr-2" style={{width: "100%"}}>100%</div>
            </div>
        </div>
        
        <div className="px-7 my-10">
        <h1 className="text-xl font-semibold mb-2 text-[#051441]">On-Demand Customization</h1>
                <div className="h-7 w-full bg-neutral-200 dark:bg-[#ddd]">
                <div className="h-7 bg-[#F3AF4E] text-white text-right pr-2" style={{width: "100%"}}>100%</div>
            </div>
        </div>
            </div>
    );
};

export default ProgressBar;