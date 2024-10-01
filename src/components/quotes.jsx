import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import Framer Motion
import bgimg from "../assets/background_images/stonelogo.webp";
import { BsDashLg } from "react-icons/bs";

const Quotes = () => {
  const [randomQuotes, setRandomQuotes] = useState([]);
  const [quote, setQuote] = useState({
    text: "Choose a job you love and you will never have to work a day in your life",
    author: "Confucius",
  });

  const delay = 2 * 60 * 1000; // 2 minutes delay

  // Fetch the quotes only once when the component mounts
  useEffect(() => {
    async function loadQuotes() {
      const res = await fetch("https://type.fit/api/quotes");
      const quotesData = await res.json();
      setRandomQuotes(quotesData);
    }
    loadQuotes();
  }, []);

  // Function to select a random quote
  const random = () => {
    if (randomQuotes.length > 0) {
      const select = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
      setQuote(select);
    }
  };

  // Set interval to change the quote every 2 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      random();
    }, delay);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [randomQuotes]);

  // Slide in animation from left to right
  const slideLeftToRight = {
    hidden: { opacity: 0, x: -100 }, // Start from left
    visible: { opacity: 1, x: 0 },   // End at original position
  };

  // Create ref and useInView for the quote section
  const refQuote = useRef(null);
  const inViewQuote = useInView(refQuote, { triggerOnce: true, threshold: 0.2 });

  return (
    <section
      className="dark:bg-black relative quote min-h-[100vh] w-full flex justify-center items-center p-[20px] md:p-[40px]"
      id="quote"
    >
      <div className="md:w-2/3 lg:max-w-[1056px]">
        <motion.div
          ref={refQuote}
          className="text-center"
          initial="hidden"
          whileInView="visible" // Trigger the animation on scroll
          viewport={{ once: true }}
          variants={slideLeftToRight}
          transition={{ duration: 0.6 }} // Animation duration
        >
          <h1 className="dark:text-white text-[5vw] md:text-[40px] font-bold mb-5">
            " {quote.text} "
          </h1>
          <p className="text-end text-gray-500 flex justify-end items-center">
            <BsDashLg /> {quote.author || "Unknown"}
          </p>
        </motion.div>
      </div>

      <img
        src={bgimg}
        className="absolute w-[60vw] md:w-[30%] opacity-30"
        alt="background image"
      />
    </section>
  );
};

export default Quotes;
