import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import shanas from "@assets/images/shanas.jpg";
import { currentlyWorking } from "@lib/current";
import { projects, skills } from "@lib/data";
import { ProjectCard, SectionHeader, SkillCard } from "@components/index";

export default function Home() {
  return (
    <main className="my-6">
      {/* Hero Section  */}
      <header className="w-full">
        <div className="w-[90%] md:w-4/5 mx-auto flex gap-y-4 gap-x-8 flex-col-reverse md:flex-row">
          <div className="flex flex-col justify-center gap-y-6">
            <h1 className="text-white text-xl md:text-2xl">
              Shanas is a{" "}
              <span className="text-primary hover:font-semibold cursor-pointer">
                Backend Developer
              </span>{" "}
              and{" "}
              <span className="text-primary hover:font-semibold cursor-pointer">
                Frontend Developer
              </span>
            </h1>
            <small className="">
              He also builds cross-platform mobile apps, responsive websites,
              scalable software solutions with latest and modern technologies
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
          <SectionHeader title="projects" />
          {/* Projects  */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {projects.map((proj) => (
              <ProjectCard key={proj.alt} {...proj} />
            ))}
          </div>
        </div>
        {/* Skills section  */}
        <div className="w-[90%] md:w-4/5 mx-auto my-12">
          <SectionHeader title="skills" hideViewLink />
          <div className="flex">
            <div className="hidden md:block flex-grow w-full" />

            <div className="grid flex-grow md:grid-cols-3 gap-x-6 gap-y-8 my-6">
              {skills.map((skill) => (
                <SkillCard key={skill.title} {...skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Contacts section  */}
        <div className="w-[90%] md:w-4/5 mx-auto my-2 mb-10">
          <SectionHeader title="contacts" hideViewLink />
          <div className="flex flex-col md:flex-row gap-y-4 justify-between my-6">
            <h4 className="md:w-1/2">
              I&apos;m interested in fulltime or freelance opportunities,
              However If you have other request or question, don&apos;t hesitate
              to contact me
            </h4>
            <div className="flex flex-col outline p-2 outline-1 outline-appGray">
              <h5 className="text-white">Message me here</h5>
              <a
                href="https://t.me/mrshanas"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-x-1"
              >
                <FaTelegramPlane />
                @mrshanas
              </a>

              <a
                href="mailto:nassibshaban345@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-x-1"
              >
                <HiOutlineMail />
                nassibshaban345@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
