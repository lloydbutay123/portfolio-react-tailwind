import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import vector1 from "../assets/background_images/Hipster.png";

const contactPreview = () => {
  const navigate = useNavigate();
  return (
    <section
      className="contactPreview min-h-[100vh] px-[20px] bg-black"
      id="contactPreview"
    >
      <div className="block md:flex">
        <div className="relative md:w-3/5 flex justify-center pt-24">
          <div className="text-white z-50">
            <h1 className="text-3xl md:text-6xl font-bold mb-10">
              Let's work together.
            </h1>
            <p className="mb-20">
              Let's work together to build something great.
            </p>
            <button
              onClick={() => {
                navigate("/contact");
              }}
              type="submit"
              className="relative z-50 left-5 font-bold flex items-center"
            >
              SAY HELLO <FaArrowRight className="ml-3" />
            </button>
          </div>
          <img src={vector1} className="absolute w-[150px] -left-20 md:left-10 top-[12vh]" />
        </div>
        <div className="hidden md:flex justify-center items-center md:w-2/5 md:h-[100vh] text-white">
          <div>
            <p>johnlloydbutay123@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contactPreview;
