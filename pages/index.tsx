import { About, Hero, Navbar,Projects } from "@/components/index";
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
        <Navbar />
        <Hero />
        <About />
        <Projects/>
      </main>
    </>
  );
};

export default Home;
