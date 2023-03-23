import React, { useState } from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div
      id="Gallery"
      className="flex flex-col items-center justify-center h-full pb-12 pt-12"
    >
      <div>
        <h1 className="font-bold text-4xl text-center pb-12 pt-12">Galerie</h1>
        <div className="sm:columns-3 columns-2 lg:columns-4 gap-3 max-w-[1240px] mx-auto space-y-3 p-6 pt-12 pb-20">
          <div className="break-inside-avoid">
            <Image src="/1.jpg" width={500} height={500} />
          </div>
          <div className="break-inside-avoid">
            <Image src="/4.jpg" width={500} height={500} />
          </div>
          <div className="break-inside-avoid">
            <Image src="/5.jpg" width={500} height={500} />
          </div>
          <div className="break-inside-avoid">
            <Image src="/3.jpg" width={500} height={500} />
          </div>
          <div className="break-inside-avoid">
            <Image src="/2.jpg" width={500} height={500} />
          </div>
          <div className="break-inside-avoid">
            <Image src="/6.jpg" width={500} height={500} />
          </div>
          <div className="break-inside-avoid">
            <Image src="/7.jpg" width={500} height={500} />
          </div>
          <div className="break-inside-avoid">
            <Image src="/8.jpg" width={500} height={500} />
          </div>
          <div className="break-inside-avoid">
            <Image src="/9.jpg" width={500} height={500} />
          </div>
          <div className="break-inside-avoid">
            <Image src="/10.jpg" width={500} height={500} />
          </div>
          <div className="break-inside-avoid">
            <Image src="/11.jpg" width={500} height={500} />
          </div>
          <div className="break-inside-avoid">
            <Image src="/12.jpg" width={500} height={500} />
          </div>
          <div className="break-inside-avoid">
            <Image src="/13.jpg" width={500} height={500} />
          </div>
          <div className="break-inside-avoid">
            <Image src="/14.jpg" width={500} height={500} />
          </div>
          <div className="break-inside-avoid">
            <Image src="/15.jpg" width={500} height={500} />
          </div>
          <div className="break-inside-avoid">
            <Image src="/16.jpg" width={500} height={500} />
          </div>
          <div className="break-inside-avoid">
            <Image src="/17.jpg" width={500} height={500} />
          </div>
          <div className="break-inside-avoid">
            <Image src="/18.jpg" width={500} height={500} />
          </div>
          <div className="break-inside-avoid">
            <Image src="/19.jpg" width={500} height={500} />
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
