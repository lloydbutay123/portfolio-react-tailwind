import React from "react";
import aboutList from "../Helper/about";
import ContactPreview from "./contactPreview";

const about = () => {
  document.title = "About | Hanz Ivan Sanchez";
  return (
    <section className="dark:bg-black about min-h-[100vh] w-full" id="about">
      <div className="px-[20px] overflow-hidden md:flex justify-center items-center min-h-screen">
        <div className="w-full md:w-3/5 my-10">
          {aboutList.map((about, index) => {
            return (
              <h1
                className="dark:text-white text-[30px] font-light md:text-5xl"
                key={index}
              >
                {about.description}
              </h1>
            );
          })}
        </div>
        <div className="w-full md:w-2/5 flex justify-center py-10">
          {aboutList.map((about, index) => {
            return (
              <img
                key={index}
                src={about.img}
                className="w-auto md:w-[70%]"
                alt="About image"
              />
            );
          })}
        </div>
      </div>

      <div className="px-[20px]">
        <div className="block md:flex mb-20">
          <div className="w-1/3">
            <p className="dark:text-white text-xs uppercase flex items-center">
              /01 <span className="mx-10 text-gray-500">Story</span>
            </p>
          </div>
          <div className="md:w-2/3">
            <h1 className="dark:text-white text-xl font-bold mb-10">
              Persistence and Hardwork
            </h1>
            {aboutList.map((item, index) => {
              return (
                <div key={index}>
                  {item.story.map((c, i) => (
                    <div
                      className="dark:text-white text-[18px] leading-loose"
                      key={i}
                    >
                      <p className="my-10 text-md">{c.text1}</p>
                      <p className="text-md">{c.text2}</p>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        <div className="block md:flex mb-20">
          <div className="md:w-1/3">
            <p className="dark:text-white text-xs uppercase flex items-center">
              /02 <span className="mx-10 text-gray-500">Education</span>
            </p>
          </div>
          <div className="md:w-2/3">
            <h1 className="dark:text-white text-xl font-bold mb-10">
              Academics footprints
            </h1>
            {aboutList.map((item, index) => {
              return (
                <div key={index} className="space-y-10">
                  {item.education.map((c, i) => (
                    <div className="dark:text-white text-[18px]" key={i}>
                      <h2 className="uppercase font-bold text-md">{c.name}</h2>
                      <p className="text-sm">{c.course}</p>
                      <p className="text-gray-500 text-sm">{c.year}</p>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        <div className="block md:flex mb-20">
          <div className="md:w-1/3">
            <p className="dark:text-white text-xs uppercase">
              /03 <span className="mx-10 text-gray-500">Work Experience</span>
            </p>
          </div>
          <div className="md:w-2/3">
            <h1 className="dark:text-white text-xl font-bold mb-10">
              Career footprints
            </h1>
            {aboutList.map((item, index) => {
              return (
                <div key={index} className="space-y-10">
                  {item.experience.map((c, i) => (
                    <div className="dark:text-white text-[18px]" key={i}>
                      <h2 className="uppercase font-bold text-md">{c.name}</h2>
                      <p className="text-sm">{c.title}</p>
                      <p className="text-gray-500 text-sm">{c.year}</p>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        <div className="block md:flex mb-20">
          <div className="md:w-1/3">
            <p className="dark:text-white text-xs uppercase">
              /04 <span className="mx-10 text-gray-500">Trainings</span>
            </p>
          </div>
          <div className="md:w-2/3">
            <h1 className="dark:text-white text-xl font-bold mb-10">
              Trainings and Certificates
            </h1>
            {aboutList.map((item, index) => {
              return (
                <div key={index} className="space-y-10">
                  {item.trainings.map((c, i) => (
                    <div className="dark:text-white text-[18px]" key={i}>
                      <h2 className="uppercase font-bold text-md">{c.name}</h2>
                      <p className="text-sm">{c.company}</p>
                      <p className="text-gray-500 text-sm">{c.issuedOn}</p>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ContactPreview />
    </section>
  );
};

export default about;
