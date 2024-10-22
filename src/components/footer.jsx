import React, { useEffect, useState } from "react";
import SocialsLists from "../Helper/socials.jsx";
import { FaRegCopyright } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AnimatedComponent from "./Motion/AnimatedComponent.jsx";
const footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  });

  const navigate = useNavigate();

  return (
    <footer className="lg:p-[24px] dark:bg-black" id="footer">
      <div className="block lg:flex flex-col lg:rounded-[60px] w-full bg-black dark:bg-[#FF3C00] text-white px-[24px] py-[96px] lg:px-[96px] xl:px-[136px]">
        <div className="flex flex-col gap-[72px]">
          <AnimatedComponent className="grid place-items-center gap-[40px]" animationType="slideBottom"> 
            <h1 className="text-[48px] lg:text-[84px] leading-[1em] text-center max-w-[700px]">
              Let's create your next big idea.
            </h1>
            <button
              className="text-[18px] bg-white px-[24px] py-[12px] text-black rounded-[30px] font-medium"
              onClick={() => navigate("/contact")}
            >
              Schedule a call
            </button>
          </AnimatedComponent>
          <div className="block justify-between mb-5 md:mb-0">
            <p className="uppercase text-xs text-gray-400 py-3">Socials</p>
            <div className="flex flex-wrap border-b-2 md:border-none border-gray-400 gap-5 pb-10 md:pb-0">
              {SocialsLists.map((social) => {
                return (
                  <a
                    className="text-[14px] font-medium"
                    href={social.link}
                    target="_blank"
                    aria-label={social.name}
                    key={social.id}
                  >
                    {social.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between">
          <div className="block items-center justify-center">
            <p className="flex items-center uppercase text-xs text-gray-400 py-3">
              Version
            </p>
            <p className="flex items-center text-sm">
              <span>{year}</span> <FaRegCopyright className="mx-1" size={12} />
              Edition
            </p>
          </div>
          <div className="block">
            <p className="uppercase text-xs text-gray-400 py-3">Local Time</p>
            <p className="text-sm uppercase">
              {time.toLocaleTimeString().replace(/(.*)\D\d+/, "$1")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
