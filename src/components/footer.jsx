import React from "react";
import SocialsLists from "../Helper/socials.jsx";
import { FaRegCopyright } from "react-icons/fa";

const footer = () => {
    const date = new Date().getFullYear();

  return (
    <footer className="w-full">
    <div className="md:flex justify-center items-center text-center my-10">
      {SocialsLists.map((social) => {
        return (
          <div className="inline-flex" key={social.id}>
            <a href={social.link} target="_blank" className="mx-3">{social.icon}</a>
          </div>
        );
      })}
      <div className="flex items-center justify-center">
      <FaRegCopyright/>
      <p className="ml-2 font-bold">JOHN LLOYD BUTAY <span>{date}</span></p>

      </div>
      </div>


    </footer>
  );
};

export default footer;
