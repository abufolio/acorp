import Section from "./ui/Section";

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl">
        <p className="leading-8 text-slate-400">
          I'm a Full Stack Developer focused on building modern, scalable and
          user-friendly web applications. I enjoy turning ideas into real
          products using React, Node.js and modern database technologies.
        </p>
      </div>
    </Section>
  );
}
