import React from "react";
import aboutList from "../Helper/about";
import ContactPreview from "./contactPreview";

const about = () => {
  document.title = "About | John Lloyd Butay";
  return (
    <section className="about min-h-[100vh] w-full" id="about">
      <div className="overflow-hidden md:flex px-[40px] justify-center items-center">
        <div className="w-full md:w-3/5 my-10">
          {aboutList.map((about) => {
            return (
              <h1 className="text-[30px] font-light md:text-5xl">
                {about.title}
              </h1>
            );
          })}
        </div>
        <div className="w-full md:w-2/5 flex justify-center py-10">
          {aboutList.map((about) => {
            return (
              <img
                src={about.img}
                className="w-auto md:w-[70%]"
                alt="About image"
              />
            );
          })}
        </div>
      </div>
      <div className="overflow-hidden md:flex min-h-[100vh] px-[40px] my-20">
        <div className="md:w-1/3">
          <p className="text-xs uppercase">
            /01 <span className="mx-10 text-gray-500">Story</span>
          </p>
        </div>
        <div className="md:w-2/3 h-9">
          <h1 className="text-2xl font-bold mb-10">Persistence and Hardwork</h1>
          {aboutList.map((item, index) => {
            return (
              <div key={index}>
                {item.story.map((c, i) => (
                  <div className="text-[18px] leading-loose" key={i}>
                    <p className="my-10">{c.text1}</p>
                    <p>{c.text2}</p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="overflow-hidden md:flex min-h-[100vh] px-[40px] my-20">
        <div className="md:w-1/3">
          <p className="text-xs uppercase">
            /02 <span className="mx-10 text-gray-500">Education</span>
          </p>
        </div>
        <div className="md:w-2/3 h-9">
          <h1 className="text-2xl font-bold mb-10">Academics footsteps</h1>
          {aboutList.map((item, index) => {
            return (
              <div key={index}>
                {item.education.map((c, i) => (
                  <div className="text-[18px] my-10 leading-loose" key={i}>
                    <h2 className="uppercase font-bold">{c.name}</h2>
                    <p>{c.course}</p>
                    <p className="text-gray-500">{c.year}</p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="overflow-hidden md:flex h-full px-[40px] py-[40px]">
        <div className="md:w-1/3 h-9 ">
          <p className="text-xs uppercase">
            /03 <span className="mx-10 text-gray-500">Work Experience</span>
          </p>
        </div>
        <div className="md:w-2/3">
          <h1 className="text-2xl font-bold mb-10">Career footsteps</h1>
          {aboutList.map((item, index) => {
            return (
              <div key={index}>
                {item.experience.map((c, i) => (
                  <div className="text-[18px] my-10 leading-loose" key={i}>
                    <h2 className="uppercase font-bold">{c.name}</h2>
                    <p>{c.title}</p>
                    <p className="text-gray-500">{c.year}</p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="block overflow-auto md:flex min-h-[100vh] px-[40px] py-[40px]">
        <div className="md:w-1/3 h-9 ">
          <p className="text-xs uppercase">
            /04 <span className="mx-10 text-gray-500">Trainings</span>
          </p>
        </div>
        <div className="md:w-2/3">
          <h1 className="text-2xl font-bold mb-10">
            Trainings and Certificates
          </h1>
          {aboutList.map((item, index) => {
            return (
              <div key={index}>
                {item.trainings.map((c, i) => (
                  <div className="text-[18px] my-10 leading-loose" key={i}>
                    <h2 className="uppercase font-bold">{c.name}</h2>
                    <p>{c.company}</p>
                    <p className="text-gray-500">{c.issuedOn}</p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <ContactPreview />
    </section>
  );
};

export default about;
