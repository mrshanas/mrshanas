import { FC } from "react";
import { BiRightArrow } from "react-icons/bi";

type Props = {
  companyName: string;
  companyLink: string;
  startDate: string;
  endDate: string;
  title: string;
  exp: string[];
};

const ExperienceCard: FC<Props> = ({
  companyName,
  companyLink,
  endDate,
  startDate,
  title,
  exp,
}: Props) => {
  return (
    <div className="flex flex-col space-y-3 flex-1 border-purple dark:border-lightGreen border w-full rounded-md min-h-[16rem] mx-auto p-2">
      <div className="text-center">
        <h3 className="dark:text-lightGreen text-purple font-extrabold hover:underline">
          <a href={companyLink} target="_blank" rel="noreferrer">
            {companyName}
          </a>
        </h3>
        <h5 className="font-semibold">{title}</h5>
        <small>
          {startDate} - {endDate}
        </small>
      </div>
      <div className="flex flex-col gap-y-3">
        {exp.map((item) => (
          <div key={item} className="w-[90%] flex space-x-3">
            <BiRightArrow className="text-purple dark:text-lightGreen text-[0.8rem] flex-[10%]" />
            <p className="text-[0.9rem] flex-[90%] font-semibold">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
