import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import aboutList from "../Helper/about";
import AnimatedComponent from "./Motion/AnimatedComponent";
import RotatingComponent from "./Motion/RotatingComponent";

const navLinks = [
  { id: 2, title: "About", label: "about", href: "#about" },
  { id: 3, title: "Work", label: "Work", href: "#work" },
  { id: 3, title: "Service", label: "Service", href: "#service" },
  { id: 4, title: "Contact", label: "contact", href: "#footer" },
];

const Hero = () => {
  // Define slide variants for bottom-to-top animation
  const slideTBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Trigger animation as soon as the component mounts
  }, []);

  return (
    <section
      className="hero xl:relative flex flex-col justify-center overflow-hidden dark:bg-black p-[24px] h-screen space-y-[10px] overflow-x-hidden"
      id="hero"
    >
      <div>
        <div className="xl:absolute xl:top-[208px] md:flex flex-col xl:flex-row gap-[48px] xl:gap-[24px] lg:px-[72px] xl:px-[136px]">
          <AnimatedComponent
            className="md:flex w-full xl:w-2/3 justify-between space-y-[10px] pb-[40px] md:pb-0"
            animationType="slideLeft"
          >
            {/* Title Section */}
            <motion.div className="flex flex-col space-y-[8px] xl:space-y-0 w-full">
              {navLinks.map((item, index) => {
                return (
                  <div key={index}>
                    <a
                      href={item.href}
                      className="text-[48px] lg:text-[54px] xl:text-[80px] dark:text-white uppercase font-[700] leading-[0.8em]"
                      key={index}
                    >
                      {item.title}
                    </a>
                  </div>
                );
              })}
            </motion.div>
          </AnimatedComponent>

          <AnimatedComponent
            className="md:flex w-full xl:w-1/3 xl:block justify-between space-y-[70px] pb-[40px] md:pb-0"
            animationType="slideRight"
          >
            {/* Introduction Section */}
            <motion.div
              className="flex flex-col gap-[34px] w-full"
              initial="hidden"
              animate={isMounted ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.4 }} // Add more delay
            >
              {aboutList.map((item, index) => (
                <div key={index}>
                  <p className="dark:text-white text-[18px] lg:text-[24px] font-[500] leading-[1em]">
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
              <RotatingComponent className="size-14 bg-[#FF3C00]" />
            </motion.div>
          </AnimatedComponent>
        </div>

        <motion.div
          className="absolute bottom-[24px] lg:bottom-0 left-0 right-0"
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"} // Controlled animation
          variants={slideTBottom}
          transition={{ duration: 0.6 }}
        >
          <div className="font-extrabold text-[#FF3C00] leading-none uppercase text-center w-full text-[18vw]">
            CraftJB®
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
