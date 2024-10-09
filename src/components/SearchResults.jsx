import React from "react";
// icons
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
const SearchResults = ({ setShowSearch, showSearch, searchResult }) => {
  return (
    <>
      <div className="absolute z-50 left-0 top-20 w-full h-[60vh] bg-white shadow-md rounded sm:top-12">
        <div className="mx-auto flex flex-col w-2/3">
          <MdOutlineClose
            size={25}
            onClick={() => setShowSearch([])}
            className="cursor-pointer pt-1 hover:text-red-800"
          />
          <h2 className="text-center text-gray-500">Search Results</h2>
          <div className="flex flex-col items-center">
            {showSearch.map(
              (key) =>
                searchResult[key] && (
                  <Link key={key} to={searchResult[key]}>
                    <div className="text-gray-600 text-3xl py-2 px-3 hover:text-red-800">
                      {key}
                    </div>
                  </Link>
                )
            )}
          </div>
        </div>
      </div>
      )
    </>
  );
};

export default SearchResults;
