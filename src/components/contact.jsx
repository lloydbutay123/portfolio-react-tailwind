import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { IoSendSharp } from "react-icons/io5";
import onlinelogo from "../assets/logo/img-logo.png";
import { BsArrowDownRight } from "react-icons/bs";
import forms from "../Helper/form";
import aboutList from "../Helper/about";

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
    <section className="contact px-[20px] min-h-[100vh]" id="contact">
      <div className="md:flex mb-20">
        <div className="md:w-2/3 md:px-20 py-[20px]">
          <h1 className="text-[12vw] md:text-[80px] leading-none">
            Let's start a project together
          </h1>
        </div>
        <div className="w-1/3 flex items-end py-[20px]">
          <div className="block">
            <img src={onlinelogo} className="w-[100px] mb-5" />
            <BsArrowDownRight size={25} />
          </div>
        </div>
      </div>

      <form ref={form} onSubmit={sendEmail} method="POST" id="form">
        <div className="block md:flex">
          <div className="md:w-2/3 md:px-20">
            {forms.map((textInput) => {
              return (
                <div
                  className="flex gap-20 border-t-2 border-gray-300 py-[20px]"
                  key={textInput.key}
                >
                  <div>
                    <p className="text-xs font-bold text-gray-500">0{textInput.key}</p>
                  </div>
                  <div className="block w-full">
                    <label className="text-xl font-bold" for={textInput.name}>
                      {textInput.label}
                    </label>
                    <input
                      className="appearance-none block w-full bg-transparent text-gray-700 py-3 mb-3 leading-tight focus:outline-none "
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
                className="relative font-bold flex items-center py-20"
                aria-label="send button"
              >
                Send message <IoSendSharp className="ml-3" />
              </button>
            </div>
          </div>

          <div className="w-1/3">
            <div className="mb-5">
              <h6 className="text-xs mb-3 text-bold text-gray-500">Contact Details</h6>
              {aboutList.map((item, index) => {
                return (
                  <div key={index}>
                    {item.contacts.map((c, i) => (
                      <div key={i}>
                        <p className="text-sm">{c.phone1}</p>
                        <p className="text-sm">{c.phone2}</p>
                        <p className="text-sm">{c.email}</p>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
            <div className="mb-5">
              <h6 className="text-xs mb-3 text-bold text-gray-500">Address Details</h6>
              {aboutList.map((item, index) => {
                return (
                  <div key={index}>
                    {item.contacts.map((c, i) => (
                      <p className="text-sm" key={i}>{c.address}</p>
                    ))}
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
