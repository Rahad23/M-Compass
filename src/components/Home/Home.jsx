import HomeText from "../HomeText/HomeText";
import Satisfaction from "../Satisfaction/Satisfaction";
import Slider from "../Slider/Slider";
import SystemModules from "../SystemModules/SystemModules";
import WhyChooseEdusuite from "../WhyChooseEdusuite/WhyChooseEdusuite";
import PerformanceTracker from "./PerformanceTracker/PerformanceTracker";

const Home = () => {
    return (
        <div>
            <Slider />
            <HomeText />
            <WhyChooseEdusuite />
            <Satisfaction />
            <SystemModules />
            <PerformanceTracker />
        </div>
    );
};

export default Home;