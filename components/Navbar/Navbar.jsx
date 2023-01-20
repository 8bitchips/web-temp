/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";
import { NavToggle } from "./NavToggle";
import { Transition } from "@headlessui/react";
import Logo from "../../public/images/logo.png";
import RightArrow from "../../public/images/right-arrow.png";
import { Main } from "next/document";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="pt-10 justify-center md:px-6 flex z-40 flex-col items-between relative">
      <div className="nd:px-10 lg:px-20 flex items-center px-4 justify-between z-20">
        <div className="max-w-[10rem] md:max-w-[15rem]">
          <Image
            width={Logo.width}
            height={Logo.height}
            className="w-full"
            to="https://www.glbitm.org/"
            src={Logo}
            alt="Workflow"
          />
        </div>
        <div className="hidden text-glow md:flex md:flex-row text-white font-medium gap-10 text-xl ">
          <a
            href="#timeline"
            className="border-b border-transparent hover:border-white"
          >
            Timeline
          </a>
          <a href="#special-prizes" className="border-b border-transparent hover:border-white">
            Prizes
          </a>
          <a href="#sponsors" className="border-b border-transparent hover:border-white">
            Sponsors
          </a>
          <a href="#faqs" className="border-b border-transparent hover:border-white">
            FAQs
          </a>
        </div>
        <NavToggle setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-100 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-100 scale-95"
      >
        <div className="md:hidden absolute w-full -top-20 pt-20 pb-4 bg-primaryLight shadow-xl shadow-[#180E50]/20 z-40">
          <div className="flex flex-col text-2xl px-4 font-medium text-glow text-white gap-4 pt-8">
            <a
              href="#timeline"
              className="group hover:text-white flex justify-between items-center border-b-2"
            >
              <div>Timeline</div>
              <Image
                loading="eager"
                width={RightArrow.width}
                height={RightArrow.height}
                className="-translate-x-2 group-hover:translate-x-[2px] transition-all duration-300"
                src={RightArrow}
                alt=""
              />
            </a>
            <a
              href="#special-prizes"
              className="group hover:text-white flex justify-between items-center border-b-2"
            >
              <div>Prizes</div>
              <Image
                loading="eager"
                width={RightArrow.width}
                height={RightArrow.height}
                className="-translate-x-2 group-hover:translate-x-[2px] transition-all duration-300"
                src={RightArrow}
                alt=""
              />
            </a>
            <a
              href="#sponsors"
              className="group hover:text-white flex justify-between items-center border-b-2"
            >
              <div>Sponsors</div>
              <Image
                loading="eager"
                width={RightArrow.width}
                height={RightArrow.height}
                className="-translate-x-2 group-hover:translate-x-[2px] transition-all duration-300"
                src={RightArrow}
                alt=""
              />
            </a>
            <a
              href="#faqs"
              className="group hover:text-white flex justify-between items-center border-b-2"
            >
              <div>FAQs</div>
              <Image
                loading="eager"
                width={RightArrow.width}
                height={RightArrow.height}
                className="-translate-x-2 group-hover:translate-x-[2px] transition-all duration-300"
                src={RightArrow}
                alt=""
              />
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  );
};
