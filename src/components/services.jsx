import React from "react";
import ServicesList from "../Helper/services";
import Skills from "../Helper/skills.jsx";

const services = () => {
  return (
    <section className="services px-[20px] w-full" id="services">
      <div className="min-h-[100vh]">
        <div className="mb-10">
          <h1 className="text-[14vw] lg:text-[90px] font-bold">
            I can help you with ...
          </h1>
        </div>
        <div className="grid md:grid-cols-3">
          {ServicesList.map((service) => {
            return (
              <div
                className="w-full border-l-2 border-black pl-10 mb-5"
                key={service.id}
              >
                <h3 className="text-[10vw] md:text-[60px] text-gray-500">
                  0{service.id}
                </h3>
                <h2 className="md:text-3xl mb-5">{service.title}</h2>
                <p>{service.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="min-h-[100vh]">
        <div className="mb-10">
          <h1 className="text-[14vw] lg:text-[90px] font-bold break-normal">
            Technologies <span className="block text-gray-500">& Tools</span>
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="grid w-5/6 grid-cols-3 md:grid-cols-6 lg:grid-cols-12">
            {Skills.map((skill) => {
              return (
                <div
                  className="w-full flex justify-center text-[50px] p-3"
                  key={skill.name}
                >
                  {skill.icon}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default services;
