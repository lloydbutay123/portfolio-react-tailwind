import React, { useEffect } from "react";
import ProjectLists from "../Helper/projects.jsx";
import { FaArrowRightLong } from "react-icons/fa6";
import AnimatedComponent from "./Motion/AnimatedComponent";

const projectsPreview = () => {

  useEffect(() => {
    document.title = "Projects | John Lloyd Butay";
  });

  return (
    <section
      className="dark:bg-black projectsPreview w-full flex flex-col overflow-x-hidden items-center p-[24px]"
      id="projects"
    >
      <div className="w-full lg:px-[96px] xl:px-[136px]">
        <AnimatedComponent
          className="mb-10"
          animationType="slideLeft"
        >
          <h1 className="dark:text-white text-5xl md:text-8xl leading-[1em] font-bold">
            Crafted with love.
          </h1>
          <p className="dark:text-white text-[16px] md:text-[20px]">
            These are selections of my recent works.
          </p>
        </AnimatedComponent>

        {ProjectLists.map((project, index) => {
          return (
            <AnimatedComponent
              className="cursor-pointer dark:bg-black w-full py-10 md:flex justify-between items-center md:mb-0 border-b-2 border-gray-500 break-words"
              key={`project-${project.id}`} // Unique key for the outer motion div
              animationType="slideLeft"
            >
              <div className="mb-10">
                <h1 className="dark:text-white text-4xl md:text-6xl font-medium">
                  <span className="mr-5 text-gray-500 text-sm">0{project.id}</span>
                  {project.title}
                </h1>
                <p className="dark:text-white text-[18px] leading-[1em] md:text-[20px] ml-16 md:ml-20">
                  {project.text}
                </p>
              </div>
              <AnimatedComponent
                className="pr-7 flex justify-end left-20"
                key={`link-${project.id}`} // Unique key for the inner motion div
                animationType="slideRight"
              >
                <a
                  href={project.link}
                  target="_blank"
                  className="dark:text-white text-[16px] md:text-[20px] z-50 relative inline-flex items-center font-bold uppercase"
                  aria-label="to project"
                >
                  View Project{" "}
                  <span className="ml-3">
                    <FaArrowRightLong />
                  </span>
                </a>
              </AnimatedComponent>
            </AnimatedComponent>
          );
        })}
      </div>
    </section>
  );
};

export default projectsPreview;
