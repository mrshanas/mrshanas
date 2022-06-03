import { StaticImageData } from "next/image";
import pic1 from "public/assets/images/altumcode-zE007SNgcdE-unsplash.jpg";
import pic2 from "public/assets/images/lukas-blazek-mcSDtbWXUZU-unsplash.jpg";
import pic3 from "public/assets/images/radowan-nakif-rehan-cYyqhdbJ9TI-unsplash.jpg";

interface works {
  heading: string;
  url: string;
  image: StaticImageData;
  description: string;
  dir: string;
}

export const works: works[] = [
  {
    heading: "Smartshop",
    url: "https://pos-smartshop.herokuapp.com",
    description:
      "This is an online point of sale app(POS) that enables a shop owner to manage his/her business from anywhere",
    image: pic1,
    dir: "flex-row",
  },
  {
    heading: "Nasmart",
    url: "https://nasmart.mrshanas.com",
    description:
      "This is my personal e-commerce project for electronic devices and smartphones",
    image: pic2,
    dir: "flex-row-reverse",
  },
  {
    heading: "POS",
    url: "https://pos.mrshanas.com",
    description:
      "This is a featured project collaborated with my teammate @echichibs, It is an online point of sale app",
    image: pic3,
    dir: "flex-row",
  },
];
