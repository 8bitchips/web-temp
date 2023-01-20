import Image from "next/image";
import React from "react";
import Medal from "../../public/images/trophy-gold.png";

import { motion } from "framer-motion";
export const PrizeCard = ({ bgColor, heading, amount, img }) => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.div
      variants={item}
      key={heading}
      className={`flex w-full gap-4 justify-between max-w-sm md:max-w-lg items-center rounded px-4 ${bgColor}`}
    >
      <div className="max-w-[5rem]">
        <Image
          src={img}
          width={Medal.width}
          height={Medal.height}
          alt="trophy-img"
          className="rotate-12"
        />
      </div>
      <h3 className="text-xl text-black font-bold">{heading}</h3>
      <div>
        <p className="text-black font-bold text-4xl">₹{amount}</p>
      </div>
    </motion.div>
  );
};
