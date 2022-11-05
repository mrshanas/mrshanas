import Image from "next/image";
import Link from "next/link";

import shanas from "@assets/images/shanas.jpg";
import { currentlyWorking } from "@lib/current";
import { projects } from "@lib/data";
import { HashTag, ProjectCard } from "@components/index";

export default function Home() {
  return (
    <main className="my-6">
      {/* Hero Section  */}
      <header className="w-full">
        <div className="w-[90%] md:w-4/5 mx-auto flex gap-y-4 gap-x-8 flex-col-reverse md:flex-row">
          <div className="flex flex-col justify-center gap-y-6">
            <h1 className="text-white text-xl md:text-2xl">
              Shanas is a{" "}
              <span className="text-primary">Backend Developer</span> and{" "}
              <span className="text-primary">Frontend Developer</span>
            </h1>
            <small className="">
              He builds responsive websites, scalable apps with latest and
              modern technologies
            </small>

            <button className="text-appGray w-full hover:outline-2 hover:scale-105 transition ease-out md:w-2/5 outline outline-1 outline-primary p-1">
              <Link href="/contacts">Contact Me !!</Link>
            </button>
          </div>

          <div className="flex-grow">
            <Image
              src={shanas}
              alt="Shanas' Image"
              className="max-w-full mx-auto w-48 md:w-96 rounded-[50%]"
            />

            <div className="flex items-center gap-x-3 w-full mt-4 outline outline-1 outline-appGray p-2">
              <div className="w-4 h-4 bg-primary" />
              <p className="text-[0.6rem]">
                Currently working on{" "}
                <span className="text-white text-[0.7rem]">
                  {currentlyWorking}
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Quotes from an API  */}
      <section className="w-full my-6">
        <div className="w-[90%] md:w-3/5 flex flex-col mx-auto">
          <q className="outline-1 outline text-center outline-appGray p-2">
            With great power comes great electricty bill
          </q>
          <small className=" w-1/5 text-center self-end border-b border-l border-r p-1 border-appGray">
            Dr Who
          </small>
        </div>
      </section>

      {/* Projects section  */}
      <section className="w-full my-8">
        <div className="w-[90%] md:w-4/5 mx-auto">
          {/* Heading  */}
          <div className="flex items-center justify-between">
            <div className="flex gap-x-2 flex-grow items-center">
              <h2 className="">
                <HashTag />
                projects
              </h2>
              <div className="border-t border-primary w-3/5 hidden md:flex" />
            </div>
            <p className="">
              <Link href="/works">View all &rarr;</Link>
            </p>
          </div>

          {/* Projects  */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {projects.map((proj) => (
              <ProjectCard key={proj.alt} {...proj} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
