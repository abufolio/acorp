import Section from "./ui/Section";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-3"
          >
            {skill}
          </div>
        ))}
      </div>
    </Section>
  );
}
