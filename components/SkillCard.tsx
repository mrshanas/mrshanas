import Image, { StaticImageData } from "next/image";
import { FC } from "react";

type Props = {
  img: StaticImageData;
  desc: string;
};

const SkillCard: FC<Props> = (props: Props) => {
  return (
    <div className="relative w-24 h-24 flex flex-col">
      <Image src={props.img} alt={props.desc} layout="fixed" className="" />
      <p className="dark:text-white text-black font-semibold text-center">
        {props.desc}
      </p>
    </div>
  );
};

export default SkillCard;
