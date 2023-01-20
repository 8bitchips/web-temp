import React from "react";
import { motion } from "framer-motion";

export const PrizeCardWithTextOnly = ({ text }) => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.div
      variants={item}
      key={text}
      className={`flex w-full justify-center max-w-sm md:max-w-lg items-center rounded py-4 px-2 bg-blue-500`}
    >
      <p className="text-white font-semibold text-md text-center">{text}</p>
    </motion.div>
  );
};
