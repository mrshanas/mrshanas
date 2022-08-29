import { StaticImageData } from "next/image";

import smartshop from "@/assets/images/smartshop.png";
import topics from "@/assets/images/topics.png";
interface projects {
  name: string;
  tags: string[];
  desc: string;
  link: string;
  img: StaticImageData;
}

export const projects: projects[] = [
  {
    name: "Smartshop",
    tags: ["Django", "Postgres", "Js"],
    desc: "This is an application that allows small scale shop owners to manage their shops by recording transactions, generating receipts and register new items in a shop",
    link: "https://smartshop.up.railway.app",
    img: smartshop,
  },
  {
    name: "Topics Tracker",
    tags: ["Django", "Bootstrap", "Heroku"],
    desc: "A to-do like app that enables you to register specific topics learnt in a lecture, I made this project when I was learning Django web framework",
    link: "https://github.com/mrshanas/topics-tracker",
    img: topics,
  },
];
