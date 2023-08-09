import { Link } from "react-router-dom";
import logo from "../../../assets/mCompass.jpeg";
import "./NavebarStyle/Navebar.css";
import { FiSearch } from 'react-icons/fi';
const Navebar = () => {

    return (
        <div className="navbar bg-[#71407C] py-3 px-8 shadow-md sticky top-0 z-50 border-b-[1px] border-[#173968]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    {/* <Link className="">
        <img className="w-[67px]" src={logo} alt="" />
    </Link> */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex items-center justify-center gap-x-7 px-1  text-[#FFFFFF]  text-lg font-semibold">
      <li className="border-animate-nav p-0 hover:text-[#FC901B]">
        <Link to={"/"}>Home</Link>
        </li>
      <li className="border-animate-nav p-0 hover:text-[#FC901B]">
            <Link to={"/modules"}>Modules</Link>
      </li>
      <li className="border-animate-nav p-0 hover:text-[#FC901B]">
        <Link to={'/pricing'}>pricing</Link>
    </li>
      <li>
  {/* <Link> */}
      <div className="avatar cursor-pointer">
  <div className="w-[138px] rounded-full">
        <img className="" src={logo} alt="" />
  </div>
</div>
    {/* </Link> */}
      </li>
      <li className="border-animate-nav p-0 hover:text-[#FC901B] hidden">
        <a>Features</a>
    </li>
      <li className="border-animate-nav p-0 hover:text-[#FC901B] hidden">
        <a>services</a>
    </li>
      <li className="border-animate-nav p-0 hover:text-[#FC901B] hidden">
        <a>Demo</a>
    </li>
      <li className="border-animate-nav p-0 hover:text-[#FC901B] hidden">
        <a>Blog</a>
    </li>
      <li className="border-animate-nav p-0 hover:text-[#FC901B] hidden">
        <a>About</a>
    </li>
      <li className="border-animate-nav p-0 hover:text-[#FC901B]">
        <Link to={'/contact'}>Be a partner</Link>
    </li>
      <li className="border-animate-nav p-0 hover:text-[#FC901B]">
        <Link to={'/contact'}>Demo</Link>
    </li>
      <li className="border-animate-nav p-0 hover:text-[#FC901B]">
        <Link to={'/contact'}>Contact</Link>
    </li>
    </ul>
  </div>
  <div className="navbar-end">
  <FiSearch className="text-white text-3xl cursor-pointer" />
  </div>
</div>
    );
};

export default Navebar;