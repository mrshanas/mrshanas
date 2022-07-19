import Link from "next/link";
import { FC } from "react";
import { useRouter } from "next/router";
import ThemeToggler from "./ThemeToggler";

const Navbar: FC = () => {
  const { pathname } = useRouter();

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50 p-3 w-full dark:bg-darkBlue dark:shadow-lg">
      <div className="flex md:mx-auto items-center space-x-2 md:justify-between w-full md:w-[80%]">
        <div className="basis-1/4 md:basis-2/3">
          <Link href="/">
            <a className="text-black font-bold dark:text-white">Home</a>
          </Link>
        </div>
        <div className="flex justify-end md:justify-evenly items-center basis-3/4 md:basis-1/3 space-x-3 md:space-x-0">
          <Link href="/projects">
            <a
              className={`text-black font-bold ${
                pathname === "/projects"
                  ? "border-purple dark:border-lightGreen border-b-4"
                  : ""
              } dark:text-white`}
            >
              Projects
            </a>
          </Link>
          <Link href="/contact">
            <a className="bg-purple dark:bg-lightGreen dark:text-black text-white font-extrabold py-2 px-3 rounded-md">
              Contact
            </a>
          </Link>
          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
