import { FC } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <div className="flex flex-col my-10 space-y-6">
      <div className="flex justify-around md:w-[50%] w-[95%] mx-auto">
        <a
          href="mailto:nassibshaban345@gmail.com"
          className="md:w-8 md:h-8 scale-150"
        >
          <SiGmail />
        </a>
        <a href="https://github.com/mrshanas" className="scale-150">
          <AiOutlineGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/shabani-nassibu-9335b2219/"
          className="scale-150"
        >
          <FaLinkedin />
        </a>
        <a href="https://t.me/mrshanas" className="scale-150">
          <BsTelegram />
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly mx-auto w-[98%] md:w-[90%] md:justify-between space-y-4 md:space-y-0">
        <a
          href="https://buymeacoffee.com"
          className="dark:text-white text-center w-3/4 md:w-1/4 mx-auto text-black font-bold text-xl md:text-[1rem] hover:bg-purple hover:text-white hover:dark:bg-lightGreen hover:dark:text-black dark:border-lightGreen border-purple border rounded-md p-2"
          target="_blank"
          rel="noreferrer"
        >
          Buy Me a coffee ☕
        </a>
        <a
          href="tel:+255788277549"
          className="dark:text-white text-center w-3/4 md:w-1/4 mx-auto text-black font-bold text-xl md:text-[1rem] hover:bg-purple hover:text-white hover:dark:bg-lightGreen hover:dark:text-black dark:border-lightGreen border-purple  border rounded-md p-2"
        >
          Lets have a call! 🤙🏻
        </a>
      </div>
      <div className="md:w-[50%] w-[95%] mx-auto">
        <p className="text-center dark:text-white text-black font-semibold">
          Made by mrshanas &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
