import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import errorImg from "../assets/background_images/404.webp";
import errorImgDark from "../assets/background_images/404Dark.webp";

const error = ({ darkMode }) => {
  const navigate = useNavigate();

  return (
    <section className="error" id="error">
      <div className="block md:flex dark:bg-black min-h-screen w-full px-[20px] items-center top-0">
        <div className="md:w-1/2">
          {darkMode ? (
            <img src={errorImgDark} className="w-full" alt="404" />
          ) : (
            <img src={errorImg} className="w-full" alt="404" />
          )}
        </div>
        <div className="md:w-1/2 space-y-10 md:px-20">
          <h5 className="hidden md:flex dark:text-white text-[200px] font-semibold leading-2 leading-10">
            404
          </h5>
          <p className="dark:text-white">
            The page you we're looking for does'nt exist. You may have misstyped
            the address or the page may have moved.
          </p>
          <button
            className="dark:text-white z-50 relative flex left-5 items-center font-bold"
            aria-label="to about page button"
            onClick={() => navigate("/")}
          >
            {" "}
            <span className="mr-3">
              <FaArrowLeftLong />
            </span>
            Go to Home page{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default error;
