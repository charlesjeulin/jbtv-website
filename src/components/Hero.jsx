import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Hero = ({ heading, message }) => {
  const [arrow, setArrow] = useState(true);

  useEffect(() => {
    const arrow = () => {
      if (window.scrollY >= 70) {
        setArrow(false);
      } else {
        setArrow(true);
      }
    };
    window.addEventListener("scroll", arrow);
  }, []);

  return (
    <div className="flex justify-center h-screen bg-fixed bg-center bg-cover custom-img">
      <div className="absolute bottom-[10%] z-[2]">
        <a href="#Events">
          {arrow ? (
            <MdOutlineKeyboardDoubleArrowDown
              className="animate-bounce text-white"
              size={40}
            />
          ) : (
            <div></div>
          )}
        </a>
      </div>
    </div>
  );
};

export default Hero;
