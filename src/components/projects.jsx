import React, { useEffect } from "react";
import ProjectLists from "../Helper/projects.jsx";
import RotatingComponent from "./Motion/RotatingComponent.jsx";

const projectsPreview = () => {
  useEffect(() => {
    document.title = "Projects | John Lloyd Butay";
  }, []);

  return (
    <section className="dark:bg-black" id="work">
      <div className="w-full">
        {ProjectLists.map((project, index) => (
          <div
            key={index}
            className="w-full h-screen lg:rounded-[50px] overflow-hidden lg:p-[24px]"
          >
            <div
              className={`flex flex-col h-full p-[24px] pt-[96px] lg:px-[88px] lg:pt-[136px] lg:rounded-[60px] xl:px-[136px] xl:pt-[24px] ${
                index % 2 === 0 ? "bg-[#FF3C00]" : "bg-black"
              }`}
            >
              <div className="flex flex-col xl:gap-[64px] xl:flex-row h-full justify-between xl:items-center">
                <div className="flex flex-col gap-[24px] lg:justify-end items-start xl:w-2/3 xl:items-start">
                  <div className="text-white text-[16px] w-full text-start lg:text-center xl:text-start uppercase">
                    (work)
                  </div>
                  <div className="w-full">
                    <h1 className="text-white lg:text-center xl:text-start text-[36px] lg:text-[60px] font-bold leading-[1em]">
                      {project.title}
                    </h1>
                  </div>
                  <div className="xl:pl-[136px] w-full flex flex-col justify-between gap-[24px]">
                    <div className="flex w-full lg:px-[96px] xl:px-0 justify-between lg:justify-around xl:justify-between xl:order-2">
                      <p className="text-white text-[16px]">Category:</p>
                      <p className="text-white text-[16px]">{project.text}</p>
                    </div>
                    <div className="hidden xl:flex w-full lg:px-[96px] xl:px-0 justify-between lg:justify-around xl:justify-between xl:order-3">
                      <p className="text-white text-[16px]">Duration:</p>
                      <p className="text-white text-[16px]">
                        {project.duration}
                      </p>
                    </div>
                    <div className="hidden xl:flex w-full lg:px-[96px] xl:px-0 justify-between lg:justify-around xl:justify-between xl:order-4">
                      <p className="text-white text-[16px]">Date finished:</p>
                      <p className="text-white text-[16px]">{project.date}</p>
                    </div>
                    <div className="flex lg:justify-center xl:justify-between xl:order-1 xl:mb-10">
                      <a
                        href={project.link}
                        className="text-white text-[16px] xl:order-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                      <RotatingComponent className="hidden xl:block inset-0 lg:size-6 bg-white xl:order-1" />
                    </div>
                  </div>
                </div>
                <div className="flex items-end justify-center xl:w-2/3">
                  <img
                    src={project.sampleImage}
                    alt=""
                    className="lg:w-[600px] xl:w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default projectsPreview;
