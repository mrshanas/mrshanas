import Image from "next/image";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";

import logo from "@assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="w-full border-t border-appGray pt-6">
      <div className="w-[90%] md:w-4/5 mx-auto my-3 flex flex-col md:flex-row gap-y-4 justify-between items-center">
        <div className="flex flex-col justify-center gap-y-6">
          <div className="flex justify-start gap-x-5 items-center">
            <div className="flex items-center">
              <Image src={logo} alt="Logo" className="w-8 h-8" />
              <h5 className="text-sm text-white">Mr Shanas</h5>
            </div>
            <small>mrshanas.com</small>
          </div>
          <div>
            <p>Web developer and mobile developer based in Tanzania</p>
          </div>
        </div>
        <div className="flex justify-center flex-col">
          <h5 className="text-white text-center">Socials</h5>
          <div className="flex flex-grow justify-even gap-x-6 items-center mt-4">
            <a
              href="https://github.com/mrshanas"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub className="w-8 h-8" />
            </a>
            <a
              href="https://instagram.com/mr__shanas"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram className="w-8 h-8" />
            </a>
            <a href="https://upwork.com" target="_blank" rel="noreferrer">
              <SiUpwork className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-[90%] md:w-4/5 mx-auto text-center">
        <small className="opacity-80">
          &copy; Copyright {new Date().getFullYear()}, made by @mrshanas
        </small>
      </div>
    </footer>
  );
};

export default Footer;
