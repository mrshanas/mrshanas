import type { NextPage } from "next";
import Head from "next/head";
import { ProjectCard } from "@/components/index";
import { projects } from "@/utils/projects";

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>mrshanas | Projects</title>
      </Head>
      <main>
        <section>
          <h3 className="font-extrabold dark:text-white text-center md:text-left md:text-none text-2xl md:ml-14 my-8">
            Projects
          </h3>
          <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 my-3">
            {projects.map(({ name, tags, desc, link, img }) => (
              <ProjectCard
                name={name}
                tags={tags}
                desc={desc}
                link={link}
                key={link}
                img={img}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
