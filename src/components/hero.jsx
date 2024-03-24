import React from "react";
import SocialsLists from "../Helper/socials";
import { MdCallMade } from "react-icons/md";
import { Link } from "react-router-dom";

const hero = () => {
  return (
    <section className="hero px-[20px]" id="hero">
      <div className="grid gap-4 lg:grid-cols-4 mb-10 md:mb-20">
        <div className="w-full col-span-3 text-left">
          <h1 className="text-left text-[20vw] lg:text-[200px] leading-none">
            Web <span className="block leading-none">Developer</span>
          </h1>
        </div>

        <div className="w-full flex items-end">
          <p className="text-left text-gray-500 pb-[30px]">
            specialized in Web Design, UX / UI, Webflow, and Front End
            Development.
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-6">
        <div className="col-span-5">
          <p className="text-[20px] lg:text-[20px] md:w-2/3 mb-5">
            Your friendly neighborhood frontend developer, web developer, and
            Software Engineer. I spend my days (and often nights) painting the
            Internet canvas with{" "}
            <span className="font-bold hover:bg-black hover:text-white">
              PROJECTS
            </span>{" "}
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
                  className="flex items-center mb-2 cursor-pointer gap-3"
                >
                  {social.icon} {social.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mb-10">
      <button className="relative flex items-center py-3 px-4 font-bold">
          Drop me a line{" "}
          <span className="ml-3">
            <MdCallMade />
          </span>
        </button>

      </div>
    </section>
  );
};

export default hero;
