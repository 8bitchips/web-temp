import React from "react";

import { motion } from "framer-motion";
export const DevfolioPrizeCard = ({ borderColor, img, children }) => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <div className="flex justify-center hover:scale-105 transition-all duration-200">
      <motion.div
        variants={item}
        key={borderColor}
        className={`w-full py-10 max-w-sm md:max-w-lg rounded rounded-bl-none px-4 bg-light border-r-4 border-t-4 ${borderColor}`}
      >
        <div className="max-w-[10rem] mb-6 w-full flex items-start text-white gap-1 font-bold m-auto">
          <img src={img} alt={img} />
        </div>
        <ul className="text-white font-medium list-inside list-disc text-lg">
          {children}
        </ul>
      </motion.div>
    </div>
  );
};
