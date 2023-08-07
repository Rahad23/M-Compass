import './ContactBannerStyle/ContactBanner.css';
const ContactBanner = () => {
    return (
        <div className="px-16 banner-gradient py-11 text-center h-[400px] flex items-center justify-center">
           <div>
           <h1 className="text-4xl text-white font-semibold">Contact</h1>
            <div className='w-[80px] h-[2px] bg-white mx-auto mt-1'></div>
            <p className='mt-3 w-[60%] mx-auto text-[#fff]'>Edusuite offers easy to navigate, cost & time efficient, error-free and web-based school management solutions to tackle all the hurdles of students, parents, teachers and institute faculty.</p>
           </div>
        </div>
    );
};

export default ContactBanner;