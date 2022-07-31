import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import TypeWriter from "typewriter-effect";

import shanas from "../assets/images/shanas.jpg";
import Button from "./Button";

const Hero: FC = () => {
  return (
    <section className="my-5 px-1 py-3">
      <div className="flex flex-col-reverse md:flex-row">
        {/*Text */}
        <div className="basis-1/2 flex ">
          <div className="flex flex-col justify-start text-center md:text-left md:justify-center p-2 md:pl-20 space-y-4">
            <h3 className="text-black font-bold text-2xl dark:text-white">
              <TypeWriter
                options={{
                  strings: [
                    "Backend Developer",
                    "Frontend Developer",
                    "Opensource contributor",
                    "Mobile Developer",
                    "Freelancer",
                  ],
                  loop: true,
                  autoStart: true,
                }}
              />
            </h3>
            <h2
              className="text-purple text-5xl font-extrabold dark:text-lightGreen
            "
            >
              Mr Shanas
            </h2>
            <p className="text-black font-semibold md:text-2xl dark:text-white">
              A passionate Full Stack Software Developer 🚀 having an experience
              of building Web and Mobile applications with JavaScript / Reactjs / Vue.JS /
              / Nodejs / Django / React Native and some other cool libraries and
              frameworks.
            </p>
            <Link href="/contact">
              <div className="md:w-[40%]">
                <Button text="Contact Me" />
              </div>
            </Link>
          </div>
        </div>
        {/*Image */}
        <div className="basis-1/2 flex justify-center items-center">
          <div className="relative h-[15rem] w-[15rem] border-4 md:h-80 md:w-80 rounded-full md:border-8 border-purple dark:border-lightGreen">
            <Image
              src={shanas}
              layout="fill"
              alt="mrshanas photo"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
