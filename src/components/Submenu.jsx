import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggle } from "../redux/menuSlice";

const Submenu = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="absolute z-50 left-0 top-full h-[90vh] w-full md:w-[50%] bg-slate-50 shadow-s transition-all duration-300 ease-in-out opacity-100 "
        onClick={dispatch(toggle)}
      >
        <ul className="w-[100%] p-4">
          <Link to="/menu">
            <li className="hover:w-full py-1 cursor-pointer hover:bg-slate-100">
              Menu
            </li>
          </Link>
          <Link to="/functions">
            <li className="py-1 hover:w-full cursor-pointer hover:bg-slate-100">
              What's on
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
