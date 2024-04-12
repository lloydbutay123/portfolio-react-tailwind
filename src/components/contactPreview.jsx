import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import vector1 from "../assets/background_images/Hipster.webp";

const contactPreview = () => {
  const navigate = useNavigate();
  return (
    <section
      className="contactPreview min-h-[100vh] px-[20px] bg-black"
      id="contactPreview"
    >
      <div className="block md:flex">
        <div className="relative h-[100vh] w-full text-center flex items-center justify-center pt-24">
          <div className="text-white z-50 items-center flex justify-center flex-col space-y-10">
            <h1 className="text-4xl md:text-8xl font-bold">Better Together.</h1>
            <p className="md:w-2/3 text-md">
              Do you fancy saying hi to me or you want to get started with your
              project and you need my help? Feel free to contact me.
            </p>
            <div className="flex justify-center">
              <button
                className="dark:text-white z-50 relative flex left-5 items-center font-bold"
                aria-label="to about page button"
                onClick={() => navigate("/contact")}
              >
                Drop me a line{" "}
                <span className="ml-3">
                  <FaArrowRightLong />
                </span>
              </button>
            </div>
          </div>
          <img
            src={vector1}
            className="absolute w-[150px] -left-20 md:left-10 top-[12vh]"
            alt="vector background"
          />
        </div>
      </div>
    </section>
  );
};

export default contactPreview;
