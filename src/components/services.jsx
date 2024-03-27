import React from "react";
import ServicesList from "../Helper/services.jsx";
import Skills from "../Helper/skills.jsx";

const services = () => {
  return (
    <section className="services w-full" id="services">
      <div className="lg:min-h-[100vh] px-[20px] py-20">
        <div className="mb-10">
          <h2 className="text-[12vw] lg:text-[90px] font-normal">
            I can help you with ...
          </h2>
        </div>
        <div className="grid md:grid-cols-3">
          {ServicesList.map((service) => {
            return (
              <div
                className="w-full border-b-2 md:border-l-2 md:border-b-0 border-gray-200 md:pl-10 mb-5 py-5"
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
      <div className="lg:min-h-[100vh] bg-gray-100 px-[20px] py-20">
        <div className="mb-10">
          <h1 className="text-[14vw] lg:text-[90px] font-bold break-normal">
            Technologies <span className="block text-gray-500">& Tools</span>
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="grid w-5/6 grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-5">
            {Skills.map((skill) => {
              return (
                <div
                  className="w-full flex justify-center text-[50px]"
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
