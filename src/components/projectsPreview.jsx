import React from "react";
import ProjectLists from "../Helper/projects.jsx";
import { FaArrowRight } from "react-icons/fa";

const projectsPreview = () => {
  return (
    <section className="projectsPreview px-[20px] w-fll min-h-[100vh] mt-20" id="projectsPreview">
      <div>
        <div className="mb-10">
          <h1 className="text-[14vw] lg:text-[90px] font-bold mb-5">
            Crafted with love.
          </h1>
          <h2 className="text-[20px]">
            This are a selections of my recent works.
          </h2>
        </div>

        {ProjectLists.map((project) => {
          return (
            <div className="grid md:grid-cols-2 mb-20 md:mb-0 border-b-2 border-gray-200 break-words" key={project.id}>
              <div className="w-full mb-10">
                <h1 className="text-[10vw] md:text-[60px]"><span className="mr-5 text-gray-200 text-3xl">0{project.id}</span>{project.title}</h1>
                <p className="ml-16 md:ml-20">{project.text}</p>
              </div>
              <div className="w-full flex justify-end py-10">
                <a href={project.link} target="_blank" className="relative flex font-bold items-center text-black">View Project <FaArrowRight className="ml-2"/></a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default projectsPreview;
