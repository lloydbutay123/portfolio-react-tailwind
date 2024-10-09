import React from 'react'
import { motion } from 'framer-motion';

const RotatingComponent = ({ children, className = '', style = {} }) => {
    return (
      <motion.div
        className={className}
        style={style}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      >
        {children}
      </motion.div>
    );
  };

export default RotatingComponent
