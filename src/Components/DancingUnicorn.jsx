// DancingUnicorn.js
import React from "react";
import { motion } from "framer-motion";

const unicornVariants = {
  dance: {
    rotate: [5, -5, -5, 5],
    y: [5, -5, 5, -5],
    transition: {
      rotate: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 1,
      },
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "easeInOut",
      },
    },
  },
};

const DancingUnicorn = ({ heading }) => {
  return (
    <motion.div
      className="flex justify-start items-center w-full h-20"
      variants={unicornVariants}
      animate="dance"
    >
      <span
        role="img"
        aria-label="unicorn"
        className="text-4xl font-extrabold text-slate-200"
      >
        {heading}
      </span>
    </motion.div>
  );
};

export default DancingUnicorn;
