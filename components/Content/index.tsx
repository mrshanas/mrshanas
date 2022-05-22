import { FC } from "react";
import Image from "next/image";
import TypeWriter from "typewriter-effect";
import avatar from "public/assets/images/kindpng_3705045.png";

const Hero: FC = () => (
  <div className="flex flex-col md:flex-row mx-auto my-8">
    <div className="flex flex-col md:basis-1/2 w-full basis-full my-auto">
      <div className="w-full text-center my-3">
        <h3 className="text-white text-3xl md:text-6xl text-center font-bold">
          Ola! I&apos;m Shanas
        </h3>
      </div>

      <div className="text-lightGreen text-2xl md:text-7xl text-center font-bold leading-[108px] tracking-[0.055rem] border-solid border-lightGreen overflow-hidden">
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
      </div>
    </div>
    {/*Image section*/}
    <div className="md:basis-1/2 w-full basis-full">
      <div className="mx-auto w-full text-center">
        <Image
          src={avatar}
          alt="mrshanas photo"
          className="rounded-full mx-auto"
          width={300}
          height={300}
        />
      </div>
    </div>
  </div>
);

export default Hero;
