import React, { useState } from "react";
import { HiOutlineTrophy } from "react-icons/hi2";
import { FaCameraRetro } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { GiFilmProjector } from "react-icons/gi";
import { CgCommunity } from "react-icons/cg";
import { SiSlideshare } from "react-icons/si";

const Jbtv = () => {
  return (
    <div
      id="Jbtv"
      className="flex flex-col items-center justify-center h-full pt-28 pb-12"
    >
      <h1 className="font-bold text-4xl text-center pb-28 pt-5">
        La JBTV, c&apos;est quoi ?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 pb-20">
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer [perspective-1000px]">
          <div className="h-64 w-80 bg-white flex flex-col items-center justify-center text-center group-hover:bg-gray-100 rounded-2xl">
            <button className="[transform-style:preserve-3d] focus:[transform:rotateY(180deg)] focus:[backface-visibility:hidden] group-hover:[backface-visibility:hidden] transition-all duration-300">
              <div>
                <ul className="text-lg italic text-black group-hover:translate-y-[-1rem] group-hover:scale-110 transition-transform duration-300">
                  <li className="mt-[-1rem] mb-[10%] ml-[8.5rem]">
                    <FaCameraRetro
                      size={50}
                      className="group-hover:text-[#228B22] group-hover:translate-y-[5rem] transition-transform duration-300"
                    />
                  </li>
                  <li className="group-hover:translate-y-[-5rem] transition-transform duration-300 pl-8 pr-8">
                    La possibilité de développer des compétences
                  </li>
                </ul>
              </div>
              <div className="mt-[-9rem] [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <ul className=" pl-8 pr-8">
                  <li>
                    Améliorer ses compétences en photographie et en
                    vidéographie.
                  </li>
                  <li>Ateliers de formation, soutiens et divers événements.</li>
                </ul>
              </div>
            </button>
          </div>
        </div>
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer [perspective-1000px]">
          <div className="h-64 w-80 bg-white flex flex-col items-center justify-center text-center group-hover:bg-gray-100 rounded-2xl">
            <button className="[transform-style:preserve-3d] focus:[transform:rotateY(180deg)] focus:[backface-visibility:hidden] group-hover:[backface-visibility:hidden] transition-all duration-300">
              <div>
                <ul className="text-lg italic text-black group-hover:translate-y-[-1rem] group-hover:scale-110 transition-transform duration-300">
                  <li className="mt-[1rem] mb-[10%] ml-[8.5rem]">
                    <BsPeople
                      size={50}
                      className="group-hover:text-[#228B22] group-hover:translate-y-[5rem] transition-transform duration-300"
                    />
                  </li>
                  <li className="group-hover:translate-y-[-5rem] transition-transform duration-300 pl-8 pr-8">
                    La chance de rencontrer d&apos;autres étudiants passionnés
                  </li>
                </ul>
              </div>
              <div className="mt-[-10rem] [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <ul className=" pl-8 pr-8">
                  <li>
                    Un espace pour rencontrer d&apos;autres étudiants qui
                    partagent leur passion pour la photo et la vidéo.
                  </li>
                  <li>Echanger des idées et collaborer sur des projets.</li>
                </ul>
              </div>
            </button>
          </div>
        </div>
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer [perspective-1000px]">
          <div className="h-64 w-80 bg-white flex flex-col items-center justify-center text-center group-hover:bg-gray-100 rounded-2xl">
            <button className="[transform-style:preserve-3d] focus:[transform:rotateY(180deg)] focus:[backface-visibility:hidden] group-hover:[backface-visibility:hidden] transition-all duration-300">
              <div>
                <ul className="text-lg italic text-black group-hover:translate-y-[-1rem] group-hover:scale-110 transition-transform duration-300">
                  <li className="mt-[0.3rem] mb-[10%] ml-[8.5rem]">
                    <SiSlideshare
                      size={50}
                      className="group-hover:text-[#228B22] group-hover:translate-y-[5rem] transition-transform duration-300"
                    />
                  </li>
                  <li className="group-hover:translate-y-[-5rem] transition-transform duration-300 pl-8 pr-8">
                    Partager ses connaissances et son savoir-faire
                  </li>
                </ul>
              </div>
              <div className="mt-[-9rem] [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <ul className=" pl-8 pr-8">
                  <li>
                    Les membres de la JBTV peuvent partager aux autres leurs
                    techniques et évoluer ensemble.
                  </li>
                  <li>C&apos;est un espace d&apos;entraide et de partage.</li>
                </ul>
              </div>
            </button>
          </div>
        </div>
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer [perspective-1000px]">
          <div className="h-64 w-80 bg-white flex flex-col items-center justify-center text-center group-hover:bg-gray-100 rounded-2xl">
            <button className="[transform-style:preserve-3d] focus:[transform:rotateY(180deg)] focus:[backface-visibility:hidden] group-hover:[backface-visibility:hidden] transition-all duration-300">
              <div>
                <ul className="text-lg italic text-black group-hover:translate-y-[-1rem] group-hover:scale-110 transition-transform duration-300">
                  <li className="mt-[0rem] mb-[10%] ml-[8.5rem]">
                    <HiOutlineTrophy
                      size={50}
                      className="group-hover:text-[#228B22] group-hover:translate-y-[5rem] transition-transform duration-300"
                    />
                  </li>
                  <li className="group-hover:translate-y-[-5rem] transition-transform duration-300 pl-8 pr-8">
                    Participation à des événements et des concours
                  </li>
                </ul>
              </div>
              <div className="mt-[-9rem] [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <ul className=" pl-8 pr-8">
                  <li>
                    Evemenemts tels que des expositions, des sorties dans Paris
                    et des concours.
                  </li>
                  <li>Montrer son travail et ses résultats au public</li>
                </ul>
              </div>
            </button>
          </div>
        </div>
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer [perspective-1000px]">
          <div className="h-64 w-80 bg-white flex flex-col items-center justify-center text-center group-hover:bg-gray-100 rounded-2xl">
            <button className="[transform-style:preserve-3d] focus:[transform:rotateY(180deg)] focus:[backface-visibility:hidden] group-hover:[backface-visibility:hidden] transition-all duration-300">
              <div>
                <ul className="text-lg italic text-black group-hover:translate-y-[-1rem] group-hover:scale-110 transition-transform duration-300">
                  <li className="mt-[0rem] mb-[10%] ml-[8.5rem]">
                    <GiFilmProjector
                      size={50}
                      className="group-hover:text-[#228B22] group-hover:translate-y-[5rem] transition-transform duration-300"
                    />
                  </li>
                  <li className="group-hover:translate-y-[-5rem] transition-transform duration-300 pl-8 pr-8">
                    L&apos;opportunité de travailler sur des projets créatifs
                  </li>
                </ul>
              </div>
              <div className="mt-[-9rem] [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <ul className=" pl-8 pr-8">
                  <li>
                    Des projets créatifs, tels que la réalisation de courts
                    métrages ou d&apos;interviews.
                  </li>
                  <li>Collaboration à plusieurs pour un résultat unique</li>
                </ul>
              </div>
            </button>
          </div>
        </div>
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer [perspective-1000px]">
          <div className="h-64 w-80 bg-white flex flex-col items-center justify-center text-center group-hover:bg-gray-100 rounded-2xl">
            <button className="[transform-style:preserve-3d] focus:[transform:rotateY(180deg)] focus:[backface-visibility:hidden] group-hover:[backface-visibility:hidden] transition-all duration-300">
              <div>
                <ul className="text-lg italic text-black group-hover:translate-y-[-1rem] group-hover:scale-110 transition-transform duration-300">
                  <li className="mt-[0] mb-[10%] ml-[8.5rem]">
                    <CgCommunity
                      size={50}
                      className="group-hover:text-[#228B22] group-hover:translate-y-[5rem] transition-transform duration-300"
                    />
                  </li>
                  <li className="group-hover:translate-y-[-5rem] transition-transform duration-300 pl-8 pr-8">
                    La possibilité de contribuer à la communauté
                  </li>
                </ul>
              </div>
              <div className="mt-[-9rem] [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <ul className=" pl-8 pr-8">
                  <li>
                    Collaboration avec d&apos;autres associations et à des
                    événements communautaires.
                  </li>
                  <li>
                    Donner de son temps et de son talent au service des autres.
                  </li>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="pt-10 pb-28">
        <a className="relative px-5 py-3 overflow-hidden font-medium text-gray-900 bg-white border border-white rounded-lg text-3xl group">
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-900 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-900 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-900 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-900 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-500"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            Rejoins-Nous
          </span>
        </a>
      </div>
    </div>
  );
};

export default Jbtv;
