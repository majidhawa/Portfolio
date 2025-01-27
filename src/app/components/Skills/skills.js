"use client";
import React from "react";
import Image from "next/image";

const SkillIcon = ({ name, icon }) => {
  return (
    <div className="group relative transform hover:scale-110 transition-all duration-300 p-0">
      <div
        className="w-20 h-20 bg-gray-900 rounded-lg overflow-visible border-2 border-gray-700 
                    shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center"
      >
        <div className="w-16 h-16 flex items-center justify-center">
          <div className="w-12 h-12 relative">
            <Image
              src={`/icons/${icon}`}
              alt={name}
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <p
        className="text-center mt-3 text-gray-300 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 absolute -bottom-6 left-1/2 
                    transform -translate-x-1/2 whitespace-nowrap"
      >
        {name}
      </p>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { name: "Python", icon: "python.svg" },
    { name: "Next.js", icon: "nextjs.svg" },
    { name: "Kotlin", icon: "kotlin.svg" },
    { name: "JavaScript", icon: "javascript.svg" },
    { name: "HTML", icon: "html.svg" },
    { name: "TypeScript", icon: "typescript.svg" },
    { name: "Django", icon: "django.svg" },
    { name: "React", icon: "react.svg" },
    { name: "Node.js", icon: "nodejs.svg" },
    { name: "Tailwind CSS", icon: "tailwind.svg" },
    { name: "PostgreSQL", icon: "postgresql.svg" },
    { name: "Tableau", icon: "tableau.svg" },
    { name: "Docker", icon: "docker.svg" },
    { name: "GitHub", icon: "github.svg" },
    { name: "Adobe", icon: "adobe.svg" },
    { name: "Figma", icon: "figma.svg" },
    { name: "Jira", icon: "jira.svg" },
    { name: "Coda", icon: "coda.svg" },
  ];

  const repeatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="pt-10 mb-20 bg-gray-800 overflow-hidden">
      <style jsx global>{`
        @keyframes flow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-flow {
          display: flex;
          animation: flow 15s linear infinite;
          width: max-content;
        }
      `}</style>

      <div className="container mx-auto px-4">
    

        <div className="flex overflow-hidden">
          <div className="animate-flow">
            {repeatedSkills.map((skill, index) => (
              <div key={index} className="mx-4">
                <SkillIcon {...skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
