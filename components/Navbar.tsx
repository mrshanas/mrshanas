import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { navLinks } from "@/constants/nav";
import "hamburgers/dist/hamburgers.css";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-around mx-auto my-5">
      <div className="md:hidden block my-[-0.8rem]">
        <button className="hamburger hamburger--collapse" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner text-white"></span>
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
        <div className="mx-3 text-2xl">
          <FaGithub className="text-white" />
        </div>
        <div className="mx-3 text-2xl">
          <FaLinkedin className="text-white" />
        </div>
        <div className="mx-3 text-2xl">
          <FaTwitter className="text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
