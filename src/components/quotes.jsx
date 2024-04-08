import React from "react";
import { useState } from "react";
import bgimg from "../assets/background_images/stonelogo.webp";

const quotes = () => {
  let randomQuotes = [];
  const delay = 2 * 60 * 1000;

  async function loadQuotes() {
    const res = await fetch("https://type.fit/api/quotes");
    randomQuotes = await res.json();
  }
  const [quote, setQuote] = useState({
    text: "Choose a job you love and you will never have to work a day in your life",
    author: "confucius",
  });

  const random = () => {
    const select =
      randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
    setQuote(select);
  };

  setTimeout(random, delay);
  loadQuotes();

  return (
    <section
      className="dark:bg-black relative quote min-h-[100vh] px-[20px] w-full flex justify-center items-center"
      id="quote"
    >
      <div className="md:w-2/3">
        <div className="text-center">
          <h1 className="dark:text-white text-[5vw] md:text-[40px] font-bold mb-5">" {quote.text} "</h1>
          <p className="text-end text-gray-500">{quote.author}</p>
        </div>
      </div>
      <img src={bgimg} className="absolute w-[60vw] md:w-[30%] opacity-30" alt="background image"/>
    </section>
  );
};

export default quotes;
