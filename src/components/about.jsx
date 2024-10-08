import React, { useEffect } from "react";
import { motion } from "framer-motion";
import aboutList from "../Helper/about";

const About = () => {
  useEffect(() => {
    document.title = "About | John Lloyd Butay";
  });

  // Define variants for sliding animations (from left to right)
  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  // Define variants for sliding animations (from right to left)
  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };


  return (
    <section className="dark:bg-black about min-h-[100vh] w-full" id="about">
      <div className="md:flex flex-col items-center space-y-[40px] overflow-x-hidden p-0 md:p-[24px] lg:py-[136px] lg:px-[96px] xl:pb-[96px] xl:pt-[136px] xl:px-[136px]"> 
        {/* About Description and Image Section */}
        <div className="md:flex justify-center w-full h-screen gap-[40px] space-y-[40px] md:space-y-0 xl:pt-[136px] xl:px-[136px]">
        <p className="px-[24px] md:px-0">(MEET ME)</p>
          <div className="flex md:h-[700px] justify-end md:w-1/2">
            {aboutList.map((about, index) => (
              <motion.img
                key={index}
                src={about.img}
                className="w-full h-[300px] md:h-full md:rounded-[50px] object-cover object-top"
                alt="About image"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideLeft} // Slide from left to right
                transition={{ duration: 0.6 }}
              />
            ))}
          </div>
          <div className="px-[24px] md:w-1/2">
            {aboutList.map((about, index) => (
              <motion.div
                className="text-3xl text-end md:text-start dark:text-white space-y-[24px] "
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideRight} // Slide from left to right
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-[36px] md:text-[60px] font-bold leading-[1em]">{about.name}</h1>
                <p className="text-[18px] text-[#FF3C00] leading-[1em]">{about.title}</p>
                <p className="text-[20px] md:text-[24px] italic leading-[1em]">"{about.description}"</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="w-full p-[24px] lg:py-[136px] lg:px-[96px] xl:py-[96px] xl:px-[136px]">
          <div className="block md:flex mb-20">
            <motion.div className="w-1/3"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={slideLeft}
            transition={{ duration: 0.6 }}>
              <p className="dark:text-white text-xs uppercase flex items-center">
                /01 <span className="mx-10 text-gray-500">Story</span>
              </p>
            </motion.div>
            <div className="md:w-2/3"
            >
              <motion.h1
                className="dark:text-white text-[24px] font-bold mb-10"
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
                      className="dark:text-white text-[18px] md:text-[24px] leading-[1em]"
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
            <motion.div className="md:w-1/3"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={slideLeft}
            transition={{ duration: 0.6 }}>
              <p className="dark:text-white text-xs uppercase flex items-center">
                /02 <span className="mx-10 text-gray-500">Education</span>
              </p>
            </motion.div>
            <div className="md:w-2/3">
              <motion.h1
                className="dark:text-white text-[24px] font-bold mb-10"
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
                      <h2 className="uppercase font-bold text-[18px] md:text-[24px] leading-[1em]">
                        {c.name}
                      </h2>
                      <p className="text-[16px] md:text-[18px] leading-[1em]">{c.course}</p>
                      <p className="text-gray-500 text-[16px] md:text-[18px] leading-[1em]">
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
            <motion.div className="md:w-1/3"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={slideLeft}
            transition={{ duration: 0.6 }}>
              <p className="dark:text-white text-xs uppercase">
                /03{" "}
                <span className="mx-10 text-gray-500">Work Experience</span>
              </p>
            </motion.div>
            <div className="md:w-2/3">
              <motion.h1
                className="dark:text-white text-[24px] font-bold mb-10"
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
                      <h2 className="uppercase font-bold text-[18px] md:text-[25px] leading-[1em]">
                        {c.name}
                      </h2>
                      <p className="text-[16px] leading-[1em] md:text-[18px]">{c.title}</p>
                      <p className="text-gray-500 text-[16px] leading-[1em] md:text-[18px]">
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
            <motion.div className="md:w-1/3"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={slideLeft}
            transition={{ duration: 0.6 }}>
              <p className="dark:text-white text-xs uppercase">
                /04 <span className="mx-10 text-gray-500">Trainings</span>
              </p>
            </motion.div>
            <div className="md:w-2/3">
              <motion.h1
                className="dark:text-white text-[24px] font-bold mb-10"
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
                      <h2 className="uppercase font-bold text-[18px] leading-[1em] md:text-[24px]">
                        {c.name}
                      </h2>
                      <p className="text-[16px] leading-[1em] md:text-[18px]">{c.company}</p>
                      <p className="text-gray-500 text-[16px] leading-[1em] md:text-[18px]">
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
