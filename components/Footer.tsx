import { FC } from "react";
import github from "@/assets/icons/github.svg";
import ln from "@/assets/icons/ln.svg";
import gmail from "@/assets/icons/gmail.svg";
import Image from "next/image";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <div className="flex flex-col my-10 space-y-6">
      <div className="flex justify-around md:w-[50%] w-[95%] mx-auto">
        <a href="mailto:nassibshaban345@gmail.com" className="md:w-8 md:h-8">
          <Image src={gmail} alt="Gmail icon" layout="fixed" />
        </a>
        <a href="https://github.com/mrshanas">
          <Image src={github} alt="Github icon" layout="fixed" />
        </a>
        <a href="https://www.linkedin.com/in/shabani-nassibu-9335b2219/">
          <Image src={ln} alt="LinkedIn icon" layout="fixed" />
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
