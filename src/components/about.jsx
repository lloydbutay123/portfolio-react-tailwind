import React from "react";
import { motion } from "framer-motion";
import aboutList from "../Helper/about";

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
      <div className="md:flex flex-col items-center p-[20px] md:p-[40px] space-y-[40px] overflow-x-hidden">
        
        {/* About Description and Image Section */}
        <div className="md:flex lg:max-w-[1056px] gap-[40px] space-y-[40px]">
          <div className="flex items-center">
            {aboutList.map((about, index) => (
              <motion.p
                className="text-3xl dark:text-white leading-[1em]"
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideLeft} // Slide from left to right
                transition={{ duration: 0.6 }}
              >
                {about.description}
              </motion.p>
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
                className="dark:text-white text-[21px] font-bold mb-10"
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
                      className="dark:text-white text-[18px] md:text-[20px] leading-[1em]"
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
                className="dark:text-white text-[21px] font-bold mb-10"
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
                      <h2 className="uppercase font-bold text-[18px] md:text-[20px] leading-[1em]">
                        {c.name}
                      </h2>
                      <p className="text-[16px] md:text-md leading-[1em]">{c.course}</p>
                      <p className="text-gray-500 text-[16px] md:text-md leading-[1em]">
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
                className="dark:text-white text-[21px] font-bold mb-10"
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
                      <h2 className="uppercase font-bold text-[18px] md:text-[20px] leading-[1em]">
                        {c.name}
                      </h2>
                      <p className="text-[16px] leading-[1em] md:text-md">{c.title}</p>
                      <p className="text-gray-500 text-[16px] leading-[1em] md:text-md">
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
                className="dark:text-white text-[21px] font-bold mb-10"
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
                      <h2 className="uppercase font-bold text-[18px] leading-[1em] md:text-[20px]">
                        {c.name}
                      </h2>
                      <p className="text-[16px] leading-[1em] md:text-md">{c.company}</p>
                      <p className="text-gray-500 text-[16px] leading-[1em] md:text-md">
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
    </section>
  );
};

export default About;
