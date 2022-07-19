import Link from "next/link";
import { FC } from "react";
import Button from "./Button";
import ProjectCard from "./ProjectCard";

const Projects: FC = () => {
  return (
    <section>
      <div className="flex justify-center items-center w-[90%] my-6 mx-auto pt-3 md:justify-start">
        <h2 className="dark:text-white text-2xl font-bold">Projects</h2>
      </div>
      <div className="grid md:grid-cols-2 space-x-1 mx-auto w-[90%] justify-center md:justify-start space-y-8 md:space-y-0">
        <ProjectCard
          name="Smartshop"
          tags={["Python", "Django", "HTML", "CSS"]}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam amet, repudiandae, non in rerum nisi reprehenderit nam iure, fuga magni optio? Vitae libero, modi necessitatibus magni maiores itaque tempora quia tenetur sapiente? Sequi, neque omnis recusandae repudiandae earum enim?"
          link="https://pos-smartshop.herokuapp.com"
        />
        <ProjectCard
          name="POS System"
          tags={["React Native", "Redux", "Typescript"]}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam amet, repudiandae, non in rerum nisi reprehenderit nam iure, fuga magni optio? Vitae libero, modi necessitatibus magni maiores itaque tempora quia tenetur sapiente? Sequi, neque omnis recusandae repudiandae earum enim?"
          link="https://github.com/mrshanas"
        />
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
