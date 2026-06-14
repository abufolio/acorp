import Container from "./ui/Container";
import { personalInfo } from "../data/portfolioData";
import { motion } from "framer-motion";

/* -----------------------------
   Animation Variants (clean structure)
------------------------------ */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Blur */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <Container>
        {/* MAIN ANIMATED WRAPPER */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative max-w-5xl"
        >
          {/* Badge */}
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2"
          >
            <span className="text-sm font-medium tracking-wider text-sky-400">
              {personalInfo.role}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl lg:text-8xl"
          >
            <span className="block">Hi, I'm</span>

            <span className="bg-linear-to-r from-white via-sky-300 to-sky-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="mb-10 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
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
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={container}
            className="mt-16 grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4"
          >
            {[
              { value: "10+", label: "Projects" },
              { value: "1+", label: "Years Learning" },
              { value: "15+", label: "Technologies" },
              { value: "100%", label: "Dedication" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={item}>
                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
