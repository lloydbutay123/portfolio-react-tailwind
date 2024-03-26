import React from "react";
import { FaArrowRightLong, FaLocationDot, FaPhone } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import vector1 from "../assets/background_images/Hipster.png";
import { FaMailBulk } from "react-icons/fa";

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
              SAY HELLO <FaArrowRightLong className="ml-3" />
            </button>
          </div>
          <img src={vector1} className="absolute w-[150px] -left-20 md:left-10 top-[12vh]" />
        </div>
        <div className="hidden md:flex justify-center text-right items-center md:w-2/5 md:h-[100vh] text-white">
          <div>
            <p className="mb-5 flex justify-end">johnlloydbutay123@gmail.com <span className="ml-3 text-gray-500"><FaMailBulk /></span></p>
            <p className="mb-5 flex justify-end">09567223090 / 09070343386<span className="ml-3 text-gray-500"><FaPhone /></span></p>
            <p className="mb-5 flex justify-end ">City of Batac, Ilocos Norte Philippines6<span className="ml-3 text-gray-500"><FaLocationDot /></span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contactPreview;
