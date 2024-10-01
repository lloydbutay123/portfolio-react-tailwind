import React from "react";
import ProjectLists from "../Helper/projects.jsx";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion"; // Import Framer Motion

const projectsPreview = () => {
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
    <section
      className="dark:bg-black projectsPreview w-full flex flex-col items-center p-[20px] md:p-[40px]"
      id="projectsPreview"
    >
      <div className="w-full lg:max-w-[1056px]">
        <motion.div
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeft}
          transition={{ duration: 0.6 }}
        >
          <h1 className="dark:text-white text-5xl md:text-8xl leading-none font-bold">
            Crafted with love.
          </h1>
          <h2 className="dark:text-white text-[16px] md:text-[20px]">
            These are selections of my recent works.
          </h2>
        </motion.div>

        {ProjectLists.map((project, index) => {
          return (
            <motion.div
              className="cursor-pointer dark:bg-black w-full py-10 md:flex justify-between items-center md:mb-0 border-b-2 border-gray-500 break-words"
              key={`project-${project.id}`} // Unique key for the outer motion div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideLeft}
              transition={{ duration: 0.6, delay: index * 0.2 }} // Slight delay for staggered effect
            >
              <div className="mb-10">
                <h1 className="dark:text-white text-4xl md:text-6xl font-medium">
                  <span className="mr-5 text-gray-500 text-sm">0{project.id}</span>
                  {project.title}
                </h1>
                <p className="dark:text-white text-[16px] md:text-[20px] ml-16 md:ml-20">
                  {project.text}
                </p>
              </div>
              <motion.div
                className="pr-7 flex justify-end left-20"
                key={`link-${project.id}`} // Unique key for the inner motion div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideRight}
                transition={{ duration: 0.6 }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  className="dark:text-white text-[16px] md:text-[20px] z-50 relative inline-flex items-center font-bold uppercase"
                  aria-label="to project"
                >
                  View Project{" "}
                  <span className="ml-3">
                    <FaArrowRightLong />
                  </span>
                </a>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default projectsPreview;
