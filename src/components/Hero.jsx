import React from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex justify-center h-screen bg-fixed bg-center bg-cover custom-img">
      <div className="absolute bottom-[10%] z-[2]">
        <a href="#Events">
          <MdOutlineKeyboardDoubleArrowDown
            className="animate-bounce text-white"
            size={40}
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
