import React, { useState } from "react";
import ServicesList from "../Helper/services";
import Skills from "../Helper/skills";
import AnimatedComponent from "./Motion/AnimatedComponent";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Service = () => {
  const [expanded, setExpanded] = useState(null); // Store the index of the expanded accordion

  const handleToggle = (index) => {
    // Toggle accordion based on its index
    setExpanded((prevExpanded) => (prevExpanded === index ? null : index));
  };

  return (
    <section
      className="flex flex-col items-center p-[24px] overflow-x-hidden dark:bg-black"
      id="service"
    >
      <div className="lg:px-[96px] lg:py-[136px] xl:px-[136px] py-[96px] xl:pr-[222px]">
        <AnimatedComponent
          className="w-full flex justify-end"
          animationType="slideRight"
        >
          <p className="uppercase text-[18px] font-medium dark:text-white">
            (Services)
          </p>
        </AnimatedComponent>
        <div className="py-[96px]">
          {ServicesList.map((items, index) => (
            <Accordion
              expanded={expanded === index} // Check if this specific accordion is expanded
              onChange={() => handleToggle(index)} // Pass the index to handleToggle
              sx={{
                border: "none",
                boxShadow: "none",
                borderBottom: "1px solid gray",
                borderRadius: 0,
                "&:before": { display: "none" },
                "& .MuiAccordionSummary-root": {
                  padding: "0",
                },
                "&:last-child": {
                  borderRadius: 0,
                },
              }}
              key={index}
            >
              <AnimatedComponent animationType="slideLeft">
                <AccordionSummary
                  expandIcon={expanded === index ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel1-content"
                  id={`panel${index}-header`}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "20px", lg: "28px" },
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    {items.icon} {items.title}
                  </Typography>
                </AccordionSummary>
              </AnimatedComponent>
              <AccordionDetails
                sx={{
                  paddingX: 0, // Removes all padding from AccordionDetails
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "16px", lg: "20px" },
                    lineHeight: "1em",
                    color: "#6b7280",
                  }}
                >
                  {items.text}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>

        <div className="w-full">
          <AnimatedComponent className="mb-10" animationType="slideLeft">
            <h1 className="dark:text-white text-5xl md:text-8xl leading-none font-bold break-normal">
              Technologies <span className="block text-gray-500">& Tools</span>
            </h1>
          </AnimatedComponent>

          <div className="flex justify-center xl:justify-end">
            <div className="grid w-5/6 grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-5">
              {Skills.map((item, index) => (
                <AnimatedComponent key={index} animationType="slideRight">
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
};

export default Service;
