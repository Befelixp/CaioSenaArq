"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{
        backgroundColor: `rgba(2, 6,23, 0.6)`,
        WebkitBackdropFilter:
          "blur(3px)" /* Para navegadores baseados em Webkit (como Chrome e Safari) */,
        backdropFilter:
          "blur(3px)" /* Padrão, suportado na maioria dos navegadores modernos */,
      }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1
            style={{
              color: `white`,
            }}
            className="font-bold text-4xl"
          >
            Caio Passos
          </h1>
        </Link>
        <ul style={{ color: `white` }} className="hidden sm:flex">
          <li className="p-4 hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 hover:underline">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4 hover:underline">
            <Link href="/work">Work</Link>
          </li>
          <li className="p-4 hover:underline">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose
              size={20}
              style={{ color: `white`, cursor: "pointer" }}
            />
          ) : (
            <AiOutlineMenu
              size={20}
              style={{ color: `white`, cursor: "pointer" }}
            />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          style={{
            backgroundColor: `rgba(2, 6,23, 0.7)`,
            WebkitBackdropFilter:
              "blur(8px)" /* Para navegadores baseados em Webkit (como Chrome e Safari) */,
            backdropFilter:
              "blur(8px)" /* Padrão, suportado na maioria dos navegadores modernos */,
          }}
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:underline hover:cursor-pointer"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:underline hover:cursor-pointer"
            >
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:underline hover:cursor-pointer"
            >
              <Link href="/work">Work</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:underline hover:cursor-pointer"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
