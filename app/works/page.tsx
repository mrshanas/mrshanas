import { PageHeader, ProjectCard, SectionHeader } from "@components/index";
import { projects, smallProjects } from "@lib/data";

export default function Page() {
  return (
    <section>
      <PageHeader title="projects" subtitle="List of my projects" />
      <main className="w-[90%] md:w-4/5 mx-auto">
        <SectionHeader title="complete-apps" hideViewLink showLine={false} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
          {projects.map((item) => (
            <ProjectCard key={item.alt} {...item} />
          ))}
        </div>
        <SectionHeader title="small-projects" hideViewLink showLine={false} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 mb-10">
          {smallProjects.map((item) => (
            <ProjectCard key={item.desc} {...item} />
          ))}
        </div>
      </main>
    </section>
  );
}
