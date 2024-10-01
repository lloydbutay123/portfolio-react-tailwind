import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import ServicesList from "../Helper/services.jsx";
import Skills from "../Helper/skills.jsx";

const Services = () => {
  // Define slide variants for left-to-right animation
  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="flex flex-col items-center p-[20px] md:p-[40px] space-y-[40px]" id="services">
      <div className="dark:bg-black w-full lg:max-w-[1056px]">
        <motion.div
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeft}
          transition={{ duration: 0.6 }}
        >
          <h2 className="dark:text-white text-4xl lg:text-5xl font-medium">
            I can help you with ...
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3">
          {ServicesList.map((service, index) => (
            <motion.div
              className="w-full md:pr-10 mb-5"
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideLeft}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="border-b-2 border-gray-500 py-5">
                <h3 className="text-5xl md:text-6xl text-gray-500 font-medium">
                  0{service.id}
                </h3>
              </div>
              <div className="py-5">
                <h2 className="dark:text-white text-[24px] mb-5 font-medium">
                  {service.title}
                </h2>
                <p className="text-[16px] md:text-[20px] dark:text-white">
                  {service.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full lg:max-w-[1056px] dark:bg-black py-[80px]">
        <motion.div
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeft}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="dark:text-white text-5xl md:text-8xl leading-none font-bold break-normal">
            Technologies <span className="block text-gray-500">& Tools</span>
          </h1>
        </motion.div>

        <div className="flex justify-center">
          <div className="grid w-5/6 grid-cols-3 md:grid-cols-6 gap-5">
            {Skills.map((item, index) => (
              <motion.a
                className="dark:text-white w-full flex justify-center text-5xl"
                key={index}
                href={item.link}
                target="_blank"
                aria-label={item.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideRight}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
