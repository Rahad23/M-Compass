
import FeaturesBenefits from "./FeaturesBenefits/FeaturesBenefits";
import HotFeature from "./HotFeature/HotFeature";
// import HomeText from "./HomeText/HomeText";
import ImportanceOfSchoolSoftware from "./ImportanceOfSchoolSoftware/ImportanceOfSchoolSoftware";
import PerformanceTracker from "./PerformanceTracker/PerformanceTracker";
import Reviews from "./Reviews/Reviews";
import Satisfaction from "./Satisfaction/Satisfaction";
import Slider from "./Slider/Slider";
import SystemModules from "./SystemModules/SystemModules";
import WhyChooseEdusuite from "./WhyChooseEdusuite/WhyChooseEdusuite";

const Home = () => {
    return (
        <div>
            <Slider />
            {/* <HomeText /> */}
            <WhyChooseEdusuite />
            <Satisfaction />
            <SystemModules />
            <HotFeature />
            <PerformanceTracker />
            <FeaturesBenefits />
            <ImportanceOfSchoolSoftware />
            <Reviews />
        </div>
    );
};

export default Home;