import Faq from "./FAQ/Faq";
import GetConnected from "./GetConnected/GetConnected";
import ModulesBanner from "./ModulesBanner/ModulesBanner";
import SystemModules from "./SystemModules/SystemModules";
import WithEdusuite from "./WithEdusuite/WithEdusuite";

const Modules = () => {
    return (
        <div>
            <ModulesBanner />
            <GetConnected />
            <SystemModules />
            <WithEdusuite />
            <Faq />
        </div>
    );
};

export default Modules;