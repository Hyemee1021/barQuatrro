import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import photo1 from "../assets/bar2.jpg";
import photo2 from "../assets/bar1.webp";
import photo3 from "../assets/images.jpeg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

// icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const Careers = () => {
  const settings = {
    // dots: true, // Show pagination dots
    infinite: true, // Infinite loop
    speed: 500, // Animation speed
    slidesToShow: 1, // Number of slides visible
    slidesToScroll: 1, // Number of slides to scroll per click
    autoplay: true, // Automatically change slides
    autoplaySpeed: 2000, // Time between slides
  };

  const [isvisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-slate-100 pb-32 h-full">
      {isvisible && (
        <div
          className="fixed top-0 z-10 w-[100%] bg-white shadow-md  p-3 flex items-center justify-center gap-2 cursor-pointer"
          onClick={backToTop}
        >
          <IoIosArrowUp />
          Back to the top
        </div>
      )}
      <div className=" h-[30vh] md:h-[70vh]  ">
        <Slider {...settings}>
          <div>
            <img
              className=" w-full object-cover h-[30vh] md:h-[70vh]"
              src={photo1}
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              className="w-full  object-cover h-[30vh] md:h-[70vh]"
              src={photo2}
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              className="w-full  object-cover h-[30vh] md:h-[70vh]"
              src={photo3}
              alt="Slide 3"
            />
          </div>
        </Slider>
        <p className="absolute font-semibold top-[22%] text-4xl  sm:top-[22%] md:top-[48%] text-white title left-[50%]  transform -translate-x-1/2 -translate-y-1/2 ">
          Careers
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
            <h1 className="text-4xl title_2 ">Careers at </h1>
            <h1 className="text-4xl title_2 mt-2  ">Bar Quattro</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            aperiam quisquam accusamus alias explicabo expedita maxime inventore
            iste eaque magnam dolore, saepe sit ducimus veritatis harum
            laboriosam temporibus ab suscipit consequuntur ut, sunt perferendis.
            Esse itaque eligendi dolorum eveniet dicta!
          </p>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            aperiam quisquam accusamus alias explicabo expedita maxime inventore
            iste eaque magnam dolore, saepe sit ducimus veritatis harum
            laboriosam temporibus ab suscipit consequuntur ut, sunt perferendis.
            Esse itaque eligendi dolorum eveniet dicta!
          </p>
        </div>
      </div>
    </main>
  );
};

export default Careers;
