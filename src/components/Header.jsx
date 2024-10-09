import React, { lazy, Suspense, useEffect, useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux/menuSlice";
import { toggleSearch } from "../redux/searchSlice";

//search Result
import { searchResult } from "../assets/searchResult";
import { frequentQ } from "../assets/searchResult";

// lazy loading
const SubMenu = lazy(() => import("../components/Submenu"));
const SearchResults = lazy(() => import("../components/SearchResults"));
const SearchNotFound = lazy(() => import("../components/SearchNotFound"));
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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchNotFound, setSearchNotFound] = useState(false);
  const [showSearch, setShowSearch] = useState([]);

  const filterSearch = (searchTerm) => {
    if (!searchTerm) {
      setShowSearch([]);
      setSearchNotFound(false);
      return;
    }
    const result = searchTerm.trim().toLowerCase();
    const filteredResults = Object.keys(searchResult).filter((key) =>
      key.toLowerCase().includes(result)
    );

    if (filteredResults.length === 0) {
      setSearchNotFound(true);
      setShowSearch([]);
    } else {
      setSearchNotFound(false);
      setShowSearch(filteredResults);
    }
  };

  useEffect(() => {
    const timeId = setTimeout(() => {
      filterSearch(searchTerm);
    }, 300);
    return () => clearTimeout(timeId);
  }, [searchTerm]);

  return (
    <div className="relative w-full grid py-1 grid-cols-3 md:py-0 md:grid-cols-7 text-lg px-1 items-center shadow-sm">
      {/* Main Menu Trigger */}
      <div className="cursor-pointer pl-5 flex gap-3 items-center col-span-1">
        <FiMenu
          size={22}
          className="font-semibold"
          onClick={() => dispatch(toggle())}
        />
        menu
      </div>

      {/* Submenu */}
      {menuState && (
        <Suspense fallback={"loading.."}>
          <SubMenu />
        </Suspense>
      )}

      {/* Logo */}
      <div className="cursor-pointer col-span-1 flex justify-center">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-9 h-9 md:w-11 md:h-11 rounded-full"
          />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex justify-end bg-white col-span-1 md:bg-slate-100 md:py-1 w-[90%] md:items-center md:justify-start md:col-span-3 pl-2 rounded-md">
        <IoMdSearch size={20} onClick={() => dispatch(toggleSearch())} />
        <input
          className={`hidden md:block pl-1 bg-slate-100 focus:outline-none`}
          placeholder="Frequent questions"
          aria-label="Search frequent questions"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          aria-label="Search frequent questions"
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`md:hidden ${
            searchState
              ? "absolute z-50 left-0 top-full w-full py-1 shadow-md pl-2"
              : "hidden"
          } bg-slate-100 focus:outline-none`}
          placeholder="Frequent questions"
        />

        {/* Display search results or "not found" */}
        {showSearch.length > 0 ? (
          <SearchResults
            setShowSearch={setShowSearch}
            showSearch={showSearch}
            searchResult={searchResult}
          />
        ) : searchNotFound ? (
          <SearchNotFound
            frequentQ={frequentQ}
            setSearchNotFound={setSearchNotFound}
          />
        ) : null}
      </div>

      {/* Sign Up Link */}
      <div className="hidden md:block cursor-pointer col-span-1 text-center border-r-0 border py-3">
        <Link to="signup">Sign up</Link>
      </div>

      {/* Contact Link */}
      <div className="hidden md:block py-3 cursor-pointer text-white border col-span-1 text-center bg-[#6C3030]">
        <Link to="/contact">Contact Now</Link>
      </div>
    </div>
  );
};

export default Header;
