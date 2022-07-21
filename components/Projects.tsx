import Link from "next/link";
import { FC } from "react";
import Button from "./Button";
import ProjectCard from "./ProjectCard";

import smartshop from "@/assets/images/smartshop.png";
import topics from "@/assets/images/topics.png";
import { projects } from "@/utils/projects";

const Projects: FC = () => {
  const topProjects = projects.slice(0, 2);
  return (
    <section>
      <div className="flex justify-center items-center w-[90%] my-6 mx-auto pt-3 md:justify-start">
        <h2 className="dark:text-white text-2xl font-bold">Projects</h2>
      </div>
      <div className="grid md:grid-cols-2 space-x-1 mx-auto w-[90%] justify-center md:justify-start space-y-8 md:space-y-0">
        {topProjects.map(({ link, desc, img, name, tags }) => (
          <ProjectCard
            key={name}
            tags={tags}
            name={name}
            img={img}
            desc={desc}
            link={link}
          />
        ))}
      </div>
      <div className="text-center my-5">
        <Link href="/projects">
          <div className="md:w-[40%] w-[90%] mx-auto my-10">
            <Button text="View All Projects" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
