import React, { useState } from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div
      id="Gallery"
      className="flex flex-col items-center justify-center h-full pb-12 pt-12"
    >
      <div>
        <h1 className="font-extrabold text-6xl text-center pb-12 pt-12">
          Galerie
        </h1>
        <div className="sm:columns-2 columns-1 lg:columns-4 gap-3 ml:0 mr:0 lg:ml-20 lg:mr-20 space-y-3 pt-12 pb-20 max-w-fit">
          <div className="break-inside-avoid">
            <Image
              src="/gallery/1.jpg"
              width={500}
              height={500}
              alt="Photo Gallery"
              className=""
            />
          </div>
          <div className="break-inside-avoid">
            <Image
              src="/gallery/4.jpg"
              width={500}
              height={500}
              alt="Photo Gallery"
              className=""
            />
          </div>
          <div className="break-inside-avoid">
            <Image
              src="/gallery/5.jpg"
              width={500}
              height={500}
              alt="Photo Gallery"
              className=""
            />
          </div>
          <div className="break-inside-avoid">
            <Image
              src="/gallery/3.jpg"
              width={500}
              height={500}
              alt="Photo Gallery"
              className="w-fit"
            />
          </div>
          <div className="break-inside-avoid">
            <Image
              src="/gallery/2.jpg"
              width={500}
              height={500}
              alt="Photo Gallery"
              className="w-fit"
            />
          </div>
          <div className="break-inside-avoid">
            <Image
              src="/gallery/6.jpg"
              width={500}
              height={500}
              alt="Photo Gallery"
              className="w-fit"
            />
          </div>
          <div className="break-inside-avoid">
            <Image
              src="/gallery/7.jpg"
              width={500}
              height={500}
              alt="Photo Gallery"
              className="w-fit"
            />
          </div>
          <div className="break-inside-avoid">
            <Image
              src="/gallery/8.jpg"
              width={500}
              height={500}
              alt="Photo Gallery"
              className="w-fit"
            />
          </div>
          <div className="break-inside-avoid">
            <Image
              src="/gallery/9.jpg"
              width={500}
              height={500}
              alt="Photo Gallery"
              className="w-fit"
            />
          </div>
          <div className="break-inside-avoid">
            <Image
              src="/gallery/10.jpg"
              width={500}
              height={500}
              alt="Photo Gallery"
              className="w-fit"
            />
          </div>
          <div className="break-inside-avoid">
            <Image
              src="/gallery/11.jpg"
              width={500}
              height={500}
              alt="Photo Gallery"
              className="w-fit"
            />
          </div>
          <div className="break-inside-avoid">
            <Image
              src="/gallery/12.jpg"
              width={500}
              height={500}
              alt="Photo Gallery"
              className="w-fit"
            />
          </div>
          <div className="break-inside-avoid">
            <Image
              src="/gallery/13.jpg"
              width={500}
              height={500}
              alt="Photo Gallery"
              className="w-fit"
            />
          </div>
          <div className="break-inside-avoid">
            <Image
              src="/gallery/14.jpg"
              width={500}
              height={500}
              alt="Photo Gallery"
              className="w-fit"
            />
          </div>
          <div className="break-inside-avoid">
            <Image
              src="/gallery/15.jpg"
              width={500}
              height={500}
              alt="Photo Gallery"
              className="w-fit"
            />
          </div>
          <div className="break-inside-avoid">
            <Image
              src="/gallery/16.jpg"
              width={500}
              height={500}
              alt="Photo Gallery"
              className="w-fit"
            />
          </div>
          <div className="break-inside-avoid">
            <Image
              src="/gallery/17.jpg"
              width={500}
              height={500}
              alt="Photo Gallery"
              className="w-fit"
            />
          </div>
          <div className="break-inside-avoid">
            <Image
              src="/gallery/18.jpg"
              width={500}
              height={500}
              alt="Photo Gallery"
              className="w-fit"
            />
          </div>
          <div className="break-inside-avoid">
            <Image
              src="/gallery/19.jpg"
              width={500}
              height={500}
              alt="Photo Gallery"
              className="w-fit"
            />
          </div>
        </div>
      </div>
      <div className="pt-10 pb-28">
        <a
          href="https://jbtv-galerie.ece.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-5 py-3 overflow-hidden font-medium text-gray-900 bg-white border border-white rounded-lg text-3xl group"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-900 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-900 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-900 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-900 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-500"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            Lien vers notre galerie
          </span>
        </a>
      </div>
    </div>
  );
};

export default Gallery;
