/* eslint-disable react/no-unescaped-entities */
import customer1 from "../../../assets/icon/Asim-Saleem.jpg";
import customer2 from "../../../assets/icon/Masood-Ahmad.jpg";
import customer3 from "../../../assets/icon/Sadia-Awan.jpg";
import customer4 from "../../../assets/icon/Tehmina-Rizwan.jpg";
import './CustomersSayStyle/CustomersSay.css'
const CustomersSay = () => {
    return (
        <div className="set-bg-image-customer-say mt-24 px-16 py-16">
            <h1 className='text-center text-3xl font-semibold text-[#5C3465]'>WHAT OUR CUSTOMERS SAY</h1>
            <div className='grid grid-cols-2 gap-x-8 mt-14 gap-y-10'>
                <div>
                    <p className="text-lg leading-relaxed">"Software for school management is aplenty but not every system is worth investing in. I came to know about Edusuite and I can say that I have faced no issues with the system. What I liked the most was the alerts and notifications feature as well as the option to store student attendance online."</p>
                    <div className="flex items-center gap-x-4">
                    <div className="avatar mt-3">
                <div className="w-16 rounded-full">
                    <img src={customer1} />
                </div>
                </div>
                    <div>
                    <h3 className="font-semibold text-[#5C3465]">SADIA AWAN</h3>
                    <span className="text-sm text-[#8F90AB]">Assistant Professor</span>
                </div>
                    </div>
                </div>
                <div>
                    <p className="text-lg leading-relaxed">". I strongly believed in the notion of making educational institutes smarter. The days are gone when conventional methods were used to manage academic operations for children and adults alike. Opting for Edusuite helped me realized a wider spectrum on managing operations, fees, attendance, and overall collaboration of students."</p>
                    <div className="flex items-center gap-x-4">
                    <div className="avatar mt-3">
                <div className="w-16 rounded-full">
                    <img src={customer3} />
                </div>
                </div>
                    <div>
                    <h3 className="font-semibold text-[#5C3465]">ASIM SALEEM</h3>
                    <span className="text-sm text-[#8F90AB]">Academic Teacher</span>
                </div>
                    </div>
                </div>
                <div>
                    <p className="text-lg leading-relaxed">"Software for school management is aplenty but not every system is worth investing in. I came to know about Edusuite and I can say that I have faced no issues with the system. What I liked the most was the alerts and notifications feature as well as the option to store student attendance online."</p>
                    <div className="flex items-center gap-x-4">
                    <div className="avatar mt-3">
                <div className="w-16 rounded-full">
                    <img src={customer2} />
                </div>
                </div>
                    <div>
                    <h3 className="font-semibold text-[#5C3465]">TEHMINA RIZWAN</h3>
                    <span className="text-sm text-[#8F90AB]">Examination Controller</span>
                </div>
                    </div>
                </div>
                <div>
                    <p className="text-lg leading-relaxed">". I strongly believed in the notion of making educational institutes smarter. The days are gone when conventional methods were used to manage academic operations for children and adults alike. Opting for Edusuite helped me realized a wider spectrum on managing operations, fees, attendance, and overall collaboration of students."</p>
                    <div className="flex items-center gap-x-4">
                    <div className="avatar mt-3">
                <div className="w-16 rounded-full">
                    <img src={customer4} />
                </div>
                </div>
                    <div>
                    <h3 className="font-semibold text-[#5C3465]">MASOOD AHMAD</h3>
                    <span className="text-sm text-[#8F90AB]">Administrator</span>
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomersSay;