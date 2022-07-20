import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">

        {/* card 1 */}
        <div className="w-full shadow-xl flex flex-col items-center p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="card"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="font-bold text-4xl text-center">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 ">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Start Trail</button>
        </div>
        {/* card 2 */}
        <div className="w-full shadow-xl flex flex-col items-center p-4  md:my-0 my-8 rounded-lg hover:scale-105 duration-300 bg-gray-100">
          <img
            className="w-20 mx-auto mt-[-3rem]"
            src={Double}
            alt="card"
          />
          <h2 className="text-2xl font-bold text-center py-8"> Three Users</h2>
          <p className="font-bold text-4xl text-center">$200</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 ">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className='bg-black text-[#00df9a] rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Start Trail</button>
        </div>
        {/* card 3 */}
        <div className="w-full shadow-xl flex flex-col items-center p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="card"
          />
          <h2 className="text-2xl font-bold text-center py-8">Large Teams</h2>
          <p className="font-bold text-4xl text-center">$290</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 ">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Start Trail</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
