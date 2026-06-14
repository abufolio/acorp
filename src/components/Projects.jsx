import Section from "./ui/Section";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
