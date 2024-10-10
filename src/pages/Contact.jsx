import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <main>
      <div className="relative">
        <div className="w-full h-[30vh] md:h-[70vh] bg-black flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Contact us
          </h1>
        </div>

        <div className="w-full h-[35px] bg-gray-300 flex items-center">
          <div className="ml-7">
            <Link
              to="/"
              className="text-black text-lg hover:text-gray-400 hover:no-underline"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
