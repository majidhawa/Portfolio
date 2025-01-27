"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-800 text-white"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-y-8 md:gap-y-16 md:gap-x-8 lg:gap-x-24">
        
        <div className="relative w-full md:w-[40%] h-[380px] sm:h-[430px] lg:h-[480px] rounded-2xl overflow-hidden">
          <Image
            src="/image/hawamajid.jpg"
            alt="Hawa Majid"
            layout="fill"
            objectFit="cover"
            objectPosition="top" // Keeps head visible, crops bottom
            className="rounded-2xl"
          />
        </div>

        {/* About Text */}
        <div className="w-full md:w-[50%] px-4 sm:px-6 md:px-8 text-center sm:text-left">
          {/* New About Me Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4">
            About Me
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-loose text-justify font-['Roboto']">
            I am Hawa Majid, a dedicated and driven software engineer who thrives 
            on tackling challenges and delivering impactful solutions. I am passionate 
            about continuous growth and embrace every opportunity to learn and expand 
            my expertise. My curiosity fuels my ability to think creatively and approach 
            problems with fresh perspectives. Hardworking and detail-oriented, I take 
            pride in collaborating with others to achieve shared goals and make meaningful 
            contributions. Beyond work, I enjoy exploring the intersection of technology 
            and everyday life, while finding inspiration in novels and lifelong learning.
          </p>

          {/* Social Links */}
          <div className="flex justify-start items-center gap-6 mt-6">
            <a
              href="https://github.com/majidhawa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 cursor-pointer"
            >
              <FaGithub className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/hawa-majid-7974452b3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 cursor-pointer"
            >
              <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
