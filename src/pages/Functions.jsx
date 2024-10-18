import React, { useEffect, useState } from "react";
// images
import functionP from "../assets/images.jpeg";
import monday from "../assets/monday.jpeg";
// icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Functions = () => {
  const [isvisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Attach the listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="bg-slate-100 pb-32">
      {/* back to  top */}

      {isvisible && (
        <div
          className="fixed top-0 z-10 w-[100%] bg-white shadow-md  p-3 flex items-center justify-center gap-2 cursor-pointer"
          onClick={backToTop}
        >
          <IoIosArrowUp />
          Back to the top
        </div>
      )}

      <div className="relative">
        <img
          className="w-full object-cover h-[30vh] md:h-[70vh]"
          src={functionP}
          alt="hero pic"
        />
        <p className="absolute font-semibold text-4xl  top-[50%] text-white title left-[50%]  transform -translate-x-1/2 -translate-y-1/2 ">
          What's On
        </p>
      </div>
      <div className="w-full">
        <div className=" w-[85%] sm:w-[93%] mx-auto">
          <Link to="/">
            <div className="flex flex-row items-center mt-3">
              <IoIosArrowBack />

              <p className="">Home</p>
            </div>
          </Link>
          <div className="flex flex-col my-16 sm:flex-row sm:items-center gap-3 justify-center">
            <h1 className="text-4xl title_2 ">Coming Up at </h1>
            <h1 className="text-4xl title_2 mt-2  ">Bar Quattro</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mt-12 gap-10  ">
            {/* Monday */}
            <div className="bg-white w-full shadow-sm">
              <div className="min-h-max   ">
                <img
                  src={monday}
                  className="w-full object-cover h-[70vh] md:h-[70vh]"
                />
              </div>
              <div className="p-3 py-5 gap-3  sm:px-8 md:px-10 flex flex-col md:gap-3">
                <p className="title_2 text-gray-500">Monday</p>
                <p className="text-2xl">Event Title</p>
                <p className="text-sm">7:00 PM - 10:00 PM</p>
              </div>
            </div>
            {/* Tueseday */}
            <div className="bg-white w-full shadow-sm">
              <div className="min-h-max   ">
                <img
                  src={monday}
                  className="w-full object-cover h-[70vh] md:h-[70vh]"
                />
              </div>
              <div className="p-3 py-5 gap-3  sm:px-8 md:px-10 flex flex-col md:gap-3">
                <p className="title_2 text-gray-500">Tuesday</p>
                <p className="text-2xl">Event Title</p>
                <p className="text-sm">7:00 PM - 10:00 PM</p>
              </div>
            </div>
            {/* Wednesday */}
            <div className="bg-white w-full shadow-sm">
              <div className="min-h-max   ">
                <img
                  src={monday}
                  className="w-full object-cover h-[70vh] md:h-[70vh]"
                />
              </div>
              <div className="p-3 py-5 gap-3  sm:px-8 md:px-10 flex flex-col md:gap-3">
                <p className="title_2 text-gray-500">Wednesday</p>
                <p className="text-2xl">Event Title</p>
                <p className="text-sm">7:00 PM - 10:00 PM</p>
              </div>
            </div>
            {/* Thursday */}
            <div className="bg-white w-full shadow-sm">
              <div className="min-h-max   ">
                <img
                  src={monday}
                  className="w-full object-cover h-[70vh] md:h-[70vh]"
                />
              </div>
              <div className="p-3 py-5 gap-3  sm:px-8 md:px-10 flex flex-col md:gap-3">
                <p className="title_2 text-gray-500">Thursday</p>
                <p className="text-2xl">Event Title</p>
                <p className="text-sm">7:00 PM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Functions;
