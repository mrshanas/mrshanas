import { FC, useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { navLinks } from "@/constants/index";
import "hamburgers/dist/hamburgers.css";

const Navbar: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => setIsNavOpen((prev) => !prev);

  return (
    <>
      <nav className="flex flex-row-reverse md:flex-row justify-around mx-auto my-5 sticky">
        <div className="md:hidden block my-[-0.8rem]">
          <button
            className={`hamburger hamburger--collapse z-50 ${
              isNavOpen ? "is-active" : ""
            }`}
            type="button"
            onClick={openNav}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="hidden md:block">
          <ul className="flex justify-evenly">
            {navLinks.map(({ url, to }, i) => (
              <li className="mx-3" key={i}>
                <Link href={to}>
                  <a className="text-white mx-1 hover:underline">{url}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* icons tab */}
        <div className="flex justify-evenly">
          <a className="mx-3 text-2xl" href="https://github.com/mrshanas">
            <FaGithub className="text-white" />
          </a>
          <a className="mx-3 text-2xl">
            <FaLinkedin className="text-white" />
          </a>
          <a className="mx-3 text-2xl" href="https://twitter.com/mrshanas">
            <FaTwitter className="text-white" />
          </a>
        </div>
      </nav>

      {/*
        A nav links container to be displayed in small screens
        */}
      <div
        className={`${
          isNavOpen
            ? "opacity-1 md:hidden w-[100vw] h-[100vh] flex z-30 bg-black absolute"
            : "opacity-0 hidden"
        } `}
      >
        <ul className="flex flex-col justify-evenly items-center mx-auto">
          {navLinks.map(({ url, to }, i) => (
            <li className="mx-3" key={i}>
              <Link href={to}>
                <a className="text-white py-8 text-3xl">{url}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
