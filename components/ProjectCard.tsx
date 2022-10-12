import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

import Link from "next/link";
import Button from "./Button";

type Props = {
  name: string;
  tags: string[];
  desc: string;
  githubLink?: string;
  link: string;
  img: StaticImageData;
};

const ProjectCard: FC<Props> = (props: Props) => {
  return (
    <div className="w-full mx-auto border border-purple shadow-lg hover:scale-[1.02] transition-all dark:border-lightGreen rounded-lg p-4">
      <div className="w-full rounded-lg overflow-hidden">
        <Image src={props.img} alt={props.name} />
      </div>
      <div>
        <h3 className="text-center font-semibold text-2xl">{props.name}</h3>
      </div>
      <div className="w-full md:w-[95%] mx-auto flex justify-around overflow-auto gap-x-8 my-6 scrollbar-hide">
        {props.tags.map((tag) => (
          <p
            key={tag}
            className="border border-purple dark:border-lightGreen font-semibold rounded-lg px-2 py-1 md:p-1 w-1/2 text-center"
          >
            {tag}
          </p>
        ))}
      </div>
      <div className="my-6">
        <p className="font-semibold text-xl">{props.desc}</p>
      </div>
      <div className="flex justify-start items-center gap-x-6 my-4 mx-2">
        <a
          href={props.githubLink ? props.githubLink : props.link}
          className="scale-[2]"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub />
        </a>
        <a
          href={props.link}
          className="scale-[2]"
          target="_blank"
          rel="noreferrer"
        >
          <FiExternalLink />
        </a>
      </div>
    </div>
    // <div className="md:w-[80%] w-[95%] mx-auto flex flex-col min-h-[20rem] items-stretch relative ">
    //   <div className="">
    //     <Image
    //       src={props.img}
    //       alt="Project img"
    //       layout="responsive"
    //       className="rounded-t-lg"
    //     />
    //   </div>
    //   <div className="w-full h-full pl-3 rounded-b-lg bg-white dark:bg-lightBlack pt-3 space-y-2 flex flex-col justify-center md:justify-start">
    //     <h3 className="text-black dark:text-white font-bold text-2xl">
    //       {props.name}
    //     </h3>
    //     <div className="flex w-full md:justify-start justify-around space-x-3 items-center">
    //       {props.tags.map((tag) => (
    //         <p
    //           key={tag}
    //           className="text-white rounded-md dark:text-lightBlack w-full bg-purple dark:bg-lightGreen text-center py-1 px-2"
    //         >
    //           {tag}
    //         </p>
    //       ))}
    //     </div>
    //     <p className="bg-white dark:bg-lightBlack dark:text-slate-500 font-bold">
    //       {props.desc}
    //     </p>

    //     <a href={props.link} target="_blank" rel="noreferrer">
    //       <div className="w-[50%] mx-auto md:mx-0 flex justify-center md:justify-start my-3 pb-3 ">
    //         <Button text="View Project" />
    //       </div>
    //     </a>
    //   </div>
    // </div>
  );
};

export default ProjectCard;
