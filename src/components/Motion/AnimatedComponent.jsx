import React from "react";
import { motion } from "framer-motion";

const AnimatedComponent = ({
  children,
  animationType = "slideLeft",
  duration = 0.4,
  className = "",
  style = {},
}) => {
  const animations = {
    slideLeft: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0 },
    },
    slideBottom: {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 },
    },
  };

  return (
    <motion.div
      className={className}
      style={style}
      initial={"hidden"}
      viewport={{ once: true }}
      whileInView={"visible"}
      variants={animations[animationType]}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
