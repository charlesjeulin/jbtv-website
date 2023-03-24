import React, { useState } from "react";
import Image from "next/image";
import { TbCopyright, TbSquareChevronRight } from "react-icons/tb";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div id="Footer">
      <div className="grid  place-items-start md:place-items-start bg-gray-900 text-white text-sm grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 pl-16 pr-16 lg:pl-24 xl:pl-64 lg:pr-24 p-10 pt-20 pb-10">
        <div>
          <Image src="/filigrane.png" alt="logo" width={100} height={62} />
          <p className="pt-5">
            La JBTV est l'association audiovisuelle de l'ECE.
          </p>
          <p>
            Elle couvre les évènements de l'école en photos et en vidéos, et te
            propose tous ces souvenirs sur son site.
          </p>
          <p>Vous voulez apprendre et vous amuser ? Rejoignez nous !</p>
        </div>
        <div className="xl:pl-12">
          <h1 className="font-bold text-2xl pb-5">Liens</h1>
          <ul className="text-gray-300">
            <li className="pb-4 flex justify-left items-center">
              <TbSquareChevronRight className="mr-2" />
              <div className="hover:ml-2 hover:font-bold">
                <a href="/#Events">Evenements</a>
              </div>
            </li>
            <li className="pb-4 flex justify-left items-center">
              <TbSquareChevronRight className="mr-2" />
              <div className="hover:ml-2 hover:font-bold">
                <a href="/#Gallery">Galerie</a>
              </div>
            </li>
            <li className="pb-4 flex justify-left items-center">
              <TbSquareChevronRight className="mr-2" />
              <div className="hover:ml-2 hover:font-bold">
                <a href="/#Jbtv">Rejoins-Nous</a>
              </div>
            </li>
            <li className="pb-4 flex justify-left items-center">
              <TbSquareChevronRight className="mr-2" />
              <div className="hover:ml-2 hover:font-bold">
                <a href="/#Bureau">Bureau</a>
              </div>
            </li>
            <li className="pb-4 flex justify-left items-center">
              <TbSquareChevronRight className="mr-2" />
              <div className="hover:ml-2 hover:font-bold">
                <a href="/#Histoire">Histoire</a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-2xl pb-4">Contactez-nous</h1>
          <ul className="text-gray-300">
            <li className="pb-4 flex justify-left items-center">
              <TbSquareChevronRight className="mr-2" />
              <div className="hover:ml-2 hover:font-bold">
                +33 7 69 42 55 78
              </div>
            </li>
            <li className="pb-4 flex justify-left items-center">
              <TbSquareChevronRight className="mr-2" />
              <div className="hover:ml-2 hover:font-bold">
                <a href="mailto: bureau.jbtv@gmail.com">
                  bureau.jbtv@gmail.com
                </a>
              </div>
            </li>
            <li className="pb-4 flex justify-left items-center">
              <TbSquareChevronRight className="mr-2" />
              <div className="hover:ml-2 hover:font-bold">
                10 Rue Sextius Michel, 75015 Paris
              </div>
            </li>
            <li className="pb-4 flex justify-left items-center">
              <TbSquareChevronRight className="mr-2" />
              <div className="hover:ml-2 hover:font-bold">
                Local JBTV-BDA, E1 SC005
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-2xl pb-5">Nous suivre</h1>
          <ul>
            <li className="flex justify-left items-center">
              <a
                href="https://www.facebook.com/jbtvece"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook
                  className="mr-2 hover:animate-spin hover:text-[#3b5998]"
                  size={30}
                />
              </a>
              <a
                href="https://www.instagram.com/jbtv.ece/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram
                  className="mr-2 hover:animate-spin hover:text-[#8a3ab9]"
                  size={30}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/jbtv/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin
                  className="hover:animate-spin hover:text-[#0077b5]"
                  size={30}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-black text-white text-xs flex justify-center items-center p-2">
        <TbCopyright />
        Designed and Developped by Charles JEULIN
      </div>
    </div>
  );
};

export default Footer;
