import React from "react";
import { motion } from "framer-motion";
import aboutList from "../Helper/about";
import ContactPreview from "./contactPreview";

const About = () => {
  document.title = "About | John Lloyd Butay";

  // Define variants for sliding animations (from left to right)
  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };


  return (
    <section className="dark:bg-black about min-h-[100vh] w-full" id="about">
      <div className="md:flex flex-col items-center p-[20px] md:p-[40px] space-y-[40px]">
        
        {/* About Description and Image Section */}
        <div className="md:flex lg:max-w-[1056px] gap-[40px] space-y-[40px]">
          <div className="flex items-center">
            {aboutList.map((about, index) => (
              <motion.h1
                className="text-3xl dark:text-white"
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideLeft} // Slide from left to right
                transition={{ duration: 0.6 }}
              >
                {about.description}
              </motion.h1>
            ))}
          </div>
          <div>
            {aboutList.map((about, index) => (
              <motion.img
                key={index}
                src={about.img}
                className="w-auto md:w-[600px]"
                alt="About image"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideRight} // Slide from left to right
                transition={{ duration: 0.6 }}
              />
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="lg:max-w-[1056px]">
          <div className="block md:flex mb-20">
            <div className="w-1/3">
              <p className="dark:text-white text-xs uppercase flex items-center">
                /01 <span className="mx-10 text-gray-500">Story</span>
              </p>
            </div>
            <div className="md:w-2/3">
              <motion.h1
                className="dark:text-white text-xl font-bold mb-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideLeft} // Slide from left to right
                transition={{ duration: 0.6 }}
              >
                Persistence and Hardwork
              </motion.h1>
              {aboutList.map((item, index) => (
                <div key={index}>
                  {item.story.map((c, i) => (
                    <motion.div
                      className="dark:text-white text-[16px] md:text-[20px] leading-loose"
                      key={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={slideRight} // Slide from left to right
                      transition={{ duration: 0.6 }}
                    >
                      <p className="my-10">{c.text1}</p>
                      <p>{c.text2}</p>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="block md:flex mb-20">
            <div className="md:w-1/3">
              <p className="dark:text-white text-xs uppercase flex items-center">
                /02 <span className="mx-10 text-gray-500">Education</span>
              </p>
            </div>
            <div className="md:w-2/3">
              <motion.h1
                className="dark:text-white text-xl font-bold mb-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideLeft} // Slide from left to right
                transition={{ duration: 0.6 }}
              >
                Academic Milestones
              </motion.h1>
              {aboutList.map((item, index) => (
                <div key={index} className="space-y-10">
                  {item.education.map((c, i) => (
                    <motion.div
                      className="dark:text-white"
                      key={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={slideRight} // Slide from left to right
                      transition={{ duration: 0.6 }}
                    >
                      <h2 className="uppercase font-bold text-[16px] md:text-[20px]">
                        {c.name}
                      </h2>
                      <p className="text-sm md:text-md">{c.course}</p>
                      <p className="text-gray-500 text-sm md:text-md">
                        {c.year}
                      </p>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="block md:flex mb-20">
            <div className="md:w-1/3">
              <p className="dark:text-white text-xs uppercase">
                /03{" "}
                <span className="mx-10 text-gray-500">Work Experience</span>
              </p>
            </div>
            <div className="md:w-2/3">
              <motion.h1
                className="dark:text-white text-xl font-bold mb-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideLeft} // Slide from left to right
                transition={{ duration: 0.6 }}
              >
                Professional Milestones
              </motion.h1>
              {aboutList.map((item, index) => (
                <div key={index} className="space-y-10">
                  {item.experience.map((c, i) => (
                    <motion.div
                      className="dark:text-white"
                      key={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={slideRight} // Slide from left to right
                      transition={{ duration: 0.6 }}
                    >
                      <h2 className="uppercase font-bold text-[16px] md:text-[20px]">
                        {c.name}
                      </h2>
                      <p className="text-sm md:text-md">{c.title}</p>
                      <p className="text-gray-500 text-sm md:text-md">
                        {c.year}
                      </p>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Trainings Section */}
          <div className="block md:flex mb-20">
            <div className="md:w-1/3">
              <p className="dark:text-white text-xs uppercase">
                /04 <span className="mx-10 text-gray-500">Trainings</span>
              </p>
            </div>
            <div className="md:w-2/3">
              <motion.h1
                className="dark:text-white text-xl font-bold mb-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideLeft} // Slide from left to right
                transition={{ duration: 0.6 }}
              >
                Trainings and Certificates
              </motion.h1>
              {aboutList.map((item, index) => (
                <div key={index} className="space-y-10">
                  {item.trainings.map((c, i) => (
                    <motion.div
                      className="dark:text-white"
                      key={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={slideRight} // Slide from left to right
                      transition={{ duration: 0.6 }}
                    >
                      <h2 className="uppercase font-bold text-[16px] md:text-[20px]">
                        {c.name}
                      </h2>
                      <p className="text-sm md:text-md">{c.company}</p>
                      <p className="text-gray-500 text-sm md:text-md">
                        {c.issuedOn}
                      </p>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ContactPreview />
    </section>
  );
};

export default About;
