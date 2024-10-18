import React from "react";
import heroPhoto from "../assets/bar1.webp";
import Functions from "./Functions";
const Home = () => {
  return (
    <main>
      <div className="relative">
        <img
          className="w-full object-cover h-[30vh] md:h-[70vh]"
          src={heroPhoto}
          alt="hero pic"
        />
      </div>
    </main>
  );
};

export default Home;
