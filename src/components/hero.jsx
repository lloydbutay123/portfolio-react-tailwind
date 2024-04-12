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
          <p className="dark:text-white text-[20px] lg:text-[20px] md:w-2/3 mb-10">
            Your friendly neighborhood frontend developer, web developer, and
            Software Engineer. I spend my days (and often nights) painting the
            Internet canvas with{" "}
            <span
              className="font-bold cursor-pointer hover:bg-black dark:text-gray-500 dark:hover:bg-white dark:hover:text-black hover:text-white"
              onClick={() => navigate("/projects")}
            >
              PROJECTS
            </span>{" "}
            and lines of code, turning zeroes and ones into immersive,
            interactive experiences.
          </p>
          <button
            className="dark:text-white z-50 relative flex left-5 items-center font-bold"
            aria-label="to about page button"
            onClick={() => navigate("/about")}
          >
            See more about me{" "}
            <span className="ml-3">
              <FaArrowRightLong />
            </span>
          </button>
        </div>
        <div className="hidden space-y-3 w-full md:block">
          <h2 className="border-b-2 text-sm border-gray-500 mb-2 pb-2 text-gray-500">
            Lets get connected
          </h2>
          {SocialsLists.map((social) => {
            return (
              <div className="flex" key={social.id}>
                <a
                  href={social.link}
                  target="_blank"
                  className="relative text-sm dark:text-white after:absolute after:content-[''] after:bg-black dark:after:bg-white after:h-[3px] after:w-0 after:left-0 after:top-2 after:duration-300 hover:after:w-full transition ease-in-out delay-150 hover:translate-x-3 duration-500"
                >
                  {social.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default hero;
