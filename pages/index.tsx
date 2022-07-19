import { About, Hero, Experience, Projects } from "@/components/index";
import type { NextPage } from "next";
import Head from "next/head";

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
        <About />
        <Projects />
        <section>
          <h3 className="font-extrabold dark:text-white text-xl text-center md:text-left md:text-none md:text-2xl md:ml-14">
            Experiences
          </h3>
          <div className="flex justify-around items-center w-[90%] mx-auto bg-slate-200 shadow-md z-40">
            <Experience />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
