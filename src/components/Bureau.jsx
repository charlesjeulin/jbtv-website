import React, { useState } from "react";
import Image from "next/image";
import { AiFillLinkedin } from "react-icons/ai";

const Bureau = () => {
  return (
    <div
      id="Bureau"
      className="flex flex-col items-center justify-center h-full pt-20 pb-28"
    >
      <h1 className="font-extrabold text-6xl text-center pb-28 pt-5">Bureau</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20">
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
          <div className="h-80 w-80">
            <Image
              className="h-full w-full object-cover group-hover:translate-y-[-3%] group-hover:scale-110 transition-transform duration-300"
              src="/bureau/president.jpg"
              width={500}
              height={500}
              alt="Photo burau 1"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-9 translate-y-[65%] group-hover:translate-y-0 duration-300 transition-all">
            <h1 className="text-3xl font-bold text-white mb-3">Président</h1>
            <ul className="text-lg italic text-white">
              <li>Charles JEULIN</li>
              <li>07 69 42 55 78</li>
              <li>charles.jeulin@edu.ece.fr</li>
              <li className="mt-4 ml-20">
                <a
                  href="https://www.linkedin.com/in/charles-jeulin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin size={50} className="hover:text-[#0077b5]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
          <div className="h-80 w-80">
            <Image
              className="h-full w-full object-cover group-hover:translate-y-[-3%] group-hover:scale-110 transition-transform duration-300"
              src="/bureau/president.jpg"
              width={500}
              height={500}
              alt="Photo burau 2"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-9 translate-y-[65%] group-hover:translate-y-0 duration-300 transition-all">
            <h1 className="text-3xl font-bold text-white mb-3">Président</h1>
            <ul className="text-lg italic text-white">
              <li>Charles JEULIN</li>
              <li>07 69 42 55 78</li>
              <li>charles.jeulin@edu.ece.fr</li>
              <li className="mt-4 ml-20">
                <a
                  href="https://www.linkedin.com/in/charles-jeulin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin size={50} className="hover:text-[#0077b5]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
          <div className="h-80 w-80">
            <Image
              className="h-full w-full object-cover group-hover:translate-y-[-3%] group-hover:scale-110 transition-transform duration-300"
              src="/bureau/president.jpg"
              width={500}
              height={500}
              alt="Photo burau 3"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-9 translate-y-[65%] group-hover:translate-y-0 duration-300 transition-all">
            <h1 className="text-3xl font-bold text-white mb-3">Président</h1>
            <ul className="text-lg italic text-white">
              <li>Charles JEULIN</li>
              <li>07 69 42 55 78</li>
              <li>charles.jeulin@edu.ece.fr</li>
              <li className="mt-4 ml-20">
                <a
                  href="https://www.linkedin.com/in/charles-jeulin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin size={50} className="hover:text-[#0077b5]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
          <div className="h-80 w-80">
            <Image
              className="h-full w-full object-cover group-hover:translate-y-[-3%] group-hover:scale-110 transition-transform duration-300"
              src="/bureau/president.jpg"
              width={500}
              height={500}
              alt="Photo burau 4"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-9 translate-y-[65%] group-hover:translate-y-0 duration-300 transition-all">
            <h1 className="text-3xl font-bold text-white mb-3">Président</h1>
            <ul className="text-lg italic text-white">
              <li>Charles JEULIN</li>
              <li>07 69 42 55 78</li>
              <li>charles.jeulin@edu.ece.fr</li>
              <li className="mt-4 ml-20">
                <a
                  href="https://www.linkedin.com/in/charles-jeulin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin size={50} className="hover:text-[#0077b5]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
          <div className="h-80 w-80">
            <Image
              className="h-full w-full object-cover group-hover:translate-y-[-3%] group-hover:scale-110 transition-transform duration-300"
              src="/bureau/president.jpg"
              width={500}
              height={500}
              alt="Photo burau 5"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-9 translate-y-[65%] group-hover:translate-y-0 duration-300 transition-all">
            <h1 className="text-3xl font-bold text-white mb-3">Président</h1>
            <ul className="text-lg italic text-white">
              <li>Charles JEULIN</li>
              <li>07 69 42 55 78</li>
              <li>charles.jeulin@edu.ece.fr</li>
              <li className="mt-4 ml-20">
                <a
                  href="https://www.linkedin.com/in/charles-jeulin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin size={50} className="hover:text-[#0077b5]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
          <div className="h-80 w-80">
            <Image
              className="h-full w-full object-cover group-hover:translate-y-[-3%] group-hover:scale-110 transition-transform duration-300"
              src="/bureau/president.jpg"
              width={500}
              height={500}
              alt="Photo burau 6"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-9 translate-y-[65%] group-hover:translate-y-0 duration-300 transition-all">
            <h1 className="text-3xl font-bold text-white mb-3">Président</h1>
            <ul className="text-lg italic text-white">
              <li>Charles JEULIN</li>
              <li>07 69 42 55 78</li>
              <li>charles.jeulin@edu.ece.fr</li>
              <li className="mt-4 ml-20">
                <a
                  href="https://www.linkedin.com/in/charles-jeulin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin size={50} className="hover:text-[#0077b5]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bureau;
