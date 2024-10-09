import { motion, useScroll } from 'framer-motion';
import React from 'react';
import ServicesList from '../Helper/services';
import Skills from '../Helper/skills';
import AnimatedComponent from "./Motion/AnimatedComponent";
import RotatingComponent from "./Motion/RotatingComponent";

const Service = () => {

  return (
    <section className='flex flex-col items-center p-[24px] overflow-x-hidden dark:bg-black' id='services'>
        <div className='lg:px-[96px] lg:py-[136px] xl:px-[136px] py-[96px] xl:pr-[288px]'>
            <AnimatedComponent className='w-full flex justify-end'
            animationType='slideRight'
            >
                <p className='uppercase text-[18px] font-medium dark:text-white'>(Services)</p>
            </AnimatedComponent>
        {ServicesList.map((items, index) => (
        <AnimatedComponent
          key={index}
          animationType='slideBottom'
          className="w-full lg:h-screen flex flex-col gap-[96px] md:flex-row items-center lg:justify-between md:space-x-8 lg:py-[136px] py-[96px]"
        >
          {/* Rotating Box */}
          <div className='w-full md:w-2/12 flex items-start'>
            <div className="relative size-12 lg:size-36 flex items-center justify-center">
                <RotatingComponent
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
                <div className='text-[24px] md:text-[36px] font-bold dark:text-gray-500'>{items.title}</div>
                <div className='text-[18px] md:text-[24px] leading-[1em] dark:text-white'>{items.text}</div>
                </div>
            </motion.div>
            </div>
        </AnimatedComponent>
      ))}

        <div className="w-full">
            <AnimatedComponent
                className="mb-10"
                animationType='slideLeft'
                >
                <h1 className="dark:text-white text-5xl md:text-8xl leading-none font-bold break-normal">
                    Technologies <span className="block text-gray-500">& Tools</span>
                </h1>
                </AnimatedComponent>

                <div className="flex justify-center">
                    <div className="grid w-5/6 grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-5">
                        {Skills.map((item, index) => (
                          <AnimatedComponent key={index} animationType='slideRight'> 
                            <a
                              className="dark:text-white w-full flex justify-center text-5xl"
                              href={item.link}
                              target="_blank"
                              aria-label={item.name}
                              >
                              {item.icon}
                            </a>
                          </AnimatedComponent>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Service;
