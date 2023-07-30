import HomeText from "../HomeText/HomeText";
import Satisfaction from "../Satisfaction/Satisfaction";
import Slider from "../Slider/Slider";
import SystemModules from "../SystemModules/SystemModules";
import WhyChooseEdusuite from "../WhyChooseEdusuite/WhyChooseEdusuite";

const Home = () => {
    return (
        <div>
            <Slider />
            <HomeText />
            <WhyChooseEdusuite />
            <Satisfaction />
            <SystemModules />
        </div>
    );
};

export default Home;