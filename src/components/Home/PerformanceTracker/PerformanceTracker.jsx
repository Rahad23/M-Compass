import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
const PerformanceTracker = () => {
    const [percentage, setPercentage] = useState(0);
    const [percentage2, setPercentage2] = useState(0);
    const [percentage3, setPercentage3] = useState(0);
    const [percentage4, setPercentage4] = useState(0);

    const targetPercentage = 75;
    const targetPercentage2 = 82;
    const targetPercentage3 = 42;
    const targetPercentage4 = 92;
    const incrementStep = 1;
  
    useEffect(() => {
        // Function to increment the percentage value until it reaches the target percentage
        const incrementPercentage = () => {
          if (percentage < targetPercentage) {
            setPercentage((prevPercentage) =>
              prevPercentage + incrementStep <= targetPercentage
                ? prevPercentage + incrementStep
                : targetPercentage
            );
          }
        };
    
        // Set an interval to update the percentage at a regular interval
        const interval = setInterval(incrementPercentage, 10); // You can adjust the interval time (milliseconds) for smoother animation
    
        // Clean up the interval when the component is unmounted or the target percentage is reached
        return () => clearInterval(interval);
      }, [percentage, targetPercentage, incrementStep]);

    useEffect(() => {
        // Function to increment the percentage value until it reaches the target percentage
        const incrementPercentage = () => {
          if (percentage2 < targetPercentage2) {
            setPercentage2((prevPercentage) =>
              prevPercentage + incrementStep <= targetPercentage2
                ? prevPercentage + incrementStep
                : targetPercentage2
            );
          }
        };
    
        const interval = setInterval(incrementPercentage, 10);
    
        return () => clearInterval(interval);
      }, [percentage2, targetPercentage2, incrementStep]);

    useEffect(() => {
        // Function to increment the percentage value until it reaches the target percentage
        const incrementPercentage = () => {
          if (percentage3 < targetPercentage3) {
            setPercentage3((prevPercentage) =>
              prevPercentage + incrementStep <= targetPercentage3
                ? prevPercentage + incrementStep
                : targetPercentage3
            );
          }
        };
    
        // Set an interval to update the percentage at a regular interval
        const interval = setInterval(incrementPercentage, 10); // You can adjust the interval time (milliseconds) for smoother animation
    
        // Clean up the interval when the component is unmounted or the target percentage is reached
        return () => clearInterval(interval);
      }, [percentage3, targetPercentage3, incrementStep]);

    useEffect(() => {
        const incrementPercentage = () => {
          if (percentage4 < targetPercentage4) {
            setPercentage4((prevPercentage) =>
              prevPercentage + incrementStep <= targetPercentage4
                ? prevPercentage + incrementStep
                : targetPercentage4
            );
          }
        };
    
        const interval = setInterval(incrementPercentage, 10); 
    
        return () => clearInterval(interval);
      }, [percentage4, targetPercentage4, incrementStep]);

      const customStyles1 = buildStyles({
       
        strokeLinecap: 'round',
        path: {
            transition: 'stroke-dashoffset 0.5s ease 0s',
          },
        textSize: '20px',
        textColor: '#051441',
        strokeWidth: 12,
        pathTransitionDuration: 0.5,
        pathColor: `#AA6FFA`, 
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7',
      });
      const customStyles2 = buildStyles({
       
        strokeLinecap: 'round',
        path: {
            transition: 'stroke-dashoffset 0.5s ease 0s',
          },
        textSize: '20px',
        textColor: '#051441',
        strokeWidth: 12,
        pathTransitionDuration: 0.5,
        pathColor: `#F4B75F`, 
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7',
      });
      const customStyles3 = buildStyles({
       
        strokeLinecap: 'round',
        path: {
            transition: 'stroke-dashoffset 0.5s ease 0s',
          },
        textSize: '20px',
        textColor: '#051441',
        strokeWidth: 12,
        pathTransitionDuration: 0.5,
        pathColor: `#FA6FD1`, 
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7',
      });
      const customStyles4 = buildStyles({
       
        strokeLinecap: 'round',
        path: {
            transition: 'stroke-dashoffset 0.5s ease 0s',
          },
        textSize: '20px',
        textColor: '#051441',
        strokeWidth: 12,
        pathTransitionDuration: 0.5,
        pathColor: `#6FADFA`, 
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7',
      });

    return (
        <div className="mt-28">
            <h1 className="text-4xl leading-snug text-[#051441] font-semibold text-center">Measure and increase Performance <br /> By Edusuite</h1>
         <div className='flex justify-center gap-x-20 mt-10'>
            <div className='w-40'>
           <CircularProgressbar
            value={percentage}
            text={`${Math.round(percentage)}%`}
            styles={customStyles1}
            />
                <h1 className='text-xl font-semibold text-center mt-2 text-[#051441]'>Timetable</h1>
            </div>
            <div className='w-40'>
                    <CircularProgressbar
            value={percentage2}
            text={`${Math.round(percentage2)}%`}
            styles={customStyles2}
            />
        <h1 className='text-xl font-semibold text-center mt-2 text-[#051441]'>Attendance</h1>
            </div>
            <div className='w-40'>
                    <CircularProgressbar
            value={percentage3}
            text={`${Math.round(percentage3)}%`}
            styles={customStyles3}
            />
            <h1 className='text-xl font-semibold text-center mt-2 text-[#051441]'>Progress</h1>
            </div>
            <div className='w-40'>
            <CircularProgressbar
      value={percentage4}
      text={`${Math.round(percentage4)}%`}
      styles={customStyles4}
    />
    <h1 className='text-xl font-semibold text-center mt-2 text-[#051441]'>Report</h1>
            </div>
         </div>
        </div>
    );
};

export default PerformanceTracker;