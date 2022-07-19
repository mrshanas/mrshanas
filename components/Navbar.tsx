import Link from "next/link";
import { FC } from "react";
import { useRouter } from "next/router";

const Navbar: FC = () => {
  const { pathname } = useRouter();

  return (
    <nav className="sticky bg-white shadow-md z-50 p-3 w-full">
      <div className="flex mx-auto items-center justify-between w-[80%]">
        <div className="basis-1/3 md:basis-2/3">
          <Link href="/">
            <a className="text-black font-bold">Home</a>
          </Link>
        </div>
        <div className="flex justify-evenly items-center basis-2/3 md:basis-1/3 space-x-3 md:space-x-0">
          <Link href="/projects">
            <a
              className={`text-black font-bold ${
                pathname === "/projects" ? "border-purple border-b-4" : ""
              }`}
            >
              Projects
            </a>
          </Link>
          <Link href="/contact">
            <a className="bg-purple text-white font-extrabold py-2 px-3 rounded-md">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
