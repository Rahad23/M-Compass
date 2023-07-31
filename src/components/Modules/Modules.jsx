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
        </div>
    );
};

export default Modules;