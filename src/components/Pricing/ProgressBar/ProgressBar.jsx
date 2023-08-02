import "./ProgressBarStyle/ProgressBar.css";
const ProgressBar = () => {
    return (
            <div className="px-10">
                <div className="mb-6 h-5 w-full bg-neutral-200 dark:bg-neutral-600">
                <div className="h-5 bg-primary" style={{width: "85%"}}></div>
            </div>
        </div>
    );
};

export default ProgressBar;