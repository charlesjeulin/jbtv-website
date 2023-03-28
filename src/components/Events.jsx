import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SliderData } from "../components/SliderData";
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "react-icons/ri";

import Aos from "aos";
import "aos/dist/aos.css";

const Events = ({ slides }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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
    <div
      data-aos="fade-right"
      data-aos-offset="400"
      id="Events"
      className="flex flex-col justify-center items-center h-full pt-36 mb-48 mx-auto max-w-[1240px]"
    >
      <h1 className="font-extrabold text-6xl text-center pb-44 pt-10">
        Evenements du moment
      </h1>
      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "opacity-[1] ease-in duration-300"
                : "opacity-0"
            }
          >
            {index === current && (
              <div className="flex rounded-xl shadow-lg">
                <div className="relative hidden lg:flex flex-col min-h-full items-center justify-center max-h-96">
                  <Image
                    src={slide.image}
                    width="576"
                    height="384"
                    alt="image events"
                    className="rounded-xl"
                  />
                </div>
                <div className="bg-white rounded-xl shadow-md h-96 lg:w-80 flex flex-col relative w-80 flex-shrink-0">
                  <Image
                    src={"/filigrane.png"}
                    width="1920"
                    height="1080"
                    alt="logo events"
                    style={{ objectFit: "cover" }}
                    className="absolute w-[70%] ml-[3rem] top-0 transform -translate-y-[50%] "
                  />
                  <div className="mt-28 text-center">
                    <h1 className="text-2xl font-bold text-gray-800">
                      {slide.title}
                    </h1>
                    <p className="mt-10 ml-5 mr-5">{slide.message}</p>
                    <p className="mt-10 ml-5 mr-5 font-bold">{slide.date}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <div className="flex items-center-justify-center mt-16">
        <RiArrowLeftCircleLine
          onClick={prevSlide}
          className="text-black z-[2] mr-3 cursor-pointer select-none hover:text-[#228B22]"
          size={30}
        />
        <RiArrowRightCircleLine
          onClick={nextSlide}
          className="text-black z-[2] ml-3 cursor-pointer select-none hover:text-[#228B22]"
          size={30}
        />
      </div>
    </div>
  );
};

export default Events;
