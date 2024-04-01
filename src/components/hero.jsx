import React from "react";
import SocialsLists from "../Helper/socials";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import aboutList from "../Helper/about";

const hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero dark:bg-black px-[20px]" id="hero">
      <div className="block md:flex py-[40px]">
        <div className="md:5/6 text-left mb-3">
          <h1 className="dark:text-white text-left text-[19vw] lg:text-[200px] leading-none">
            Web Developer
          </h1>
        </div>

        <div className="md:w-auto flex items-end justify-center">
          {aboutList.map((item, index) => {
            return (
              <div key={index}>
                {item.story.map((c, i) => (
                  <p className="text-left text-gray-500 pb-[55px]" key={i}>
                    {c.introduction}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-6">
        <div className="col-span-5">
          <p className="dark:text-white text-[20px] lg:text-[20px] md:w-2/3 mb-5">
            Your friendly neighborhood frontend developer, web developer, and
            Software Engineer. I spend my days (and often nights) painting the
            Internet canvas with{" "}
            <a onClick={() => navigate("/projects")}>
              <span className="font-bold cursor-pointer hover:bg-black dark:text-gray-500 dark:hover:bg-white dark:hover:text-black hover:text-white">
                PROJECTS
              </span>{" "}
            </a>
            and lines of code, turning zeroes and ones into immersive,
            interactive experiences.
          </p>
        </div>
        <div className="hidden md:block">
          <h2 className="border-b-2 border-gray-500 mb-2 pb-2 text-gray-500">
            Lets get connected
          </h2>
          {SocialsLists.map((social) => {
            return (
              <div className="block" key={social.id}>
                <a
                  href={social.link}
                  target="_blank"
                  className="flex dark:text-white items-center mb-3 cursor-pointer"
                >
                  {social.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <button
          className="dark:text-white z-50 relative flex left-5 items-center py-3 font-bold"
          aria-label="to about page button"
          onClick={() => navigate("/about")}
        >
          See more about me{" "}
          <span className="ml-3">
            <FaArrowRightLong />
          </span>
        </button>
      </div>
    </section>
  );
};

export default hero;
