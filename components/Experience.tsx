import { FC } from "react";

import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/utils/exp";

type Props = {};

const Experience: FC = (props: Props) => {
  return (
    <div className="w-[90%] mx-auto grid my-8 gap-x-3 space-y-3 grid-cols-1 md:grid-cols-2 gap-y-5">
      {experiences.map(
        (
          { exp, endDate, startDate, title, companyName, companyLink }: any,
          i: number
        ) => (
          <ExperienceCard
            key={i}
            exp={exp}
            companyLink={companyLink}
            companyName={companyName}
            startDate={startDate}
            endDate={endDate}
            title={title}
          />
        )
      )}
    </div>
  );
};

export default Experience;
