import Image, { StaticImageData } from "next/image";
import React from "react";

import Link from "next/link";
import Button from "./Button";

type Props = {
  name: string;
  tags: string[];
  desc: string;
  link: string;
  img: StaticImageData;
};

const ProjectCard: React.FC<Props> = (props: Props) => {
  return (
    <div className="md:w-[80%] w-[95%] mx-auto flex flex-col min-h-[20rem] items-stretch relative ">
      <div>
        <Image
          src={props.img}
          alt="Project img"
          layout="responsive"
          className="rounded-t-lg"
        />
      </div>
      <div className="w-full h-full pl-3 rounded-b-lg bg-white dark:bg-lightBlack pt-3 space-y-2 flex flex-col justify-center md:justify-start">
        <h3 className="text-black dark:text-white font-bold text-2xl">
          {props.name}
        </h3>
        <div className="flex w-full md:justify-start justify-around space-x-3 items-center">
          {props.tags.map((tag) => (
            <p
              key={tag}
              className="text-white rounded-md dark:text-lightBlack w-full bg-purple dark:bg-lightGreen text-center py-1 px-2"
            >
              {tag}
            </p>
          ))}
        </div>
        <p className="bg-white dark:bg-lightBlack dark:text-slate-500 font-bold">
          {props.desc}
        </p>

        <a href={props.link} target="_blank" rel="noreferrer">
          <div className="w-[50%] mx-auto md:mx-0 flex justify-center md:justify-start my-3 pb-3 ">
            <Button text="View Project" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
