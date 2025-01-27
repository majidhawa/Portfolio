"use client";
import { useState, useEffect } from "react";

const Logo = () => {
  const titles = [
    "Software Developer",
    "Product Manager",
    "Data Analyst",
    "UI/UX Designer",
    "UX Researcher",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
    id="logo"
    className="px-4 sm:px-6 lg:px-8 pt-6 sm:py-8 lg:py-6 text-center bg-gray-800 mx-auto items-center font-['Roboto'] relative mb-10"
  >
  
      <div className="leading-normal relative z-10">
        <h5 className="text-white text-3xl sm:text-4xl lg:text-5xl w-full">
          Hello, I am{" "}
          <span className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
            Hawa Majid
          </span>
        </h5>
        <div className="overflow-hidden whitespace-nowrap w-full mt-2">
          <h5 className="text-yellow-300 text-2xl sm:text-3xl lg:text-4xl inline-block">
            {titles[currentIndex]}
          </h5>
        </div>

        <div className="mt-6">
          <a
            href="/image/Hawa Majid CV.pdf"
            download="Hawa Majid CV.pdf"
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg shadow-md 
                       hover:bg-yellow-500 transition-all duration-300 inline-block"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Logo;
