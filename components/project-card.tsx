import Image from "next/image";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

type Props = {
  alt?: string;
  desc: string;
  githubUrl?: string;
  img?: any;
  techUsed: string[];
  liveUrl?: string;
  title: string;
};

const ProjectCard = ({
  alt,
  desc,
  githubUrl,
  img,
  techUsed,
  liveUrl,
  title,
}: Props) => {
  return (
    <div className="w-full cursor-pointer outline outline-1 hover:scale-[1.01] transition ease-out outline-appGray">
      <div>
        {alt && img && <Image src={img} alt={alt} className="max-w-full" />}
      </div>
      {/* Tech used  */}
      <div className="flex items-center justify-start gap-x-4 border-t border-b p-1 overflow-auto scrollbar-hide">
        {techUsed.map((lang) => (
          <small key={lang}>{lang}</small>
        ))}
      </div>

      {/* Project data  */}
      <div className="flex flex-col gap-y-4 mt-2 py-2">
        <h3 className="text-white text-xl ml-3">{title}</h3>
        <p className="ml-3">{desc}</p>

        {/* CTA  */}
        <div className="flex gap-x-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-x-2 px-2 py-1 ml-3 outline outline-1 outline-primary hover:outline-2 transition ease-out"
            >
              <AiOutlineLink /> Live
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-x-2 px-2 py-1 ml-3 outline outline-1 outline-appGray hover:outline-white transition ease-in"
            >
              <AiOutlineGithub /> Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
