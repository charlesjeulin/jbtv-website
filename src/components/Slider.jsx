import React, { useState } from "react";
import Image from "next/image";
import { SliderData } from "../components/SliderData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = React.useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div id="gallery" className="max-w-[1400px] mx-auto mt-6">
      <div className="relative flex justify-center">
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className="absolute left-[30px] top-[50%] text-white z-[2] cursor-pointer select-none"
                size={30}
              />
              {index === current && (
                <Image
                  src={slide.image}
                  alt="Photo Slider"
                  width="1920"
                  height="1080"
                  style={{ objectFit: "cover" }}
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className="absolute right-[30px] top-[50%] text-white z-[2] cursor-pointer select-none"
                size={30}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
