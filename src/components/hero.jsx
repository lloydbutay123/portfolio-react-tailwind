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

  // Define slide variants for left-to-right animation
  const slideLeft = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  // Define slide variants for right-to-left animation
  const slideRight = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  }

  // Define slide variants for bottom-to-top animation
  const slideTBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  }

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Trigger animation as soon as the component mounts
  }, []);

  return (
    <motion.section
      className="hero xl:relative flex flex-col justify-center overflow-hidden dark:bg-black p-[24px] xl:p-[40px] h-screen space-y-[10px] overflow-x-hidden"
      id="hero"
    >
      <div className="xl:absolute xl:top-[208px] md:flex flex-col xl:flex-row gap-[48px] lg:px-[72px] xl:px-[136px]">
        <motion.div className="md:flex w-full lg:max-w-[1056px] justify-between space-y-[10px] pb-[40px] md:pb-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideRight}
        transition={{ duration: 0.6 }}>
          {/* Title Section */}
          <div className="flex flex-col space-y-[8px] w-full md:w-[700px]">
            {navLinks.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={isMounted ? "visible" : "hidden"}
                  transition={{ duration: 0.6 }}
                >
                  <a href={item.href} className="text-[48px] lg:text-[54px] xl:text-[80px] dark:text-white uppercase font-[700] leading-[0.8em]" key={index}>
                    {item.title}
                  </a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div className="md:flex w-full lg:max-w-[1056px] xl:block justify-between space-y-[70px] pb-[40px] md:pb-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideLeft}
        transition={{ duration: 0.6 }}>
          {/* Introduction Section */}
          <motion.div
            className="flex flex-col gap-[34px] w-full"
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.4 }} // Add more delay
          >
            {aboutList.map((item, index) => (
              <div key={index}>
                <p className="dark:text-white text-[18px] lg:text-[22px] font-[500] leading-[1em]">
                  {item.introduction}
                </p>
              </div>
            ))}
          </motion.div>
          <motion.div
        className="flex justify-end xl:justify-start"
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            className="size-14 bg-[#FF3C00]"
          />
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-[24px] lg:bottom-0 left-0 right-0"
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"} // Controlled animation
        variants={slideTBottom}
        transition={{ duration: 0.6 }}
      >
        <div
          className="font-extrabold text-[#FF3C00] leading-none uppercase text-center w-full text-[18vw]"
        >
          CraftJB®
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
