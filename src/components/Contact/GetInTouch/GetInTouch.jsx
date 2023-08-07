import './GetInTouchStyle/GetInTouch.css';
const GetInTouch = () => {
    return (
        <div className="set-get-in-touch-bg mt-16">
            <div style={{backgroundColor:"rgba(239, 239, 239, .8)"}} className=' py-7 pb-20'>
            <h1 className='text-center text-3xl mt-10 text-gray-950 font-semibold'>Get in Touch with us Today!</h1>
            <div>
            <div className="hero bg-[#FFFFFF] mt-7 w-[95%] mx-auto py-2">
  <div className="hero-content flex-col lg:flex-row-reverse w-full">
    <div className="card flex-shrink-0 w-full ">
      <div className="card-body p-0 w-full px-10">
       <div className='flex justify-between gap-x-7'>
       <div className="form-control w-full">
       <input type="text" placeholder="Your Name" className="input input-bordered input-primary w-full" />
        </div>
        <div className="form-control w-full">
        <input type="text" placeholder="Your Email" className="input input-bordered input-primary w-full" />
        </div>
       </div>
       <div className="form-control w-full mt-5">
        <input type="text" placeholder="Subject" className="input input-bordered input-primary w-full" />
        </div>
       <div className="form-control w-full mt-5">
       <textarea className="textarea textarea-primary h-[150px]" placeholder="Enter Your Message..."></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-white text-lg font-normal">Send message</button>
        </div>
      </div>
    </div>
  </div>
</div>
            </div>
            </div>
        </div>
    );
};

export default GetInTouch;