import React from "react";
// icons
import { FiMenu } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full grid  py-1 grid-cols-3 md:py-0 md:grid-cols-7 text-lg px-1  items-center shadow-sm">
      <div className=" cursor-pointer pl-5 flex gap-3 items-center  col-span-1">
        <FiMenu size={22} className="font-semibold" />
        menu
      </div>
      <div className=" cursor-pointer  col-span-1 flex justify-center">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className=" w-9 h-9 md:w-11 md:h-11 rounded-full"
          />
        </Link>
      </div>
      <div className="flex justify-end bg-white col-span-1 md:bg-slate-100 md:py-2 w-[90%] md:items-center md:justify-start md:col-span-3 pl-2 rounded-md">
        <IoMdSearch size={20} />
        <input
          className="hidden  md:py-1 pl-1  bg-slate-100"
          placeholder="Frequent questions"
        />
      </div>
      <div className="hidden md:block cursor-pointer col-span-1 text-center border-r-0 border py-3">
        <Link to="signup">Sign up</Link>
      </div>
      <div className=" hidden md:block py-3 cursor-pointer text-white border col-span-1 text-center bg-[#6C3030]">
        <Link to="/contact">Contact Now</Link>
      </div>
    </div>
  );
};

export default Header;
