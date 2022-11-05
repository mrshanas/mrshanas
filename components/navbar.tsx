"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { useState } from "react";

import logo from "@assets/images/logo.png";
import { HashTag } from ".";

type Props = {};

const Navbar: FC = (props: Props) => {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () =>
    setTimeout(() => setIsNavOpen((prev) => !prev), 150);

  return (
    <>
      <nav className="w-full sticky md:relative top-0 bg-background md:bg-none z-10 text-appGray">
        <div className="flex items-center justify-between w-[90%] md:w-4/5 mx-auto">
          <div className="relative h-8 w-8">
            <Link href="/">
              <Image src={logo} alt="Logo" fill />
            </Link>
          </div>

          <div className="w-3/5">
            <div className="flex justify-end transition ease-in-out duration-500">
              {isNavOpen ? (
                <AiOutlineClose
                  className="md:hidden w-6 h-6 text-appGray transition ease-out"
                  onClick={toggleNavbar}
                />
              ) : (
                <AiOutlineMenu
                  className="md:hidden w-6 h-6 transition text-appGray ease-out"
                  onClick={toggleNavbar}
                />
              )}
            </div>

            <ul className="hidden md:flex items-center justify-around">
              <li>
                <Link
                  href="/works"
                  className={`${pathname === "/works" ? "text-white" : ""}`}
                >
                  <HashTag />
                  works
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`${pathname === "/about" ? "text-white" : ""}`}
                >
                  <HashTag />
                  about-me
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className={`${pathname === "/contacts" ? "text-white" : ""}`}
                >
                  <HashTag />
                  contact
                </Link>
              </li>
              <li>
                <a
                  href="https://dev.to/mrshanas"
                  target="_blank"
                  rel="noreferrer"
                >
                  <HashTag />
                  blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isNavOpen && <MobileNav />}
    </>
  );
};

export default Navbar;

const MobileNav: FC = () => {
  const pathname = usePathname();
  return (
    <div className="w-full h-screen flex flex-col absolute z-20 top-8 bg-background inset-0">
      <ul className="md:hidden flex mt-3 flex-col flex-grow text-appGray gap-y-6 ml-2">
        <li className="text-xl">
          <Link
            href="/works"
            className={`${pathname === "/works" ? "text-white" : ""}`}
          >
            <HashTag />
            works
          </Link>
        </li>
        <li className="text-xl">
          <Link
            href="/about"
            className={`${pathname === "/about" ? "text-white" : ""}`}
          >
            <HashTag />
            about-me
          </Link>
        </li>
        <li className="text-xl">
          <Link
            href="/contacts"
            className={`${pathname === "/contacts" ? "text-white" : ""}`}
          >
            <HashTag />
            contact
          </Link>
        </li>
        <li className="text-xl">
          <a href="https://dev.to/mrshanas" target="_blank" rel="noreferrer">
            <HashTag />
            blog
          </a>
        </li>
      </ul>

      <div className="flex w-4/5 mx-auto mb-3 items-center justify-center gap-x-2">
        <a href="https://github.com/mrshanas" target="_blank" rel="noreferrer">
          <AiOutlineGithub className="h-10 w-10 text-appGray" />
        </a>

        <a href="https://twitter.com/mrshanas" target="_blank" rel="noreferrer">
          <AiOutlineTwitter className="h-10 w-10 text-appGray" />
        </a>

        <a href="https://dev.to/mrshanas" target="_blank" rel="noreferrer">
          <AiOutlineMail className="h-10 w-10 text-appGray" />
        </a>
      </div>
    </div>
  );
};
