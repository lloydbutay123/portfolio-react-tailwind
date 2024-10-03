import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const Tagline = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Trigger animation as soon as the component mounts
  }, []);

  const slideBottomToTop = {
    hidden: { opacity: 0, y: 100 },  // Start from the bottom
    visible: { opacity: 1, y: 0 },   // Slide into position
  };
  return (
    <motion.div className="absolute bottom-0 left-0 right-0 flex justify-center items-end"
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"} // Controlled animation
        variants={slideBottomToTop}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-[12vw] lg:text-[8vw] xl:text-[6vw] font-[1500] text-[#FF3C00] leading-none uppercase">
          LloydVision®
        </h1>
    </motion.div>
  )
}

export default Tagline
