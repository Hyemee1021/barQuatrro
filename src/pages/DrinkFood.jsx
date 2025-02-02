import React from "react";
import heroPhoto from "../assets/food2.jpg";
import useDocumentTitle from "../components/useDocumentTitle";
// css
import "../index.css";
export const DrinkFood = () => {
  useDocumentTitle("Drink and Food");

  return (
    <main>
      <div className="relative ">
        <img
          className="w-full object-cover h-[30vh] md:h-[70vh]"
          src={heroPhoto}
          alt="hero pic"
        />
        <p className="text-white text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow ">
          Drink and Food
        </p>
      </div>
    </main>
  );
};
