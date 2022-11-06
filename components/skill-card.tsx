type Props = {
  skills: string[];
  title: string;
};

const SkillCard = ({ skills, title }: Props) => {
  return (
    <div className="w-full outline outline-1 outline-appGray">
      <h3 className="pl-3 py-2 w-full text-white outline outline-1 outline-appGray">
        {title}
      </h3>
      <div className="pl-3 py-3 md:py-1 flex flex-wrap gap-x-4 gap-y-2">
        {skills.map((skill) => (
          <small
            key={skill}
            className="hover:text-white transition ease-in-out cursor-pointer"
          >
            {skill}
          </small>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
