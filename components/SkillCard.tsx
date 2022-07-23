import Image, { StaticImageData } from "next/image";
import { FC } from "react";

type Props = {
  img: StaticImageData;
  desc: string;
};

const SkillCard: FC<Props> = (props: Props) => {
  return (
    <div className="relative w-24 h-24 flex flex-col">
      <Image
        src={props.img}
        alt={props.desc}
        layout="fixed"
        className="top-0 bottom-0 left-0 right-0"
      />
      <p className="dark:text-white text-black font-semibold text-center top-[50%]">
        {props.desc}
      </p>
    </div>
  );
};

export default SkillCard;
