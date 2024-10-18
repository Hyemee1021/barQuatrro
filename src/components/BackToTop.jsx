import React, { useEffect, useState } from "react";

// icon
import { IoIosArrowUp } from "react-icons/io";
export const BackToTop = () => {
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
    <>
      {isvisible && (
        <div
          className="fixed top-0 z-10 w-[100%] bg-white shadow-md  p-3 flex items-center justify-center gap-2 cursor-pointer"
          onClick={backToTop}
        >
          <IoIosArrowUp />
          Back to the top
        </div>
      )}
    </>
  );
};
