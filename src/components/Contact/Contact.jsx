import ContactBanner from "./ContactBanner/ContactBanner";
import GetInTouch from "./GetInTouch/GetInTouch";
import OfficeAddress from "./OfficeLocation/OfficeAddress";

const Contact = () => {
    return (
        <div>
            <ContactBanner />
            <OfficeAddress />
            <GetInTouch />
        </div>
    );
};

export default Contact;