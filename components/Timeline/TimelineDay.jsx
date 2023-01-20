import React from "react";
import { motion } from "framer-motion";

export const TimelineDay = ({ day, date }) => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.li variants={item} key={day} className="mb-10 ml-6">
      <div className="max-w-[20ch] sm:max-w-full">
        <h3 className="mb-1 text-3xl font-semibold text-white">
          {`Day ${day}: `}
        </h3>
      </div>
      <time className="block mb-2 font-medium text-lg text-gray-400">
        {date}
      </time>
    </motion.li>
  );
};
