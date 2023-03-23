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
      <div className="grid  place-items-start md:place-items-start lg:place-items-center bg-gray-900 text-white text-sm grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 pl-16 pr-16 lg:pl-52 lg:pr-52 p-10 pt-20 pb-10">
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
        <div>
          <h1 className="font-bold text-2xl pb-5">Liens</h1>
          <ul className="text-gray-300">
            <li className="pb-4 flex justify-left items-center">
              <TbSquareChevronRight className="mr-2" />
              Evenements
            </li>
            <li className="pb-4 flex justify-left items-center">
              <TbSquareChevronRight className="mr-2" />
              Galerie
            </li>
            <li className="pb-4 flex justify-left items-center">
              <TbSquareChevronRight className="mr-2" />
              Rejoins-Nous
            </li>
            <li className="pb-4 flex justify-left items-center">
              <TbSquareChevronRight className="mr-2" />
              Bureau
            </li>
            <li className="pb-4 flex justify-left items-center">
              <TbSquareChevronRight className="mr-2" />
              Histoire
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-2xl pb-4">Contactez-nous</h1>
          <ul className="text-gray-300">
            <li className="pb-4 flex justify-left items-center">
              <TbSquareChevronRight className="mr-2" />
              +33 7 69 42 55 78
            </li>
            <li className="pb-4 flex justify-left items-center">
              <TbSquareChevronRight className="mr-2" />
              <a href="mailto: bureau.jbtv@gmail.com">bureau.jbtv@gmail.com</a>
            </li>
            <li className="pb-4 flex justify-left items-center">
              <TbSquareChevronRight className="mr-2" />
              10 Rue Sextius Michel, 75015 Paris
            </li>
            <li className="pb-4 flex justify-left items-center">
              <TbSquareChevronRight className="mr-2" />
              Association JBTV, E1 SC005
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-2xl pb-5">Nous suivre</h1>
          <ul>
            <li className="flex justify-left items-center">
              <AiFillFacebook className="mr-2" size={30} />
              <AiFillInstagram className="mr-2" size={30} />
              <AiFillLinkedin size={30} />
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
