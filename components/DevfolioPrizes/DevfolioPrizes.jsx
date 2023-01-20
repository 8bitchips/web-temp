import React from "react";
import { motion } from "framer-motion";
import { DevfolioPrizeCard } from "./DevfolioPrizeCard";

export const DevfolioPrizes = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };
  return (
    <div className="flex items-center flex-col" id="special-prizes">
      <h1 className="text-center text-glow text-5xl md:text-6xl font-semibold text-white pb-14">
        special prizes
      </h1>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{ once: true, amount: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-6 max-w-6xl mx-4 my-8"
      >
        <DevfolioPrizeCard
          borderColor={"border-[#ffffff]"}
          img={"/sponsors/polygon.png"}
        >
          <li>$150 for the best hack built on Ethereum, or</li>
          <li>$200 for the best hack built on Ethereum + Polygon,</li>
          <li>
            Eligibility to apply for internship/full-time roles and seed funding
            of up to 5,000 USD for winners!
          </li>
        </DevfolioPrizeCard>
        <DevfolioPrizeCard
          borderColor={"border-[#ffffff]"}
          img={"/sponsors/solana.png"}
        >
          <li>
            <strong>young gun</strong> - $USDC 100 for the best project
            beginners just starting out on Solana and/or
          </li>
          <li>
            <strong>rising teknoking</strong>- $USDC 250 for the best project
            that goes into depth, demonstrating higher-order code
          </li>
          <li>
            <strong>master glasseater</strong>- $USDC 500 for the best advanced
            project that is almost ready for full-time development.
          </li>
        </DevfolioPrizeCard>
        <DevfolioPrizeCard
          borderColor={"border-[#ffffff]"}
          img={"/sponsors/filecoin.png"}
        >
          <li>$250 for best use of IPFS and/or Filecoin</li>
          <li>
            Microgrants up to 5000 USD, open grants up to 50,000 USD. Learn more{" "}
            <a
              className="underline"
              href="https://github.com/filecoin-project/devgrants/blob/master/README.md"
            >
              here
            </a>
          </li>
        </DevfolioPrizeCard>
        <DevfolioPrizeCard
          borderColor={"border-[#ffffff]"}
          img={"/sponsors/replit.png"}
        >
          <li>
            $50 to winning project of the hackathon (must be deployed on Replit)
          </li>
          <li>Replit schwags to 5 eligible submissions deployed on Replit.</li>
          <li>Eligibility to apply for internship/full-time roles at Replit</li>
        </DevfolioPrizeCard>
      </motion.div>
    </div>
  );
};
