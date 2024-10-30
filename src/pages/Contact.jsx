// Todo predeployment
// Formspress account for Bar Quattro
// Then update form action
// Need to fix responsiveness of tile buttons at smaller break points

import React, { useState } from "react";
import { Link } from "react-router-dom";
import heroPhoto from "../assets/bar2.jpg";
import '../App.css';

// Form components
const LostPropertyForm = ({ handleButtonClick }) => (
  <form action="https://formspree.io/f/xjkvvqag" method="POST" className="mt-6 border border-gray-200 shadow-lg py-6 pr-6 pl-6" >
    <h3 className="text-xl font-semibold mb-4">Lost Property</h3>
    <input type="text" name="name" className="w-full mb-4 p-2 border" placeholder="Your Name" />
    <input type="email" name="email" className="w-full mb-4 p-2 border" placeholder="Your Email" />
    <textarea name="message" className="w-full mb-4 p-2 border" placeholder="Describe the lost item"></textarea>
    <button type="submit" className="bg-black text-white px-6 py-2">Submit</button>
    <button type="button" onClick={() => handleButtonClick("")} className="bg-black text-white px-6 py-2 ml-6">Cancel</button>
  </form>
);

const EnquiryForm = ({ handleButtonClick }) => (
   <form action="https://formspree.io/f/xjkvvqag" method="POST" className="mt-6 border border-gray-200 shadow-lg py-6 pr-6 pl-6" >
    <h3 className="text-xl font-semibold mb-4">How may we help?</h3>
    <input type="text" name="name" className="w-full mb-4 p-2 border" placeholder="Your Name" />
    <input type="email" name= "email" className="w-full mb-4 p-2 border" placeholder="Your Email" />
    <textarea name="message" className="w-full mb-4 p-2 border" placeholder="What would you like to know?"></textarea>
    <button type="submit" className="bg-black text-white px-6 py-2">Submit Enquiry</button>
    <button type="button" onClick={() => handleButtonClick("")} className="bg-black text-white px-6 py-2 ml-6">Cancel</button>
  </form>
);

const FeedbackForm = ({ handleButtonClick }) => (
   <form action="https://formspree.io/f/xjkvvqag" method="POST" className="mt-6 border border-gray-200 shadow-lg py-6 pr-6 pl-6" >
    <h3 className="text-xl font-semibold mb-4">Provide Feedback</h3>
    <input type="text" name="name" className="w-full mb-4 p-2 border" placeholder="Your Name" />
    <input type="email" name="email" className="w-full mb-4 p-2 border" placeholder="Your Email" />
    <textarea name="message" className="w-full mb-4 p-2 border" placeholder="What did we do well? What could we have done better?"></textarea>
    <button type="submit" className="bg-black text-white px-6 py-2">Submit Feedback</button>
    <button type="button" onClick={()=> handleButtonClick("")} className="bg-black text-white px-6 py-2 ml-6">Cancel</button>
  </form>
);

const FunctionForm = ({ handleButtonClick }) => (
  <form action="https://formspree.io/f/xjkvvqag" method="POST" className="mt-6 border border-gray-200 shadow-lg py-6 pr-6 pl-6" >
   <h3 className="text-xl font-semibold mb-4">Function Enquiry</h3>
   <input type="text" name="name" className="w-full mb-4 p-2 border" placeholder="Your Name" />
   <input type="email" name="email" className="w-full mb-4 p-2 border" placeholder="Your Email" />
   <textarea name="message" className="w-full mb-4 p-2 border" placeholder="Day and time? Number of quests?"></textarea>
   <button type="submit" className="bg-black text-white px-6 py-2">Submit Enquiry</button>
   <button type="button" onClick={ ()=> handleButtonClick("")} className="bg-black text-white px-6 py-2 ml-6">Cancel</button>
 </form>
);

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState(""); // Track selected form

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <main>
      <div className="relative">
        <img
          className="w-full object-cover h-[30vh] md:h-[70vh]"
          src={heroPhoto}
          alt="hero pic"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl md:text-5xl font-bold">
          Contact Us
        </h1>
      </div>

      {/* Centered Question and Dropdown */}
      <div className="w-full flex flex-col items-center justify-center py-5">
        <h2 className="text-black text-sm font-normal">
          HOW CAN WE HELP YOU?
          <span className="relative pl-10">
            <select 
              className="custom-select border border-gray-400 rounded focus:outline-none focus:border-gray-500 cursor-pointer py-2 px-4" 
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option disabled selected value="">
                Please select
              </option>
              <option value="enquiry">MAKE AN ENQUIRY</option>
              <option value="reservation">FUNCTIONS</option>
              <option value="lost-property">LOST PROPERTY</option>
              <option value="feedback">PROVIDE FEEDBACK</option>
            </select>
          </span>
        </h2>
      </div>

      {/* Grey Horizontal Strip with Space Above */}
      <div className="w-full h-[35px] bg-gray-300 flex items-center">
        <div className="ml-10">
          <Link
            to="/"
            className="text-black text-sm hover:text-gray-400 hover:no-underline"
          >
            Return Home
          </Link>
        </div>
      </div>

      {/* Conditional Rendering: Tiles or Form */}
      <div className="w-[110vmin] p-6 bg-white mx-auto">
        {selectedOption === "" ? (
          // Display Tiles if no option is selected
          <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-10 justify-center"> {/* Smaller container size */}
            {/* Tile 1 */}
            <Tile 
              title="Find Us" 
              address1="3/100 BAY RD, WAVERTON NSW 2060" 
              address2="AUSTRALIA"
              link="https://www.google.com/maps?q=Bar+Quattro+Waverton"
              linkText="View Map"
              phone="(02) 9185 0844"
              buttonText="Submit Enquiry"
              onClick={() => handleButtonClick('enquiry')}
            />

            {/* Tile 2 */}
            <Tile 
              title="Function Enquiry" 
              openingHours="Monday-Sunday 3pm-10pm"
              buttonText="Email Team"
              onClick={() => handleButtonClick('function')}
            />

            {/* Tile 3 */}
            <Tile 
              title="Lost Property" 
              description="Let us know if you lost property at our venue."
              buttonText="Enquire Now"
              onClick={() => handleButtonClick('lost-property')}
            />

            {/* Tile 4 */}
            <Tile 
              title="We Love Feedback" 
              description="Please contact us, we'd love to hear about your experience."
              buttonText="Provide Feedback"
              onClick={() => handleButtonClick('feedback')}
            />
          </div>
          </div>
        ) : (
          // Display Form if an option is selected
          <div className="flex items-center justify-center h-[50vh]">
            {selectedOption === 'lost-property' && <LostPropertyForm handleButtonClick={handleButtonClick}/>}
            {selectedOption === 'enquiry' && <EnquiryForm handleButtonClick={handleButtonClick}/>}
            {selectedOption === 'feedback' && <FeedbackForm handleButtonClick={handleButtonClick}/>}
            {selectedOption === 'function' && <FunctionForm handleButtonClick={handleButtonClick} />}
          </div>
        )}
      </div>
    </main>
  );
};

const Tile = ({ title, address1, address2, link, linkText, phone, description, openingHours, buttonText, onClick }) => (
  <div className="bg-white p-4 flex flex-col justify-between items-center h-[50vmin] w-[50vmin] border border-gray-200 shadow-lg"> {/* Reduced height and width */}
    <div className="flex flex-col items-center justify-center mt-2">
      <h3 className="text-lg mb-1 font-semibold">{title}</h3>
    </div>
    <div className="flex flex-col items-center justify-center text-center">
      {address1 && <p className="text-sm text-black mb-1">{address1}</p>}
      {address2 && <p className="text-sm text-black mb-2">{address2}</p>}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline mb-2"
        >
          {linkText}
        </a>
      )}
      {phone && <p className="text-sm text-black mb-2">Ph: {phone}</p>}
      {description && <p className="text-sm text-black mb-2">{description}</p>}
      {openingHours && (
        <>
          <p className="text-sm text-black mb-1">Opening Hours:</p>
          <p className="text-sm text-black mb-2">{openingHours}</p>
        </>
      )}
    </div>
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-black text-white border border-black hover:bg-blue-600 transition-all duration-200"
    >
      {buttonText}
    </button>
  </div>
);

export default Contact;