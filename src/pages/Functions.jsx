import React from "react";
import functionP from "../assets/images.jpeg";
const Functions = () => {
  return (
    <main>
      <div className="relative">
        <img
          className="w-full object-cover h-[30vh] md:h-[70vh]"
          src={functionP}
          alt="hero pic"
        />
        <p className="absolute font-bold font-3xl  top-[50%] text-white title left-[50%]  transform -translate-x-1/2 -translate-y-1/2 ">
          What's On
        </p>
      </div>
    </main>
  );
};

export default Functions;
