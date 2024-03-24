import React from "react";
import education from "../Helper/education.jsx";

const aboutme = () => {
  return (
    <section
      className="px-[20px] aboutme w-full min-h-screen mt-10"
      id="aboutme"
    >
      <div>
        <div>
          <h1 className="text-[15vw] lg:text-[80px] mb-5 font-bold">
            Some details about me
          </h1>
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-[10vw] lg:text-[60px]">Education</h1>
        </div>
        {education.map((school) => {
          return (
            <div className="grid grid-cols-2 mb-10" key={school.id}>
              <div className="flex justify-center">
                {/* <img src={school.logo} className="w-[150px]" /> */}
              </div>
              <div className="flex justify-center flex-col">
                <h2>{school.name}</h2>
                <p>{school.course}</p>
                <p>{school.year}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default aboutme;
