import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

interface Props {
  // dir: string;
  image: StaticImageData;
  description: string;
  url: string;
}
const Works: FC<Props> = ({ image, description, url }) => (
  <div className="flex flex-col md:flex-row justify-around mx-auto my-6">
    <div className="basis-1/2 text-center">
      <Image src={image} alt="" width={300} height={300} />
    </div>
    <div className="flex flex-col basis-1/2 text-center">
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
);

export default Works;
