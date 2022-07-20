import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-width-[1240px] mx-auto grid md:grid-cols-2">
        <img  className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop-image" />
        <div className="flex flex-col justify-center ">
          <p className="uppercase text-[#00df9a] font-bold">Data Analytics dashboard</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">Manage Data Analytics Centerally</h1>
          <p>
            When a data and analytics (D&A) have to be crafted a new
            organizational model for centralized and decentralized analytics
            teams, the long-standing debate between control and freedom emerges.
            The centralization-versus-decentralization debate often
          </p>
          <button className=" bg-black text-[#00df9a] w-[200px] rounded-md cursor-pointer font-medium my-6 mx-auto md:mx-0 py-3  ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
