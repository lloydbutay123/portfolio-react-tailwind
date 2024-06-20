import React from "react";
import SocialsLists from "../Helper/socials";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import aboutList from "../Helper/about";

const hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero dark:bg-black px-[20px] h-screen" id="hero">
      <div className="block md:flex py-[40px]">
        <div className="md:w-4/5 text-left mb-3">
          {aboutList.map((item, index) => {
            return (
              <h1
                className="dark:text-white text-left text-[14vw]  leading-none"
                key={index}
              >
                {item.title}
              </h1>
            );
          })}
        </div>

        <div className="md:w-1/5 flex items-end justify-center">
          {aboutList.map((item, index) => {
            return (
              <div key={index}>
                {item.story.map((c, i) => (
                  <p
                    className="text-left text-md text-gray-500"
                    key={i}
                  >
                    {c.introduction}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex">
        <div className="md:w-4/5">
          {aboutList.map((item, index) => {
            return (
              <p className="dark:text-white text-lg md:w-4/5 mb-10" key={index}>
                {item.introduction}
              </p>
            );
          })}
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
        <div className="hidden md:block w-1/6 space-y-2">
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
