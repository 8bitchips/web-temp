import React from "react";
import { motion } from "framer-motion";

export const TimelineCard = ({ heading, timing, dotColor }) => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.li variants={item} key={heading} className="mb-10 ml-6">
      <span
        className={`flex absolute -left-3 justify-center items-center w-6 h-6 ${dotColor} rounded-full ring-8 ring-blue-50/10`}
      ></span>
      <div className="max-w-[20ch] sm:max-w-full">
        <time className="block mb-2 tracking-wide font-medium text-lg text-gray-400">
          {timing}
        </time>
      </div>
      <h3 className="mb-1 max-w-[20ch] text-lg tracking-wide font-medium text-gray-100">
        {heading}
      </h3>
    </motion.li>
  );
};
