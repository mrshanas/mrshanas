import { StaticImageData } from "next/image";
import js from "@/assets/icons/js.svg";
import ts from "@/assets/icons/ts.svg";
import node from "@/assets/icons/node.svg";
import react from "@/assets/icons/react.svg";
import rn from "@/assets/icons/rn.svg";
import docker from "@/assets/icons/docker.svg";
import exp from "@/assets/icons/express.svg";
import redux from "@/assets/icons/redux.svg";
import mongo from "@/assets/icons/mongo.svg";
import ps from "@/assets/icons/postgres.svg";
import git from "@/assets/icons/git.svg";
import jest from "@/assets/icons/jest.svg";

interface skills {
  key: number;
  // url:string;
  desc: string;
  img: StaticImageData;
}
export const skills: skills[] = [
  {
    key: 1,
    desc: "JavaScript",
    img: js,
  },
  // {
  //   key: 2,
  //   desc: "Python",
  //   img:
  // },
  {
    key: 3,
    desc: "TypeScript",
    img: ts,
  },
  {
    key: 4,
    desc: "React",
    img: react,
  },
  {
    key: 5,
    desc: "Redux",
    img: redux,
  },
  // {
  //   key: 6,
  //   desc: "Sass",
  //   img
  // },
  // {
  //   key: 9,
  //   desc: "Django",
  //   img
  // },
  // {
  //   key: 10,
  //   desc: "NodeJS",
  //   img: node,
  // },
  {
    key: 11,
    desc: "MongoDB",
    img: mongo,
  },
  {
    key: 12,
    desc: "PostgreSQL",
    img: ps,
  },
  {
    key: 13,
    desc: "Git",
    img: git,
  },
  {
    key: 14,
    desc: "React Native",
    img: rn,
  },
  {
    key: 15,
    desc: "Docker",
    img: docker,
  },
  {
    key: 16,
    desc: "Jest",
    img: jest,
  },
  {
    key: 17,
    desc: "ExpressJs",
    img: exp,
  },
];
