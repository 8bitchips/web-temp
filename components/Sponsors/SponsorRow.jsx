/* eslint-disable @next/next/no-img-element */
import React from "react";
export const SponsorRow = ({ imgArr }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-20 flex-wrap">
      {imgArr.map(({ name, url }, index) => (
        <a
          href={url}
          key={index}
          className="max-w-[15rem] hover:scale-110 transition-all delay-100"
        >
          <img
            loading="lazy"
            id={name}
            src={`/sponsors/${name}.png`}
            alt="sponsor-image"
          />
        </a>
      ))}
    </div>
  );
};
