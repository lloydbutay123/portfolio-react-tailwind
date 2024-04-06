import React from "react";
import ProjectLists from "../Helper/projects.jsx";
import { FaArrowRightLong } from "react-icons/fa6";

const projectsPreview = () => {
  return (
    <section
      className="dark:bg-black projectsPreview w-fll min-h-[100vh] pt-20"
      id="projectsPreview"
    >
      <div>
        <div className="mb-10 px-[20px] min-h-[50vh]">
          <h1 className="dark:text-white text-[14vw] lg:text-[90px] font-bold">
            Crafted with love.
          </h1>
          <h2 className="dark:text-white text-[20px]">
            This are a selections of my recent works.
          </h2>
        </div>

        {ProjectLists.map((project) => {
          return (
            <div
              className="dark:bg-black grid px-[20px] py-10 md:grid-cols-2 md:mb-0 border-b-2 border-gray-500 break-words"
              key={project.id}
            >
              <div className="w-full mb-10">
                <h1 className="dark:text-white text-[10vw] md:text-[60px]">
                  <span className="mr-5 text-gray-500 text-3xl">
                    0{project.id}
                  </span>
                  {project.title}
                </h1>
                <p className="dark:text-white ml-16 md:ml-20">{project.text}</p>
              </div>
              <div className="w-full flex justify-end py-10 items-end">
                <a
                  href={project.link}
                  target="_blank"
                  className="dark:text-white relative flex z-50 font-bold items-center text-black uppercase"
                >
                  View Project <FaArrowRightLong className="ml-2" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default projectsPreview;
