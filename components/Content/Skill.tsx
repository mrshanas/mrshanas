import { FC } from "react";
import Image from "next/image";

interface Props {
  icon: string;
  name: string;
}

const Skill: FC<Props> = ({ icon, name }) => {
  return (
    <div className="card w-full mx-3 shadow-xl">
      <figure>
        <img src={icon} alt={name} width={100} height={100} />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
      </div>
    </div>
  );
};

export default Skill;
