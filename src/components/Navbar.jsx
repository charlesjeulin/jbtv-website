import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("text-white");
  const [logo, setLogo] = useState(false);
  const [itemSelected, setItemSelected] = useState("accueil");

  const handleNav = () => {
    setNav(!nav);
  };

  const handleItemSelected = (item) => {
    setItemSelected(item);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 70) {
        setLogo(true);
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setLogo(false);
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex items-center justify-between p-4 text-white">
        {logo ? (
          <Link href="/">
            <Image src="/filigrane.png" alt="logo" width={100} height={62} />
          </Link>
        ) : (
          <h1
            style={{ color: `${textColor}` }}
            className="font-bold text-5xl m-[7px]"
          >
            JBTV - ECE
          </h1>
        )}

        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 group">
            <Link href="/" onClick={() => handleItemSelected("accueil")}>
              Accueil
              {logo ? (
                <div className="w-full h-0.5 rounded-2xl bg-black scale-x-0 z-40 group-hover:scale-x-100 transition-transform" />
              ) : (
                <div className="w-full h-0.5 rounded-2xl bg-white scale-x-0 z-40 group-hover:scale-x-100 transition-transform" />
              )}
              {/* itemSelected === "accueil" ? (
                <div className="w-full h-0.5 rounded-2xl bg-black scale-x-100 z-40 group-hover:scale-x-100 transition-transform" />
              ) : (
                <div className="w-full h-0.5 rounded-2xl bg-black scale-x-0 z-40 group-hover:scale-x-100 transition-transform" />
              )*/}
            </Link>
          </li>
          <li className="p-4 group">
            <Link
              href="/#Events"
              scroll={false}
              onClick={() => handleItemSelected("events")}
            >
              Evenements
              {logo ? (
                <div className="w-full h-0.5 rounded-2xl bg-black scale-x-0 z-40 group-hover:scale-x-100 transition-transform" />
              ) : (
                <div className="w-full h-0.5 rounded-2xl bg-white scale-x-0 z-40 group-hover:scale-x-100 transition-transform" />
              )}
              {/* itemSelected === "events" ? (
                <div className="w-full pt-10 h-0.5 rounded-2xl bg-black scale-x-100 z-40 group-hover:scale-x-100 transition-transform" />
              ) : (
                <div className="w-full h-0.5 rounded-2xl bg-black scale-x-0 z-40 group-hover:scale-x-100 transition-transform" />
              )*/}
            </Link>
          </li>
          <li className="p-4 group">
            <Link href="/#Gallery" scroll={false}>
              Galerie
              {logo ? (
                <div className="w-full h-0.5 rounded-2xl bg-black scale-x-0 z-40 group-hover:scale-x-100 transition-transform" />
              ) : (
                <div className="w-full h-0.5 rounded-2xl bg-white scale-x-0 z-40 group-hover:scale-x-100 transition-transform" />
              )}{" "}
            </Link>
          </li>
          <li className="p-4 group">
            <Link href="/#Jbtv" scroll={false}>
              Rejoins-Nous
              {logo ? (
                <div className="w-full h-0.5 rounded-2xl bg-black scale-x-0 z-40 group-hover:scale-x-100 transition-transform" />
              ) : (
                <div className="w-full h-0.5 rounded-2xl bg-white scale-x-0 z-40 group-hover:scale-x-100 transition-transform" />
              )}{" "}
            </Link>
          </li>
          <li className="p-4 group">
            <Link href="/#Bureau" scroll={false}>
              Bureau
              {logo ? (
                <div className="w-full h-0.5 rounded-2xl bg-black scale-x-0 z-40 group-hover:scale-x-100 transition-transform" />
              ) : (
                <div className="w-full h-0.5 rounded-2xl bg-white scale-x-0 z-40 group-hover:scale-x-100 transition-transform" />
              )}{" "}
            </Link>
          </li>
          <li className="p-4 group">
            <Link href="/#Histoire" scroll={false}>
              Histoire
              {logo ? (
                <div className="w-full h-0.5 rounded-2xl bg-black scale-x-0 z-40 group-hover:scale-x-100 transition-transform" />
              ) : (
                <div className="w-full h-0.5 rounded-2xl bg-white scale-x-0 z-40 group-hover:scale-x-100 transition-transform" />
              )}
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} className="text-white" />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex items-center justify-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Accueil</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#Events" scroll={false}>
                Evenements
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#Gallery" scroll={false}>
                Galerie
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#Jbtv" scroll={false}>
                Rejoins-Nous
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#Bureau" scroll={false}>
                Bureau
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#Histoire" scroll={false}>
                Histoire
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
