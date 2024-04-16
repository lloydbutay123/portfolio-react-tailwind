import React from "react";
import ServicesList from "../Helper/services.jsx";
import Skills from "../Helper/skills.jsx";

const services = () => {
  return (
    <section className="services w-full" id="services">
      <div className="dark:bg-black lg:min-h-[100vh] px-[20px] py-20">
        <div className="mb-10">
          <h2 className="dark:text-white text-4xl lg:text-5xl font-medium">
            I can help you with ...
          </h2>
        </div>
        <div className="grid md:grid-cols-3">
          {ServicesList.map((service) => {
            return (
              <div className="w-full md:pr-10 mb-5" key={service.id}>
                <div className="border-b-2 border-gray-500 py-5">
                  <h3 className="text-5xl text-gray-500 font-medium">
                    0{service.id}
                  </h3>
                </div>
                <div className="py-5">
                  <h2 className="dark:text-white md:text-xl mb-5 font-medium">
                    {service.title}
                  </h2>
                  <p className="dark:text-white">{service.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:min-h-[100vh] px-[20px] py-20 dark:bg-black">
        <div className="mb-10">
          <h1 className="dark:text-white text-[14vw] lg:text-[90px] font-bold break-normal leading-none">
            Technologies <span className="block text-gray-500">& Tools</span>
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="grid w-5/6 grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-5">
            {Skills.map((item, index) => {
              return (
                <a
                  className="dark:text-white w-full flex justify-center text-5xl"
                  key={index}
                  href={item.link}
                  target="_blank"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default services;
