import React from "react";
import { Link } from "react-router-dom";
// icons
import { MdOutlineClose } from "react-icons/md";
const SearchNotFound = ({ frequentQ, setSearchNotFound }) => {
  return (
    <div className="absolute z-50 left-0 top-20 w-full h-[60vh] bg-white shadow-md rounded sm:top-12">
      <div className="mx-auto flex flex-row w-2/3  justify-center gap-1 pt-8">
        <MdOutlineClose
          size={25}
          onClick={() => setSearchNotFound(false)}
          className="cursor-pointer pt-2 hover:text-red-800 "
        />
        <div className="text-center">
          <h2 className="text-gray-500  text-3xl py-2 px-3 ">
            Item not found...
          </h2>
          <h2 className="text-gray-500 ">Popular Links</h2>
          <ul>
            {frequentQ.map((ele) => (
              <Link key={ele} to={`/${ele.toLowerCase()}`}>
                <li className="hover:text-red-800">{ele}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchNotFound;
