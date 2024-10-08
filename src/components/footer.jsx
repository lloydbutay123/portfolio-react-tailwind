import React, { useEffect, useState } from "react";
import SocialsLists from "../Helper/socials.jsx";
import { FaRegCopyright } from "react-icons/fa";
const footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  });

  return (
    <footer className="block lg:flex flex-col items-center w-full bg-black text-white p-[24px] lg:px-[96px] xl:px-[136px]">
      <div className="md:flex w-full gap-4 justify-between items-center">
        <div className="block justify-between mb-5 md:mb-0">
          <p className="uppercase text-xs text-gray-400 py-3">Socials</p>
          <div className="flex flex-wrap border-b-2 md:border-none border-gray-400 gap-5 pb-10 md:pb-0">
            {SocialsLists.map((social) => {
              return (
                <a
                  className="text-sm"
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
        <div className="flex gap-5 justify-between">
          <div className="block items-center justify-center md:border-l-2 border-black">
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