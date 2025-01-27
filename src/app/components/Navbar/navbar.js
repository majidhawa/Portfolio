"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <>
      <nav className="relative bg-gray-800 text-white z-50 w-full">
        <div className="flex justify-between items-center py-4 sm:py-6 px-4 sm:px-8 lg:px-12">
          <div className="text-2xl font-bold hover:text-yellow-300 active:text-yellow-300">
            <Link href="#logo">
              <Image
                className="w-16 h-10 sm:w-20 sm:h-20 lg:w-[100px] lg:h-[80px]"
                src="/image/logo.png"
                alt="logo"
                width={100}
                height={100}
              />
            </Link>
          </div>

          <button
            className="lg:hidden p-2 hover:text-yellow-300 z-50"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          <ul className="hidden lg:flex justify-between space-x-24 text-lg xl:text-s font-['Roboto'] pr-4 xl:pr-20">
  <li className="hover:text-yellow-300 active:text-yellow-300">
    <Link href="#logo">Home</Link>
  </li>
  <li className="hover:text-yellow-300 active:text-yellow-300">
    <Link href="#about">About Me</Link>
  </li>
  <li className="hover:text-yellow-300 active:text-yellow-300">
    <Link href="#projects">Projects</Link>
  </li>
  <li className="hover:text-yellow-300 active:text-yellow-300">
    <Link href="#contact">Contact</Link>
  </li>
</ul>

        </div>

        <div
          className={`lg:hidden fixed inset-0 bg-blue-900 bg-opacity-95 z-40 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <div className="flex items-center justify-center h-full">
            <ul className="flex flex-col items-center space-y-8 text-2xl font-['Roboto']">
              <li className="transform hover:scale-110 transition-transform hover:text-yellow-300 active:text-yellow-300">
                <Link href="#logo" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li className="transform hover:scale-110 transition-transform hover:text-yellow-300 active:text-yellow-300">
                <Link href="#about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li className="transform hover:scale-110 transition-transform hover:text-yellow-300 active:text-yellow-300">
                <Link href="#projects" onClick={toggleMenu}>
                  Projects
                </Link>
              </li>
              <li className="transform hover:scale-110 transition-transform hover:text-yellow-300 active:text-yellow-300">
                <Link href="#contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
