import Container from "./ui/Container";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-sky-400">
            {personalInfo.role}
          </p>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            {personalInfo.name}
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-slate-400">
            {personalInfo.bio}
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-sky-500 px-6 py-3 font-medium"
            >
              View Projects
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700 px-6 py-3"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
