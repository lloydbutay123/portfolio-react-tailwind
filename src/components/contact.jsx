import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { IoSendSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import onlinelogo from "../assets/logo/img-logo.webp";
import { BsArrowDownRight } from "react-icons/bs";
import forms from "../Helper/form";
import aboutList from "../Helper/about";
import SocialsLists from "../Helper/socials";

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
          navigate("/success");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  // Define variants for sliding animations
  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      className="lg:flex flex-col items-center dark:bg-black contact p-[20px] md:p-[40px] min-h-[100vh]"
      id="contact"
    >
      {/* Title and Logo Section */}
      <div className="lg:max-w-[1056px] md:flex mb-20">
        <motion.div
          className="md:w-2/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeft}
          transition={{ duration: 0.6 }}
        >
          <h1 className="dark:text-white text-[12vw] md:text-[80px] leading-none">
            Let's start a project together
          </h1>
        </motion.div>
        <motion.div
          className="w-1/3 flex items-end py-[20px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideRight}
          transition={{ duration: 0.6 }}
        >
          <div className="block">
            <img src={onlinelogo} className="w-[100px] mb-5" alt="Logo" />
            <BsArrowDownRight
              size={25}
              className="dark:text-white"
              onClick={() => navigate("/404")}
            />
          </div>
        </motion.div>
      </div>

      {/* Form Section */}
      <form ref={form} onSubmit={sendEmail} method="POST" id="form">
        <div className="block md:flex md:gap-[40px]">
          <motion.div
            className="md:w-2/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeft}
            transition={{ duration: 0.6 }}
          >
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
                    className="dark:text-white text-[16px] md:text-[20px] font-bold"
                    htmlFor={textInput.id}
                  >
                    {textInput.label}
                  </label>
                  <input
                    className="appearance-none w-full text-sm md:text-md bg-transparent text-gray-700 dark:text-white py-3 mb-3 leading-tight focus:outline-none"
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
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            className="md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideRight}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-10">
              <h6 className="uppercase text-xs mb-3 text-bold text-gray-500">
                Contact Details
              </h6>
              {aboutList.map((item, index) => (
                <div key={index}>
                  {item.contacts.map((c, i) => (
                    <div key={i} className="dark:text-white">
                      <a
                        className="text-sm block mb-2"
                        href={`tel:${c.phone}`}
                      >
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
            <div className="hidden md:block py-5">
              <h6 className="uppercase text-xs mb-3 text-bold text-gray-500">
                Socials
              </h6>
              {SocialsLists.map((social) => (
                <div className="block" key={social.id}>
                  <a
                    href={social.link}
                    target="_blank"
                    className="flex text-sm dark:text-white items-center mb-2 cursor-pointer"
                  >
                    {social.name}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
