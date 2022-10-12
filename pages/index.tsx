import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Suspense } from "react";

import {
  About,
  Experience,
  Hero,
  PageLoader,
  Projects,
  SkillCard,
} from "@/components/index";
import { skills } from "@/utils/skills";

const Home: NextPage = () => {
  // const [page, setPage] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setPage(false), 2500);

  //   return () => {
  //     clearInterval();
  //   };
  // }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <main>
        <Head>
          <link rel="icon" href="/favicon.ico" />

          {/* <!-- Primary Meta Tags --> */}
          <title>mrshanas | Portfolio</title>
          <meta name="title" content="mrshanas | Portfolio" />
          <meta
            name="description"
            content="A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Django / React Native and some other cool libraries and frameworks."
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://mrshanas.com" />
          <meta property="og:title" content="mrshanas | Portfolio" />
          <meta
            property="og:description"
            content="A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Django / React Native and some other cool libraries and frameworks."
          />
          <meta property="og:image" content="../assets/images/shanas.jpg" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://twitter.com/mrshanas" />
          <meta property="twitter:title" content="mrshanas | Portfolio" />
          <meta
            property="twitter:description"
            content="A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Django / React Native and some other cool libraries and frameworks."
          />
          <meta
            property="twitter:image"
            content="../assets/images/shanas.jpg"
          />
        </Head>

        <Hero />
        {/* {page && <PageLoader />} */}
        <h3 className="font-extrabold dark:text-white text-xl text-center md:text-left md:text-none md:text-2xl md:ml-14">
          About Me
        </h3>
        <About />
        <h3 className="font-extrabold dark:text-white text-xl text-center md:text-left md:text-none md:text-2xl md:ml-14">
          Where I&apos;ve worked
        </h3>
        <Experience />
        <Projects />
        <section>
          <h3 className="font-extrabold dark:text-white text-xl text-center md:text-left md:text-none md:text-2xl md:ml-14">
            Skills
          </h3>

          <div className="flex mx-auto my-5 w-[95%] md:justify-around space-x-10 md:w-full overflow-x-scroll scrollbar-hide">
            {skills.map((skill) => (
              <SkillCard key={skill.key} img={skill.img} desc={skill.desc} />
            ))}
          </div>
        </section>
      </main>
    </Suspense>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
