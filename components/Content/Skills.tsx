import { FC } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { skills } from "@/constants/index";
import Skill from "./Skill";

const Skills: FC = () => {
  return (
    <>
      <h3 className="text-2xl text-lightGreen text-center my-4">Skills</h3>
      <ScrollMenu>
        {skills.map(({ icon, name }) => (
          <Skill key={name} name={name} icon={icon} />
        ))}
      </ScrollMenu>
    </>
  );
};

export default Skills;
