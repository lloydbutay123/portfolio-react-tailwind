import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';
import ServicesList from '../Helper/services';
import Skills from '../Helper/skills';

const Service = () => {
  const { scrollY } = useScroll();

  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  // Define slide variants for bottom-to-top animation
  const slideTBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className='flex flex-col items-center p-[24px] overflow-x-hidden dark:bg-black' id='services'>
        <div className='lg:px-[96px] lg:py-[136px] xl:px-[136px] py-[96px] xl:pr-[288px]'>
            <motion.div className='w-full flex justify-end'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideRight}
            transition={{ duration: 0.6 }}
            >
                <p className='uppercase text-[18px] font-medium dark:text-white'>(Services)</p>
            </motion.div>
        {ServicesList.map((items, index) => (
        <motion.div 
          key={index}
          initial="hidden"
          whileInView="visible"
          variants={ slideTBottom }    
          viewport={{ once: true, amount: 0.5 }} // Animate only once when 50% is in view
          transition={{ duration: 0.6 }}
          className="w-full h-screen flex flex-col gap-[96px] md:flex-row items-center lg:justify-between md:space-x-8 lg:py-[136px] py-[96px]"
        >
          {/* Rotating Box */}
          <div className='w-full md:w-2/12 flex items-start'>
            <div className="relative size-12 lg:size-36 flex items-center justify-center">
                <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                className="absolute inset-0 lg:size-40 bg-[#FF3C00]"
                />
                    <span className="absolute text-white text-[48px] lg:text-[240px] flex items-center">
                    {index + 1}
                    </span>
                </div>
            </div>
          {/* Text Section */}
          <div className='w-full xl:w-6/12 h-auto'>
            <motion.div
                className="text-black text-center md:text-left"
                transition={{ duration: 0.8 }}
            >
                <div className='flex flex-col gap-[24px] text-start font-medium '>
                <div className='text-[36px] font-bold dark:text-gray-500'>{items.title}</div>
                <div className='text-[24px] md:text-[24px] leading-[1em] dark:text-white'>{items.text}</div>
                </div>
            </motion.div>
            </div>
        </motion.div>
      ))}

        <div className="w-full">
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
                    <div className="grid w-5/6 grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-5">
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
                            transition={{ duration: 0.6 }}
                        >
                            {item.icon}
                        </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Service;