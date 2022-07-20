import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
            Want tips & tricks to optimize your web analytics flow flow?
          </h1>
          <p className="font-medium">Sign up to our newsletter and stay up to date.</p>
        </div>
        {/* section 2 */}
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full" >
            <input className="p-3 flex w-full rounded-md text-black" type='email' placeholder="Enter your email" />
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>
          <p>We care bout the protection of your data. Read our{' '}<span className='text-[#00df9a]'> Privacy Policy.</span> </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
