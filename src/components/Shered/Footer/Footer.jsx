import { Link } from "react-router-dom";
import footerLogo from "../../../assets/footer-removebg-preview.png";
import faceBookIcon from "../../../assets/icon/facebook.png";
import instagramIcon from "../../../assets/icon/instagram.png";
import pinterestIcon from "../../../assets/icon/pinterest.png";
import linkedinIcon from "../../../assets/icon/linkedin.png";
import twitterIcon from "../../../assets/icon/twitter.png";
const Footer = () => {
    return (
        <footer className="px-10 py-7 dark:bg-[#07112D] dark:text-gray-100">
            <figure className="">
    <img className="w-[100px] rounded-xl" src={footerLogo} alt="Shoes" />
  </figure>
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 mt-5">
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                    <p className="leading-7 text-base">Edusuite school management system is efficient software that converts the ordinary school into a smart one. We offer easy to navigate, cost & time efficient, error-free and web-based school management solutions to tackle all the hurdles of students, parents, teachers and institute faculty efficiently</p>
                </div>
            </div>
            <div className="flex flex-col space-y-4">
                <h2 className="font-medium text-xl">Services</h2>
                <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                    <a rel="noopener noreferrer" href="#" className="text-[15px]">Academics</a>
                    <a rel="noopener noreferrer" href="#" className="text-[15px]">Student Management</a>
                    <a rel="noopener noreferrer" href="#" className="text-[15px]">Administration</a>
                    <a rel="noopener noreferrer" href="#" className="text-[15px]">Admissions</a>
                    <a rel="noopener noreferrer" href="#" className="text-[15px]">Examination</a>
                    <a rel="noopener noreferrer" href="#" className="text-[15px]">Timetable</a>
                    <a rel="noopener noreferrer" href="#" className="text-[15px]">Transportation</a>
                    <a rel="noopener noreferrer" href="#" className="text-[15px]">Library</a>
                </div>
            </div>
            <div className="flex flex-col space-y-4">
                <h2 className="font-medium text-xl">Company</h2>
                <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                    <a rel="noopener noreferrer" href="#" className="text-[15px]">Our Story</a>
                    <a rel="noopener noreferrer" href="#" className="text-[15px]">Blog</a>
                    <a rel="noopener noreferrer" href="#" className="text-[15px]">About</a>
                    <a rel="noopener noreferrer" href="#" className="text-[15px]">Contact</a>
                    <a rel="noopener noreferrer" href="#" className="text-[15px]">Features</a>
                    <a rel="noopener noreferrer" href="#" className="text-[15px]">Modules</a>
                    <a rel="noopener noreferrer" href="#" className="text-[15px]">Demo</a>
                </div>
            </div>
            <div className="flex flex-col space-y-4">
                <h2 className="font-medium text-xl">Contact us</h2>
                <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                    <h1 className="text-2xl">Address</h1>
                    <p className="text-base">NextGen Solutions, Office # 1 Sharjah City, Sialkot Road, Gujranwala, Pakistan</p>
                    <p className="text-base pt-1">Phone: (+92) 300 111 3423 Email: hello@edusuite.pk</p>

                    <div className="flex gap-x-2 pt-2">
                        <Link>
                            <img className="w-8" src={faceBookIcon} alt="" />
                        </Link>
                        <Link>
                            <img className="w-8" src={linkedinIcon} alt="" />
                        </Link>
                        <Link>
                            <img className="w-8" src={twitterIcon} alt="" />
                        </Link>
                        <Link>
                            <img className="w-8" src={pinterestIcon} alt="" />
                        </Link>
                        <Link>
                            <img className="w-8" src={instagramIcon} alt="" />
                        </Link>
                    </div>
                    <div className="flex gap-x-10 pt-3">
                        <Link className="text-lg">Privacy</Link>
                        <Link className="text-lg">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center px-6 pt-12 text-sm">
            <span className="dark:text-gray-400">© Copyright 1986. All Rights Reserved.</span>
        </div>
    </footer>
    );
};

export default Footer;