import { StaticImageData } from "next/image";
import pic1 from "public/assets/images/altumcode-zE007SNgcdE-unsplash.jpg";
import pic2 from "public/assets/images/lukas-blazek-mcSDtbWXUZU-unsplash.jpg";
import pic3 from "public/assets/images/radowan-nakif-rehan-cYyqhdbJ9TI-unsplash.jpg";

interface nav {
  url: string;
  to: string;
}

export const navLinks: nav[] = [
  {
    url: "Expriences",
    to: "/experiences",
  },
  {
    url: "Projects",
    to: "/projects",
  },
  {
    url: "About Me",
    to: "/about",
  },
];

interface works {
  heading: string;
  url: string;
  description: string;
  dir: string;
  image: StaticImageData;
}

export const works: works[] = [
  {
    heading: "Smartshop",
    url: "https://pos-smartshop.herokuapp.com",
    description:
      "This is an online point of sale app(POS) that enables a shop owner to manage his/her business from anywhere",
    image: pic1,
    dir: "",
  },
  {
    heading: "Nasmart",
    url: "https://nasmart.mrshanas.com",
    description:
      "This is my personal e-commerce project for electronic devices and smartphones",
    image: pic2,

    dir: "order-last",
  },
  {
    heading: "POS",
    url: "https://pos.mrshanas.com",
    description:
      "This is a featured project collaborated with my teammate @echichibs, It is an online point of sale app",
    image: pic3,

    dir: "",
  },
];

interface skills {
  icon: string;
  name: string;
}

export const skills: skills[] = [
  {
    icon: "https://img.icons8.com/fluency/48/undefined/node-js.png",
    name: "Node Js",
  },
  {
    icon: "https://img.icons8.com/color/48/undefined/django.png",
    name: "Django",
  },
  {
    icon: "https://img.icons8.com/fluency/48/undefined/python.png",
    name: "Python",
  },
  {
    icon: "https://img.icons8.com/color/48/undefined/mongodb.png",
    name: "Mongo DB",
  },
  {
    icon: "https://img.icons8.com/color/48/undefined/react-native.png",
    name: "React",
  },
  {
    icon: "https://img.icons8.com/color/48/undefined/typescript.png",
    name: "TypeScript",
  },
  {
    icon: "https://img.icons8.com/color/48/undefined/javascript--v1.png",
    name: "JavaScript",
  },
  {
    icon: "https://img.icons8.com/color/48/undefined/redux.png",
    name: "Redux",
  },
  {
    icon: "https://img.icons8.com/color/48/undefined/flutter.png",
    name: "Flutter",
  },
  {
    icon: "https://img.icons8.com/color/48/undefined/dart.png",
    name: "Dart",
  },
  {
    icon: "https://img.icons8.com/color/48/undefined/react-native.png",
    name: "React Native",
  },
  {
    icon: "https://img.icons8.com/color/48/undefined/sass.png",
    name: "Sass",
  },
];
