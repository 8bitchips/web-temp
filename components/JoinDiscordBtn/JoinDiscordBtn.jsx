import Image from "next/image";
import React from "react";
import DiscordBlue from "../../public/social-media/discord-blue.svg";

export const JoinDiscordBtn = () => {
  return (
    <a href="https://discord.com/invite/">
      <div className="w-[312px] h-[44px] flex justify-center items-center gap-2 text-[20px] font-semibold bg-white text-[#3770ff] rounded-[4px]">
        <Image src={DiscordBlue} width={28} height={28} alt="discord-logo" />
        <p>Join our Discord</p>
      </div>
    </a>
    
  );
};

