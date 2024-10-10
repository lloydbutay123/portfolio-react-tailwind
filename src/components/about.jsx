import React, { useEffect } from "react";
import aboutList from "../Helper/about";
import SocialsLists from "../Helper/socials";
import AnimatedComponent from "./Motion/AnimatedComponent";
import RotatingComponent from "./Motion/RotatingComponent";

const About = () => {
  useEffect(() => {
    document.title = "About | John Lloyd Butay";
  });

  return (
    <section className="dark:bg-black about min-h-[100vh] w-full" id="about">
      <div className="md:flex flex-col overflow-x-hidden lg:p-[24px] lg:py-[136px] lg:px-[96px] xl:pb-[96px] xl:pt-[136px] xl:px-[136px]"> 
        {/* About Description and Image Section */}
        <AnimatedComponent
          animationType="slideLeft">
          <div className="px-[24px] pt-[96px] pb-[24px]"
          >
            <p className="text-black dark:text-white">(MEET ME)</p>
          </div>
          <div className="px-[24px] py-[96px] xl:pb-0">
            {aboutList.map((about, index) => (
              <p className="lg:w-[614px] text-black dark:text-white text-[18px] lg:text-[22px] leading-[1em]" key={index}>{about.mission}</p>
            ))}
            <p className="hidden md:block px-[24px] md:px-0"></p>
          </div>
        </AnimatedComponent>
        <div className="relative lg:flex justify-center w-full h-screen md:h-fit lg:h-screen gap-[40px] space-y-[40px] lg:space-y-0 lg:pb-[136px] lg:pt-[222px] xl:px-[136px]">
          <div className="flex justify-end lg:w-1/2">
            {aboutList.map((about, index) => (
              <AnimatedComponent className="w-full" animationType="slideRight" key={index}>
                <img
                src={about.img}
                className="w-full h-[300px] md:h-[350px] lg:h-full lg:rounded-[50px] object-cover object-center"
                alt="About"
                />
              </AnimatedComponent>
            ))}
          </div>
          <div className="relative p-[24px] lg:p-0 lg:w-1/2">
            <AnimatedComponent animationType="slideLeft" className="absolute left-1/2 md:left-[200px] -top-5 lg:-top-20">
              <RotatingComponent
                className="size-3 bg-[#FF3C00]"
              />
            </AnimatedComponent>
            {aboutList.map((about, index) => (
              <AnimatedComponent
                className="text-3xl text-end lg:text-start dark:text-white space-y-[24px] "
                key={index}  
                animationType="slideRight"
              >
                <h1 className="text-[36px] lg:text-[60px] font-bold leading-[1em]">{about.name}</h1>
                <p className="text-[18px] text-[#FF3C00] leading-[1em]">{about.title}</p>
                <p className="text-[20px] lg:text-[24px] italic leading-[1em]">"{about.description}"</p>
              </AnimatedComponent>
            ))}
            <AnimatedComponent className="hidden absolute md:relative lg:absolute bottom-0 p-[24px] lg:flex w-full justify-between flex-wrap gap-5 space-x-10"
          
            animationType="slideBottom">
              {SocialsLists.map((social, index) => (
                <a key={index} href={ social.link } className="text-black dark:text-white text-[16px] uppercase font-medium">{ social.name }</a>
              ))}
          </AnimatedComponent>
          </div>
          <AnimatedComponent className="lg:hidden absolute md:relative lg:absolute bottom-0 p-[24px] flex w-full justify-between flex-wrap gap-5 md:space-x-36"
        
          animationType="slideBottom"
          >
              {SocialsLists.map((social, index) => (
                <a key={index} href={ social.link } className="text-black dark:text-white text-[16px] uppercase">{ social.name }</a>
              ))}
          </AnimatedComponent>
        </div>

        {/* Story Section */}
        <div className="w-full p-[24px] lg:py-[136px] lg:px-[96px] xl:py-[96px] xl:px-[136px]">
          <div className="block md:flex mb-20">
            <AnimatedComponent className="w-1/3"
          
            animationType="slideLeft">
              <p className="dark:text-white text-xs uppercase flex items-center">
                /01 <span className="mx-10 text-gray-500">Story</span>
              </p>
            </AnimatedComponent>
            <div className="md:w-2/3"
            >
              <AnimatedComponent
            
              animationType="slideLeft">
                <h1
                  className="dark:text-white text-[24px] font-bold mb-10"
                >
                  Persistence and Hardwork
                </h1>
              </AnimatedComponent>
              {aboutList.map((item, index) => (
                <div key={index}>
                  {item.story.map((c, i) => (
                    <AnimatedComponent
                      className="dark:text-white text-[18px] md:text-[24px] leading-[1em]"
                      key={i}
                    
                      animationType="slideRight"
                    >
                      <p className="my-10">{c.text1}</p>
                      <p>{c.text2}</p>
                    </AnimatedComponent>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="block md:flex mb-20">
            <AnimatedComponent className="md:w-1/3"
            animationType="slideLeft">
              <p className="dark:text-white text-xs uppercase flex items-center">
                /02 <span className="mx-10 text-gray-500">Education</span>
              </p>
            </AnimatedComponent>
            <div className="md:w-2/3">
              <AnimatedComponent
              
                animationType="slideLeft">
                <h1
                  className="dark:text-white text-[24px] font-bold mb-10"
                >
                  Academic Milestones
                </h1>
              </AnimatedComponent>
              {aboutList.map((item, index) => (
                <div key={index} className="space-y-10">
                  {item.education.map((c, i) => (
                    <AnimatedComponent
                      className="dark:text-white"
                      key={i}
                    
                      animationType="slideRight"
                    >
                      <h2 className="uppercase font-bold text-[18px] md:text-[24px] leading-[1em]">
                        {c.name}
                      </h2>
                      <p className="text-[16px] md:text-[18px] leading-[1em]">{c.course}</p>
                      <p className="text-gray-500 text-[16px] md:text-[18px] leading-[1em]">
                        {c.year}
                      </p>
                    </AnimatedComponent>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="block md:flex mb-20">
            <AnimatedComponent className="md:w-1/3"
          
            animationType="slideLeft">
              <p className="dark:text-white text-xs uppercase">
                /03{" "}
                <span className="mx-10 text-gray-500">Work Experience</span>
              </p>
            </AnimatedComponent>
            <div className="md:w-2/3">
              <AnimatedComponent
              
                animationType="slideLeft">
                <h1
                  className="dark:text-white text-[24px] font-bold mb-10"
                >
                  Professional Milestones
                </h1>
              </AnimatedComponent>
              {aboutList.map((item, index) => (
                <div key={index} className="space-y-10">
                  {item.experience.map((c, i) => (
                    <AnimatedComponent
                      className="dark:text-white"
                      key={i}
                    
                      animationType="slideRight"
                    >
                      <h2 className="uppercase font-bold text-[18px] md:text-[25px] leading-[1em]">
                        {c.name}
                      </h2>
                      <p className="text-[16px] leading-[1em] md:text-[18px]">{c.title}</p>
                      <p className="text-gray-500 text-[16px] leading-[1em] md:text-[18px]">
                        {c.year}
                      </p>
                    </AnimatedComponent>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Trainings Section */}
          <div className="block md:flex mb-20">
            <AnimatedComponent className="md:w-1/3"
            animationType="slideLeft">
              <p className="dark:text-white text-xs uppercase">
                /04 <span className="mx-10 text-gray-500">Trainings</span>
              </p>
            </AnimatedComponent>
            <div className="md:w-2/3">
              <AnimatedComponent
              
               animationType="slideLeft">
                <h1
                  className="dark:text-white text-[24px] font-bold mb-10"
                >
                  Trainings and Certificates
                </h1>
              </AnimatedComponent>
              {aboutList.map((item, index) => (
                <div key={index} className="space-y-10">
                  {item.trainings.map((c, i) => (
                    <AnimatedComponent
                      className="dark:text-white"
                      key={i}
                    
                      animationType="slideRight"
                    >
                      <h2 className="uppercase font-bold text-[18px] leading-[1em] md:text-[24px]">
                        {c.name}
                      </h2>
                      <p className="text-[16px] leading-[1em] md:text-[18px]">{c.company}</p>
                      <p className="text-gray-500 text-[16px] leading-[1em] md:text-[18px]">
                        {c.issuedOn}
                      </p>
                    </AnimatedComponent>
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
