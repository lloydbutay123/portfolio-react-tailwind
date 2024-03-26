import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { IoSendSharp } from "react-icons/io5";

const contact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [name, setName] = useState("");

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
    <section className="contact px-[20px] py-20" id="contact">
      <form
        className="w-full min-h-[100vh] flex items-center flex-col justify-center"
        ref={form}
        onSubmit={sendEmail}
        method="POST"
        id="form"
      >
        <div className="md:w-[60%]">
          <div>
            <h1 className="text-[15vw] lg:text-[60px] mb-5 font-bold">
              Better Together.
            </h1>
            <p className="mb-5">
              Do you fancy saying hi to me or you want to get started with your
              project and you need my help? Feel free to contact me.
            </p>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3">
              <input
                className="appearance-none block w-full bg-transparent text-gray-700 border-b-2 border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200"
                id="fName"
                name="fName"
                type="text"
                placeholder="First Name"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input
                className="appearance-none block w-full bg-transparent text-gray-700 border-b-2 border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200"
                id="lName"
                name="lName"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <input
                className="appearance-none block w-full bg-transparent text-gray-700 border-b-2 border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
              />
              <input
                className="appearance-none block w-full bg-transparent text-gray-700 border-b-2 border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200"
                id="phone"
                name="phone"
                type="text"
                placeholder="Phone"
                required
              />
              <input
                className="appearance-none block w-full bg-transparent text-gray-700 border-b-2 border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200"
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                required
              />
              <textarea
                className="appearance-none block w-full bg-transparent h-44 text-gray-700 border-b-2 border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200"
                id="message"
                name="message"
                type="text"
                placeholder="Message"
                required
              />
            </div>
          </div>
          <div className="flex justify-end mb-10">
            <button type="submit" className="relative font-bold flex items-center">
              Send message <IoSendSharp className="ml-3" />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default contact;
