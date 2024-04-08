import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { IoSendSharp } from "react-icons/io5";
import onlinelogo from "../assets/logo/img-logo.webp";
import { BsArrowDownRight } from "react-icons/bs";
import forms from "../Helper/form";
import aboutList from "../Helper/about";
import SocialsLists from "../Helper/socials";

const contact = () => {
  document.title = "Contact | John Lloyd Butay";
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_g3kpyfk", "template_asv26sj", form.current, {
        publicKey: "x9HYiLzpdC_yZyD0e",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          navigate("/success");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      className="dark:bg-black contact px-[20px] min-h-[100vh]"
      id="contact"
    >
      <div className="md:flex mb-20">
        <div className="md:w-2/3 md:px-20 py-[20px]">
          <h1 className="dark:text-white text-[12vw] md:text-[80px] leading-none">
            Let's start a project together
          </h1>
        </div>
        <div className="w-1/3 flex items-end py-[20px]">
          <div className="block">
            <img src={onlinelogo} className="w-[100px] mb-5" />
            <BsArrowDownRight size={25} className="dark:text-white" />
          </div>
        </div>
      </div>

      <form ref={form} onSubmit={sendEmail} method="POST" id="form">
        <div className="block md:flex">
          <div className="md:w-2/3 md:px-20">
            {forms.map((textInput) => {
              return (
                <div
                  className="flex gap-20 border-t-2 border-gray-500 py-[20px]"
                  key={textInput.key}
                >
                  <div>
                    <p className="text-xs font-bold text-gray-500">
                      0{textInput.key}
                    </p>
                  </div>
                  <div className="block w-full">
                    <label className="dark:text-white text-xl font-bold">
                      {textInput.label}
                    </label>
                    <input
                      className="appearance-none block w-full bg-transparent text-gray-700 dark:text-white py-3 mb-3 leading-tight focus:outline-none "
                      id={textInput.id}
                      name={textInput.name}
                      type={textInput.type}
                      placeholder={textInput.placeholder}
                      required
                    />
                  </div>
                </div>
              );
            })}
            <div className="flex justify-end">
              <button
                type="submit"
                className="sendButton relative z-50 dark:text-white font-bold flex items-center py-20"
                aria-label="send button"
              >
                Send message <IoSendSharp className="ml-3" />
              </button>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="mb-10">
              <h6 className="uppercase text-xs mb-3 text-bold text-gray-500">
                Contact Details
              </h6>
              {aboutList.map((item, index) => {
                return (
                  <div key={index}>
                    {item.contacts.map((c, i) => (
                      <div key={i} className="dark:text-white">
                        <a className="text-sm block mb-2" href={`tel:${c.phone1}`}>{c.phone1}</a>
                        <a className="text-sm block mb-2" href={`tel:${c.phone2}`}>{c.phone2}</a>
                        <a className="text-sm block mb-2" href={`mailto:${c.email}`}>{c.email}</a>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
            <div className="py-5">
              <h6 className="uppercase text-xs mb-3 text-bold text-gray-500">
                Address Details
              </h6>
              {aboutList.map((item, index) => {
                return (
                  <div key={index} className="dark:text-white">
                    {item.contacts.map((c, i) => (
                      <p className="text-sm leading-1" key={i}>
                        {c.address}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>
            <div className="hidden md:block py-5">
              <h6 className="uppercase text-xs mb-3 text-bold text-gray-500">Socials</h6>
              {SocialsLists.map((social) => {
                return (
                  <div className="block" key={social.id}>
                    <a
                      href={social.link}
                      target="_blank"
                      className="flex dark:text-white items-center mb-2 cursor-pointer"
                    >
                      {social.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default contact;
