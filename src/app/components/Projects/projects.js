"use client";
import { useState } from "react";
import Image from "next/image";

const Projects = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="projects" className="py-20 bg-gray-800 font-['Roboto']">
      <h2 className="py-4 text-4xl text-white font-bold text-center typewriter">
        Projects
      </h2>

      <div className="py-8">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
          <div className="p-4 border-yellow-600 rounded-lg shadow-[0_0_10px_rgba(255,215,0,0.6)] cursor-pointer transition-transform transform hover:scale-95 hover:bg-blue-900 duration-300">
            <div className="mx-auto flex justify-center p-4">
              <Image
                src="/image/investika.png"
                width={200}
                height={200}
                alt="Investika"
              />
            </div>
            <h3 className="text-2xl text-center text-yellow-500 font-bold p-4">
              Investika
            </h3>
            <p className="text-left text-l text-white">
            A gamified mobile platform designed to introduce youth to 
            the world of investment. The app simplifies complex financial concepts, 
            making them accessible and engaging through interactive challenges and simulations.
            By empowering young people with the knowledge and confidence to explore investment 
             opportunities, Investika fosters financial literacy and promotes smarter decision-making 
             for future wealth creation.
            </p>

            <div className="flex justify-center pt-4 space-x-4">
              <a
                href="https://github.com/majidhawa/Investika-Backend.git"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition transform"
              >
                <Image
                  src="/icons/github.svg"
                  width={25}
                  height={25}
                  alt="GitHub"
                  className="hover:bg-yellow-600 transition-colors rounded-full"
                />
              </a>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="hover:scale-110 transition transform"
              >
                <Image
                  src="/icons/android.svg"
                  width={25}
                  height={25}
                  alt="Play Demo"
                  className="hover:bg-yellow-600 transition-colors rounded-full"
                />
              </button>
            </div>
          </div>

          <div className="p-4 border-yellow-600 rounded-lg shadow-[0_0_10px_rgba(255,215,0,0.6)] cursor-pointer transition-transform transform hover:scale-95 hover:bg-blue-900 duration-300">
            <div className="mx-auto flex justify-center  p-4">
              <Image
                src="/image/Trivia.png"
                width={300}
                height={200}
                alt="Apex"
              />
            </div>
            <h3 className="p-4 text-2xl text-center text-yellow-500 font-bold">
              Fun Trivia
            </h3>
            <p className="text-left text-white text-l">
            The JavaScript Quiz Game is an interactive web-based application designed to test users' 
            knowledge through a series of dynamically managed multiple-choice questions. This project 
            demonstrates key JavaScript concepts, such as real-time DOM manipulation, event handling, 
            and data management, making it an excellent way to enhance web development skills. The quiz 
            game dynamically presents questions to users, allowing them to select answers while keeping 
            track of their progress and score.
            </p>
            <div className="flex justify-center pt-4 space-x-4">
              <a
                href="https://github.com/majidhawa/fun_trivia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition transform"
              >
                <Image
                  src="/icons/github.svg"
                  width={25}
                  height={25}
                  alt="GitHub"
                  className="hover:bg-yellow-600 transition-colors rounded-full"
                />
              </a>
              <a
                href="https://fun-trivia-2p6vd3l2s-hawa-majids-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition transform"
              >
                <Image
                  src="/icons/vercel.svg"
                  width={25}
                  height={25}
                  alt="Vercel"
                  className="hover:bg-yellow-600 transition-colors rounded-full"
                />
              </a>
            </div>
          </div>

          <div className="p-4 border-yellow-600 rounded-lg shadow-[0_0_10px_rgba(255,215,0,0.6)] cursor-pointer transition-transform transform hover:scale-95 hover:bg-blue-900 duration-300">
            <div className="mx-auto flex justify-center p-4">
              <Image
                src="/image/students.png"
                width={200}
                height={200}
                alt="Books"
              />
            </div>
            <h3 className="p-4 text-3xl text-center text-yellow-500 font-bold">
              School Project
            </h3>
            <p className="text-xl text-white text-left">
              A Django backend web application school project that allows
              students to register, and view courses using the generated timetable
              and know the course instructor. It also has a database
              configuration for storing student, teacher, and course data.
            </p>
            <div className="flex justify-center pt-4 space-x-4">
              <a
                href="https://github.com/majidhawa/python-django-apis.git"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition transform"
              >
                <Image
                  src="/icons/github.svg"
                  width={25}
                  height={25}
                  alt="GitHub"
                  className="hover:bg-yellow-600 transition-colors rounded-full"
                />
              </a>
              {/* <a
                href=" "
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition transform"
              >
                <Image
                  src="/icons/vercel.svg"
                  width={25}
                  height={25}
                  alt="Vercel"
                  className="hover:bg-yellow-600 transition-colors rounded-full"
                />
              </a> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;