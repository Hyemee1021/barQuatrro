import React from "react";
import heroPhoto from "../assets/bar1.jpg";
import Functions from "./Functions";
import useDocumentTitle from "../components/useDocumentTitle";
const Home = () => {
  useDocumentTitle("Bar Quattro");
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
