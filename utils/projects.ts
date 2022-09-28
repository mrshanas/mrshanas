import { StaticImageData } from "next/image";

import smartshop from "@/assets/images/smartshop.png";
import topics from "@/assets/images/topics.png";
import consultant from "@/assets/images/screenshot.png";
import team from "@/assets/images/my-team.png";
import page404 from "@/assets/images/404-dev.png";
import nasmart from "@/assets/images/nasmart.png";
import convle from "@/assets/images/screenshot-convle.png";

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
    name: "Nasmart",
    tags: ["React", "NextJS", "Django"],
    desc: "E-commerce web store that sells electronic devices, laptops and computers, gaming consoles that enables a user to add items cart and request a delivery or pickup made with NextJs on the frontend and Django on the backend",
    link: "https://github.com/mrshanas/nasmart",
    img: nasmart,
  },
  {
    name: "ConVLE",
    tags: ["Vue", "Django", "Websockets"],
    desc: "Realtime chatting web app made with VueJs and Vite on the frontend and Django rest and Django channels on the backend",
    link: "https://github.com/mrshanas/convle",
    img: convle,
  },
  {
    name: "Interior Consultant",
    tags: ["Sass", "Responsive"],
    desc: "Devchallenges Responsive web design solution for the Interior Consultant Design",
    link: "https://mrshanas.github.io/devchallenges-consultant",
    img: consultant,
  },
  {
    name: "My Team Page",
    tags: ["Sass", "Responsive", "Flexbox"],
    desc: "Devchallenges Responsive web design solution for the My Team Page Design",
    link: "https://mrshanas.github.io/devchallenges-team",
    img: team,
  },
  {
    name: "404 Page Not Found",
    tags: ["Sass", "Responsive", "CSS"],
    desc: "Devchallenges Responsive web design solution for the 404 Page Not Found Design",
    link: "https://mrshanas.github.io/devchallenges-404",
    img: page404,
  },
  {
    name: "Topics Tracker",
    tags: ["Django", "Bootstrap", "Heroku"],
    desc: "A to-do like app that enables you to register specific topics learnt in a lecture, I made this project when I was learning Django web framework",
    link: "https://github.com/mrshanas/topics-tracker",
    img: topics,
  },
];
