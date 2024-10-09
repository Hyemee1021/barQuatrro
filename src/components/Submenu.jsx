import React from "react";
import { Link } from "react-router-dom";

const Submenu = () => {
  return (
    <>
      <div className="absolute z-50 left-0 top-full h-[90vh] w-full md:w-[50%] bg-slate-50 shadow-s transition-all duration-300 ease-in-out opacity-100">
        <ul className="w-[100%] p-4">
          <Link to="/menu">
            <li className="hover:w-full py-1 cursor-pointer hover:bg-slate-100">
              Menu1
            </li>
          </Link>
          <Link to="/functions">
            <li className="py-1 hover:w-full cursor-pointer hover:bg-slate-100">
              What's one
            </li>
          </Link>
          <Link to="/contact">
            <li className="py-1 hover:w-full cursor-pointer hover:bg-slate-100">
              Contact
            </li>
          </Link>
          <Link to="/careers">
            <li className="py-1 hover:w-full cursor-pointer hover:bg-slate-100">
              Careers
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Submenu;
