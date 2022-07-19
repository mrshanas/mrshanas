import { About, Hero, Navbar } from "@/components/index";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <main className="dark:bg-darkBlue">
        <Head>
          <title>@mrshanas|Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Hero />
        <About />
      </main>
    </>
  );
};

export default Home;
