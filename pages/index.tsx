import type { NextPage } from "next";
import Head from "next/head";

import {
  About,
  Hero,
  Experience,
  Projects,
  SkillCard,
} from "@/components/index";
import { skills } from "@/utils/skills";

const Home: NextPage = () => {
  return (
    <>
      <main>
        <Head>
          <title>@mrshanas|Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <Navbar /> */}

        <Hero />
        <h3 className="font-extrabold dark:text-white text-xl text-center md:text-left md:text-none md:text-2xl md:ml-14">
          About Me
        </h3>
        <About />
        <Projects />
        <section>
          <h3 className="font-extrabold dark:text-white text-xl text-center md:text-left md:text-none md:text-2xl md:ml-14">
            Skills
          </h3>
          {/* <div className="flex justify-around items-center w-[90%] mx-auto bg-slate-200 shadow-md z-40">
            <Experience />
          </div> */}
          {/*@ts-ignore*/}

          <div className="flex mx-auto my-5 w-[95%] md:justify-around space-x-10 md:w-full overflow-x-scroll">
            {skills.map((skill) => (
              <SkillCard key={skill.key} img={skill.img} desc={skill.desc} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
