import { FC } from "react";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import { works } from "@/constants/index";

const Works: FC = () => {
  return (
    <>
      <div className="w-full text-center my-5">
        <h3 className="text-lightGreen text-3xl">Projects</h3>
      </div>
      {works.map(({ image, dir, description, url, heading }, i) => (
        <div
          className="grid grid-cols-1 md:grid-cols-2 justify-around mx-auto my-6 w-[95%]"
          key={i}
        >
          <div className={`basis-1/2 text-center md:${dir}`}>
            <Image src={image} alt="" width={300} height={300} />
          </div>
          <div className="flex flex-col basis-1/2 text-center ">
            <h3 className="text-white text-3xl font-extrabold my-4">
              {heading}
            </h3>
            <p className="text-white text-2xl md:text-4xl font-normal">
              {description}
            </p>
            <a
              href={`${url}`}
              className="text-lightGreen text-3xl flex justify-end p-4"
            >
              <p className="mx-3 text-2xl">View Project</p>
              <FaLongArrowAltRight />
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Works;
