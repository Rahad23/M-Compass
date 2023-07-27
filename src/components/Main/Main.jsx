import { Outlet } from "react-router-dom";
import Navebar from "../Shered/Navebar/Navebar";
import Footer from "../Shered/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navebar />
                <Outlet />
                <Footer />
        </div>
    );
};

export default Main;