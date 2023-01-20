import React from "react";

export const Trackcard = ({ headingBg, borderBg, text, para }) => {
  return (
    <div className="flex justify-center">
      <div
        className={`block p-6 rounded-lg ${borderBg} border-y-4 bg-light max-w-lg`}
      >
        <div
          className={`text-white-500  block rounded-full fs-3 ${headingBg} mb-6 p-5 h-10 pl-4 pr-4 w-fit font-bold display-5`}
        >
          #{text}
        </div>
        <p className=" text-white-400 font-Mori text-md mb-3">
          {para}
        </p>
      </div>
    </div>
  );
};
