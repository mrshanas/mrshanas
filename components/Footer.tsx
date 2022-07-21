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
        <a href="mailto:nassibshaban345@gmail.com" className="md:w-8 md:h-8">
          <SiGmail />
        </a>
        <a href="https://github.com/mrshanas">
          <AiOutlineGithub />
        </a>
        <a href="https://www.linkedin.com/in/shabani-nassibu-9335b2219/">
          <FaLinkedin />
        </a>
        <a href="https://t.me/mrshanas">
          <BsTelegram />
        </a>
      </div>
      <div className="flex justify-evenly mx-auto w-[95%] md:w-[50%] md:justify-around">
        <Link href="/projects">
          <a className="dark:text-white text-black font-bold text-xl md:text-[1rem]">
            Projects
          </a>
        </Link>{" "}
        <Link href="/contact">
          <a className="dark:text-white text-black font-bold text-xl md:text-[1rem]">
            Contact
          </a>
        </Link>
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
