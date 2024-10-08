import React, { useEffect, useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux/menuSlice";
import { toggleSearch } from "../redux/searchSlice";

//search Result
import { searchResult } from "../assets/searchResult";
// icons
import { MdOutlineClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const menuState = useSelector((state) => state.menu?.value);
  const searchState = useSelector((state) => state.search?.value);
  console.log(searchState);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState([]);

  console.log(showSearch);

  const filterSearch = (searchTerm) => {
    if (!searchTerm) {
      setShowSearch([]); // Reset to an empty array if there's no search term
      return;
    }
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
          className={`absolute z-50 left-0 top-full h-[90vh] w-full  md:w-[50%]  bg-slate-50 shadow-s
            m transition-all duration-300 ease-in-out ${
              menuState ? "opacity-100" : "opacity-0 pointer-events-none"
            } `}
        >
          <ul className=" w-[100%] p-4">
            <Link to="/menu">
              <li className=" hover:w-full py-1 cursor-pointer hover:bg-slate-100">
                Menu1
              </li>
            </Link>
            <Link to="/functions">
              <li className="py-1  hover:w-full cursor-pointer hover:bg-slate-100">
                What's one
              </li>
            </Link>
            <Link to="/contact">
              <li className="py-1  hover:w-full cursor-pointer hover:bg-slate-100">
                Contact
              </li>
            </Link>
            <Link to="/careers">
              <li className="py-1   hover:w-full cursor-pointer hover:bg-slate-100">
                Careers
              </li>
            </Link>
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
      <div className=" flex justify-end bg-white col-span-1 md:bg-slate-100 md:py-1 w-[90%] md:items-center md:justify-start md:col-span-3 pl-2 rounded-md">
        <IoMdSearch size={20} onClick={() => dispatch(toggleSearch())} />
        <input
          className={` hidden   md:block pl-1  bg-slate-100 focus:outline-none `}
          placeholder="Frequent questions"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* input for small screen */}
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`md:hidden ${
            searchState
              ? "absolute z-50 left-0 top-full w-full py-1 shadow-md pl-2"
              : "hidden"
          }   bg-slate-100 focus:outline-none  `}
          placeholder="Frequent questions"
        />

        {showSearch.length > 0 && (
          <div className="absolute pt-1 z-50 left-0 top-20 bg-white shadow-md rounded  w-full h-[60vh]  sm:top-12 ">
            <div className="mx-auto flex flex-col justify-between w-2/3  ">
              <div className="colums-2 p-3 hover:text-red-800 hover:cursor-pointer">
                <MdOutlineClose size={25} onClick={() => setShowSearch([])} />
              </div>
              <h2 className="text-center  text-gray-500">Search Results</h2>
              <div className="flex flex-col items-center justify-center">
                {showSearch.map(
                  (key) =>
                    searchResult[key] ? ( // Ensure the value is not undefined
                      <Link key={key} to={searchResult[key]}>
                        <div className=" text-gray-600 text-3xl py-2 px-3 hover:text-red-800">
                          {key}
                        </div>
                      </Link>
                    ) : null // If undefined, render nothing
                )}
              </div>
              <div className="text-center mt-8">
                <h2 className=" text-gray-500">Popualr Links</h2>
                <ul>
                  <Link to="/functions">
                    <li className="hover:text-red-800">What's on</li>
                    <li className="hover:text-red-800">Contacts</li>
                    <li className="hover:text-red-800">Careers</li>
                  </Link>
                </ul>
              </div>
            </div>
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
