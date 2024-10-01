import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import SocialsLists from "../Helper/socials";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import aboutList from "../Helper/about";

const Hero = () => {
  const navigate = useNavigate();

  // Define sliding animation variants
  const slideLeftToRight = {
    hidden: { opacity: 0, x: -100 }, // Start from the left
    visible: { opacity: 1, x: 0 },   // Slide into position
  };

  const slideRightToLeft = {
    hidden: { opacity: 0, x: 100 },  // Start from the right
    visible: { opacity: 1, x: 0 },   // Slide into position
  };

  return (
    <section className="hero md:flex flex-col items-center justify-center dark:bg-black p-[20px] md:p-[40px] h-screen space-y-[10px]" id="hero">
      <div className="md:flex w-full lg:max-w-[1056px] justify-between space-y-[10px] pb-[40px] md:pb-0">
        {/* Title Section */}
        <motion.div
          className="w-full md:w-[700px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeftToRight}
          transition={{ duration: 0.6 }}
        >
          {aboutList.map((item, index) => (
            <h1
              className="dark:text-white text-6xl md:text-8xl lg:text-[130px] leading-none"
              key={index}
            >
              {item.title}
            </h1>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="flex items-end w-full md:w-[300px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideRightToLeft}
          transition={{ duration: 0.6, delay: 0.2 }} // Add delay to stagger animation
        >
          {aboutList.map((item, index) => (
            <div key={index}>
              {item.story.map((c, i) => (
                <p
                  className="text-left text-[16px] md:text-[20px] text-gray-500"
                  key={i}
                >
                  {c.introduction}
                </p>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="md:flex w-full lg:max-w-[1056px] justify-between space-y-[10px] pb-[40px] md:pb-0">
        {/* Introduction Section */}
        <motion.div
          className="w-full md:w-[700px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeftToRight}
          transition={{ duration: 0.6, delay: 0.4 }} // Add more delay
        >
          {aboutList.map((item, index) => (
            <p className="dark:text-white text-[16px] md:text-[20px] md:w-4/5 mb-10" key={index}>
              {item.introduction}
            </p>
          ))}
          <button
            className="dark:text-white text-[16px] md:text-[20px] z-50 relative flex left-5 items-center font-bold"
            aria-label="to about page button"
            onClick={() => navigate("/about")}
          >
            See more about me{" "}
            <span className="ml-3">
              <FaArrowRightLong />
            </span>
          </button>
        </motion.div>

        {/* Social Links Section */}
        <motion.div
          className="hidden md:block w-full md:w-[300px] space-y-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideRightToLeft}
          transition={{ duration: 0.6, delay: 0.6 }} // Add stagger for the social links
        >
          <h2 className="border-b-2 text-sm border-gray-500 mb-2 pb-2 text-gray-500">
            Let's get connected
          </h2>
          {SocialsLists.map((social) => (
            <div className="flex" key={social.id}>
              <a
                href={social.link}
                target="_blank"
                className="relative text-sm dark:text-white after:absolute after:content-[''] after:bg-black dark:after:bg-white after:h-[3px] after:w-0 after:left-0 after:top-2 after:duration-300 hover:after:w-full transition ease-in-out delay-150 hover:translate-x-3 duration-500"
              >
                {social.name}
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
