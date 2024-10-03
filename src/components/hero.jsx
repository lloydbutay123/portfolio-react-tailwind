import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import aboutList from "../Helper/about";

const navLinks = [
  { id: 2, title: "About", label: "about", href: "#about" },
  { id: 3, title: "Work", label: "Work", href: "#projects" },
  { id: 3, title: "Services", label: "Services", href: "#services" },
  { id: 4, title: "Contact", label: "contact", href: "#contact" },
];

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Trigger animation as soon as the component mounts
  }, []);

  // Define sliding animation variants
  const slideLeftToRight = {
    hidden: { opacity: 0, x: -100 }, // Start from the left
    visible: { opacity: 1, x: 0 },   // Slide into position
  };

  const slideRightToLeft = {
    hidden: { opacity: 0, x: 100 },  // Start from the right
    visible: { opacity: 1, x: 0 },   // Slide into position
  };

  const slideBottomToTop = {
    hidden: { opacity: 0, y: 100 },  // Start from the bottom
    visible: { opacity: 1, y: 0 },   // Slide into position
  };

  return (
    <section className="hero flex flex-col justify-center overflow-hidden dark:bg-black p-[16px] md:p-[40px] h-screen space-y-[10px] overflow-x-hidden" id="hero">
      <div className="md:flex w-full lg:max-w-[1056px] justify-between space-y-[10px] pb-[40px] md:pb-0">
        {/* Title Section */}
        <div className="flex flex-col space-y-[8px] w-full md:w-[700px]">
          {navLinks.map((item, index) => {
            return (
              <motion.div key={index} 
              initial="hidden"
              animate={isMounted ? "visible" : "hidden"}
              variants={slideLeftToRight}
              transition={{ duration: 0.6 }}>
                <a href={item.href} className="text-[48px] md:text-[20px] dark:text-white uppercase font-[700] leading-[0.8em]" key={index}>{item.title}</a>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="md:flex w-full lg:max-w-[1056px] justify-between space-y-[10px] pb-[40px] md:pb-0">
        {/* Introduction Section */}
        <motion.div
          className="flex flex-col gap-[34px] w-full md:w-[700px]"
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={slideLeftToRight}
          transition={{ duration: 0.6, delay: 0.4 }} // Add more delay
        >
          {aboutList.map((item, index) => (
            <div key={index}>
              <p className="dark:text-white text-[18px] md:text-[20px] md:w-4/5 font-[500] leading-[1em]">
                {item.introduction}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div className="flex justify-end"
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        variants={slideRightToLeft}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, ease:"linear", repeat: Infinity }}
          className="size-14 bg-[#FF3C00]"
        />
      </motion.div>

      {/* Ensure the text stays at the bottom of the screen */}
      <motion.div className="absolute bottom-0 left-0 right-0 flex justify-center items-end"
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"} // Controlled animation
        variants={slideBottomToTop}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-[12vw] lg:text-[8vw] xl:text-[6vw] font-[1500] text-[#FF3C00] leading-none uppercase">
          LloydVision®
        </h1>
    </motion.div>
    </section>
  );
};

export default Hero;
