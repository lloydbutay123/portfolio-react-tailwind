import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import vector1 from "../assets/background_images/Hipster.webp";

const contactPreview = () => {
  const navigate = useNavigate();

  // Define sliding animations
  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="contactPreview bg-black flex flex-col justify-center items-center p-[20px] md:p-[40px]"
      id="contactPreview"
    >
      <div className="flex min-h-[700px] md:flex w-full lg:max-w-[1056px]">
        <div className="relative w-full text-center flex items-center justify-center">
          <div className="text-white z-50 items-center flex justify-center flex-col space-y-10">
            <motion.h1
              className="text-5xl md:text-8xl leading-none font-bold"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              transition={{ duration: 0.6 }}
            >
              Better Together.
            </motion.h1>
            <motion.p
              className="text-[16px] md:text-[20px] md:w-2/3 text-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Do you fancy saying hi to me or you want to get started with your
              project and you need my help? Feel free to contact me.
            </motion.p>
            <motion.div
              className="flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                className="dark:text-white text-[20px] z-50 relative flex left-5 items-center font-bold"
                aria-label="to contact page button"
                onClick={() => navigate("/contact")}
              >
                Drop me a line{" "}
                <span className="ml-3">
                  <FaArrowRightLong />
                </span>
              </button>
            </motion.div>
          </div>
          <motion.img
            src={vector1}
            className="absolute w-[150px] -left-20 md:left-10 top-[20px]"
            alt="vector background"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            transition={{ duration: 0.6, delay: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
};

export default contactPreview;
