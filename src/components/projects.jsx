import React from "react";
import ProjectLists from "../Helper/projects.jsx";
import { FaArrowRightLong } from "react-icons/fa6";
import ContactPreview from "./contactPreview";

const projects = () => {
  document.title = "Projects | John Lloyd Butay";
  return (
    <section className="dark:bg-black">
      <div className="px-[40px]">
        <div className="py-40 flex items-center d font-bold">
          <h1 className="dark:text-white text-6xl md:text-[100px] uppercase">My Works</h1>
        </div>
      </div>
      {ProjectLists.map((project) => {
        return (
          <div
            className="dark:bg-black grid px-[20px] py-10 md:grid-cols-2 md:mb-0 border-b-2 bg-gray-100 border-gray-500 break-words"
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
                className="relative dark:text-white flex z-50 font-bold items-center text-black uppercase"
              >
                View Project <FaArrowRightLong className="ml-2" />
              </a>
            </div>
          </div>
        );
      })}
      <ContactPreview />
    </section>
  );
};

export default projects;
