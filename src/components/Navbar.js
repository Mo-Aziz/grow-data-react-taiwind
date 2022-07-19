import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiFillDatabase } from "react-icons/ai";



const styles ={
    headerContainer:`flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  text-white`,
    logo :`flex  w-full text-3xl font-bold text-[#00df9a]`,
    toggleLink:`p-4 border-b border-gray-600`
}

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={styles.headerContainer}>
      {/* logo */}
      <h1 className={styles.logo}>
        Grow-Data
        <span className="px-2">
          <AiFillDatabase />
        </span>
      </h1>
      {/* nav menu links */}
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      {/* toogle icon */}
      <div className="block md:hidden" onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* mobile menu */}
      <div className={!nav? "fixed pt-4 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]"}>
        <h1
          className={styles.logo}
        >
          Grow-Data
          <span className="px-2">
            <AiFillDatabase />
          </span>
        </h1>

        <ul className=" uppercase p-4">
          <li className={styles.toggleLink}>Home</li>
          <li className={styles.toggleLink}>Company</li>
          <li className={styles.toggleLink}>Resources</li>
          <li className={styles.toggleLink}>About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
