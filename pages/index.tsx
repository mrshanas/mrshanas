import type { NextPage } from "next";
import Head from "next/head";
import { Hero, Navbar } from "../components";

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
      </main>
    </>
  );
};

export default Home;
