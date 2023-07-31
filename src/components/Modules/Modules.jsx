import GetConnected from "./GetConnected/GetConnected";
import ModulesBanner from "./ModulesBanner/ModulesBanner";

const Modules = () => {
    return (
        <div>
            <div>
            <ModulesBanner />
            </div>
            <GetConnected />
        </div>
    );
};

export default Modules;