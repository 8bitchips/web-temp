/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import Logo from "../../public/images/logo.png";
import Twitter from "../../public/social-media/twitter.svg";
import Instagram from "../../public/social-media/instagram.svg";
import Discord from "../../public/social-media/discord.svg";
import Email from "../../public/social-media/email.png";
import GDSCLogo from "../../public/images/gdsc-logo.svg";

export const Footer = () => {
  return (
    <div className="bg-dark p-4 md:p-10 pt-14">
      <div className="flex justify-end flex-col font-medium text-white text-lg md:text-xl">
        <div className="max-w-[15rem]">
          <Image
            height={Logo.height}
            width={Logo.width}
            src={Logo}
            loading="lazy"
            alt="logo"
          />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm">powered by</span>
          <div className="flex items-center gap-1">
            
            <p>Shrinik Club | GLBITM</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-400 my-4"></div>
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="text-white font-medium">
          &copy; 2023 Shrinik Club. All Rights Reserved.
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href="https://twitter.com/shrinik_glbajaj"
            target="_blank"
            rel="noreferrer"
            className="flex items-center w-fit rounded-full p-2 border-2 border-white"
          >
            <Image
              src={Twitter}
              loading={"lazy"}
              width={20}
              height={20}
              alt="twitter-logo"
            />
          </a>
          <a
            href="https://instagram.com/shrinik_glbajaj"
            target="_blank"
            rel="noreferrer"
            className="flex items-center w-fit rounded-full p-2 border-2 border-white"
          >
            <Image
              src={Instagram}
              width={20}
              loading={"lazy"}
              height={20}
              alt="instagram-logo"
            />
          </a>
          <a
            href="https://discord.com/invite/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center w-fit rounded-full p-2 border-2 border-white"
          >
            <Image
              src={Discord}
              loading={"lazy"}
              width={20}
              height={20}
              alt="discord-logo"
            />
          </a>
          <a
            href="mailto:shrinikclub@glbitm.ac.in"
            target="_blank"
            rel="noreferrer"
            className="flex items-center w-fit rounded-full p-2 border-2 border-white"
          >
            <Image
              src={Email}
              loading={"lazy"}
              width={20}
              height={20}
              alt="email-logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
