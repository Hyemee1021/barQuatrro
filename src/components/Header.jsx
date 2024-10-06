import React, { useEffect, useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux/menuSlice";
import { toggleSearch } from "../redux/searchSlice";

//search Result
import { searchResult } from "../assets/searchResult";
// icons
import { FiMenu } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const menuState = useSelector((state) => state.menu?.value);
  const searchState = useSelector((state) => state.search?.value);

  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState("");

  console.log(searchTerm);
  console.log(searchResult);

  const filterSearch = (searchTerm) => {
    const result = searchTerm.toLowerCase();
    const filteredResults = Object.keys(searchResult).filter(
      (key) => key.toLowerCase().includes(result) && searchResult[key]
    );
    setShowSearch(filteredResults);
  };

  useEffect(() => {
    const timeId = setTimeout(() => {
      filterSearch(searchTerm);
    }, 300);
    return () => clearTimeout(timeId);
  }, [searchTerm]);

  return (
    <div className="relative w-full grid  py-1 grid-cols-3 md:py-0 md:grid-cols-7 text-lg px-1  items-center shadow-sm ">
      {/* Main Menu Trigger */}
      <div className=" cursor-pointer pl-5 flex gap-3 items-center  col-span-1">
        <FiMenu
          size={22}
          className="font-semibold"
          onClick={() => dispatch(toggle())}
        />
        menu
      </div>

      {/* Submenu */}
      {menuState && (
        <div
          className={`absolute left-0 top-full h-[90vh] w-full  md:w-[50%]  bg-slate-50 shadow-s
            m transition-all duration-300 ease-in-out ${
              menuState ? "opacity-100" : "opacity-0 pointer-events-none"
            } `}
        >
          <ul className=" w-[100%] p-4">
            <li className=" hover:w-full py-1 cursor-pointer hover:bg-slate-100">
              Menu1
            </li>
            <li className="py-1  hover:w-full cursor-pointer hover:bg-slate-100">
              Menu2
            </li>
            <li className="py-1  hover:w-full cursor-pointer hover:bg-slate-100">
              What's one
            </li>
            <li className="py-1  hover:w-full cursor-pointer hover:bg-slate-100">
              Contact
            </li>
            <li className="py-1   hover:w-full cursor-pointer hover:bg-slate-100">
              Careers
            </li>
          </ul>
        </div>
      )}

      {/* Logo */}
      <div className=" cursor-pointer  col-span-1 flex justify-center">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className=" w-9 h-9 md:w-11 md:h-11 rounded-full"
          />
        </Link>
      </div>

      {/* Search Bar */}
      <div className=" flex justify-end bg-white col-span-1 md:bg-slate-50 md:py-1 w-[90%] md:items-center md:justify-start md:col-span-3 pl-2 rounded-md">
        <IoMdSearch size={20} onClick={() => dispatch(toggleSearch())} />
        <input
          className={` hidden  md:py-1 md:block pl-1  bg-slate-50 focus:outline-none `}
          placeholder="Frequent questions"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* input for small screen */}
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`md:hidden ${
            searchState
              ? "absolute left-0 top-full w-full py-1 shadow-md"
              : "hidden"
          }   bg-slate-50 focus:outline-none  `}
          placeholder="Frequent questions"
        />

        {showSearch.length > 0 && (
          <div className="absolute bg-white shadow-md rounded mt-2 w-full">
            {showSearch.map(
              (key) =>
                searchResult[key] ? ( // Ensure the value is not undefined
                  <Link key={key} to={searchResult[key]}>
                    <div className="py-2 px-3 hover:bg-gray-200">
                      {searchResult[key]}
                    </div>
                  </Link>
                ) : null // If undefined, render nothing
            )}
          </div>
        )}
      </div>

      {/* Sign Up Link */}
      <div className="hidden md:block cursor-pointer col-span-1 text-center border-r-0 border py-3">
        <Link to="signup">Sign up</Link>
      </div>

      {/* Contact Link */}
      <div className=" hidden md:block py-3 cursor-pointer text-white border col-span-1 text-center bg-[#6C3030]">
        <Link to="/contact">Contact Now</Link>
      </div>
    </div>
  );
};

export default Header;
