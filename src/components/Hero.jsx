import Container from "./ui/Container";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Blur */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <Container>
        <div className="relative max-w-5xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2">
            <span className="text-sm font-medium tracking-wider text-sky-400">
              {personalInfo.role}
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl lg:text-8xl">
            <span className="block">Hi, I'm</span>

            <span className="bg-linear-to-r from-white via-sky-300 to-sky-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          {/* Description */}
          <p className="mb-10 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
            {personalInfo.bio}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-sky-500 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400"
            >
              View Projects
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold transition-all duration-300 hover:border-sky-500 hover:text-sky-400"
            >
              GitHub
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4">
            <div>
              <h3 className="text-3xl font-bold text-white">10+</h3>
              <p className="mt-1 text-sm text-slate-400">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">1+</h3>
              <p className="mt-1 text-sm text-slate-400">Years Learning</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">15+</h3>
              <p className="mt-1 text-sm text-slate-400">Technologies</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">100%</h3>
              <p className="mt-1 text-sm text-slate-400">Dedication</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
