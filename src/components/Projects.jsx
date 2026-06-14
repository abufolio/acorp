import Section from "./ui/Section";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolioData";
import { motion } from "framer-motion";

/* STAGGER SYSTEM */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8 md:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </Section>
  );
}
