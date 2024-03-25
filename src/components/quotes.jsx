import React, { useEffect } from "react";
import { useState } from "react";

const quotes = () => {
    const [quote, setQuote] = useState("");

  return (
    <section className="quote" id="quote">
      <h1 className="text-[20px]">{quote}</h1>
    </section>
  );
};

export default quotes;
