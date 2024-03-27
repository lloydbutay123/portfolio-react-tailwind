import React from "react";
import SocialsLists from "../Helper/socials.jsx";
import { FaRegCopyright } from "react-icons/fa";
const footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="block py-20 w-full bg-black text-white">
      <div className="md:flex justify-center items-center text-center">
        <div className="flex items-center justify-center mx-2 mb-5 md:mb-0">
          {SocialsLists.map((social) => {
            return (
              <a
                href={social.link}
                target="_blank"
                className="mx-4 md:mx-7"
                key={social.id}
              >
                {social.icon}
              </a>
            );
          })}
        </div>
        <div className="flex items-center justify-center md:border-l-2 border-black px-4">
          <FaRegCopyright size={12} />
          <p className="font-bold text-xs ml-2">
            JOHN LLOYD BUTAY dsadas <span>{date}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
