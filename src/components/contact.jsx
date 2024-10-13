import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { IoSendSharp } from "react-icons/io5";
import onlinelogo from "../assets/logo/img-logo.webp";
import { BsArrowDownRight } from "react-icons/bs";
import forms from "../Helper/form";
import aboutList from "../Helper/about";
import AnimatedComponent from "./Motion/AnimatedComponent";
import Swal from "sweetalert2";

const Contact = () => {
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
          Swal.fire({
            title: "Success!",
            text: "Thanks a bunch! I can’t wait to dive into your ideas!",
            icon: "success",
            confirmButtonText: "Ok",
          });

          form.current.reset();
        },
        (error) => {
          s;
          console.log("FAILED...", error.text);
          Swal.fire({
            title: "Error!",
            text: "There was a problem sending your message.",
            icon: "error",
            confirmButtonText: "Try Again",
          });
        }
      );
  };

  return (
    <section
      className="lg:flex flex-col items-center overflow-x-hidden dark:bg-black contact p-[24px] lg:min-h-[100vh]"
      id="contact"
    >
      {/* Title and Logo Section */}
      <div className="w-full lg:pt-[136px] lg:px-[96px] md:flex mb-20 xl:pt-[96px] xl:px-[136px]">
        <AnimatedComponent className="md:w-2/3" animationType="slideLeft">
          <p className="dark:text-white text-[12vw] md:text-[80px] leading-none">
            Let's start a project together
          </p>
        </AnimatedComponent>
        <AnimatedComponent
          className="w-1/3 flex items-end py-[20px]"
          animationType="slideRight"
        >
          <div className="block">
            <img src={onlinelogo} className="w-[100px] mb-5" alt="Logo" />
            <BsArrowDownRight
              size={25}
              className="dark:text-white"
              onClick={() => navigate("/404")}
            />
          </div>
        </AnimatedComponent>
      </div>

      {/* Form Section */}
      <form
        ref={form}
        onSubmit={sendEmail}
        method="POST"
        id="form"
        className="w-full lg:px-[96px] xl:px-[136px]"
      >
        <div className="block md:flex md:gap-[40px]">
          <AnimatedComponent className="md:w-2/3" animationType="slideLeft">
            {forms.map((textInput) => (
              <div
                className="flex gap-20 border-t-2 border-gray-500 py-[20px]"
                key={textInput.key}
              >
                <div>
                  <p className="text-md font-bold text-gray-500">
                    0{textInput.key}
                  </p>
                </div>
                <div className="block w-full">
                  <label
                    className="dark:text-white text-[18px] leading-[1em] md:text-[20px] font-bold"
                    htmlFor={textInput.id}
                  >
                    {textInput.label}
                  </label>
                  <input
                    className="appearance-none w-full text-[16px] leading-[1em] md:text-md bg-transparent text-gray-700 dark:text-white py-3 mb-3 focus:outline-none"
                    id={textInput.id}
                    name={textInput.name}
                    type={textInput.type}
                    placeholder={textInput.placeholder}
                    required
                    autoComplete="on"
                  />
                </div>
              </div>
            ))}
            <div className="flex justify-end pr-10 my-20">
              <button
                type="submit"
                className="sendButton dark:text-white text-[16px] md:text-[20px] z-50 relative flex left-5 items-center font-bold"
                aria-label="send button"
              >
                Send message <IoSendSharp className="ml-3" />
              </button>
            </div>
          </AnimatedComponent>

          {/* Contact Info Section */}
          <AnimatedComponent className="md:w-1/3" animationType="slideRight">
            <div className="mb-10">
              <h6 className="uppercase text-xs mb-3 text-bold text-gray-500">
                Contact Details
              </h6>
              {aboutList.map((item, index) => (
                <div key={index}>
                  {item.contacts.map((c, i) => (
                    <div key={i} className="dark:text-white">
                      <a className="text-sm block mb-2" href={`tel:${c.phone}`}>
                        {c.phone}
                      </a>
                    </div>
                  ))}
                  {item.contacts.map((c, i) => (
                    <div key={i} className="dark:text-white">
                      <a
                        className="text-sm block mb-2"
                        href={`mailto:${c.email}`}
                      >
                        {c.email}
                      </a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="py-5">
              <h6 className="uppercase text-xs mb-3 text-bold text-gray-500">
                Address Details
              </h6>
              {aboutList.map((item, index) => (
                <div key={index} className="dark:text-white">
                  {item.contacts.map((c, i) => (
                    <p className="text-sm leading-1" key={i}>
                      {c.address}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </AnimatedComponent>
        </div>
      </form>
    </section>
  );
};

export default Contact;
