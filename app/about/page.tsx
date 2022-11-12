import Image from "next/image";

import shanas from "@assets/images/shanas.jpg";
import { PageHeader, SectionHeader, SkillCard } from "@components/index";
import { funFacts, skills } from "@lib/data";

export default function Page() {
  return (
    <section>
      <PageHeader title="about-me" subtitle="Who am I" />
      <main className="w-[90%] md:w-4/5 mx-auto">
        <div className="flex flex-col-reverse gap-y-6 gap-x-8 md:flex-row justify-between flex-shrink my-6">
          <div className="flex flex-col gap-y-4 w-full">
            <h3>Hello, I&apos;m Shanas</h3>
            <p>
              I&apos;m a self-taught developer based in Tanzania but now
              I&apos;m taking my Bachelor of Science in Computer Science at
              University of Dar es Salaam
            </p>
            <p>
              My programming journey started in 2021 were I wrote my first Hello
              world program in HTML using my dad&apos;s old computer running on
              Windows XP, I was so excited that I created a website and since
              then a spirit of passion, curiosity and determination was bestowed
              upon me until now that I enjoy building cool stuffs with
              technology as it advances
            </p>
          </div>
          <div className="flex-grow w-full">
            <Image
              src={shanas}
              alt="shanas"
              className="max-w-full rounded-lg outline outline-1 outline-primary"
            />
          </div>
        </div>
        <SectionHeader title="skills" hideViewLink showLine={false} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          {skills.map((item) => (
            <SkillCard key={item.title} {...item} />
          ))}
        </div>
        <SectionHeader title="my-fun-facts" hideViewLink showLine={false} />
        <div className="flex flex-col-reverse md:flex-row my-8">
          <div className="flex flex-wrap gap-4">
            {funFacts.map((fact) => (
              <small
                key={fact}
                className="outline outline-white outline-1 p-1 hover:text-white transition ease-in-out"
              >
                {fact}
              </small>
            ))}
          </div>
          <div className="hidden md:block">
            <Image src={shanas} alt="pic" className="w-16 h-16" />
          </div>
        </div>
      </main>
    </section>
  );
}
