import Section from "./ui/Section";
import { skills } from "../data/portfolioData";
import { motion } from "framer-motion";

/* container stagger */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* item animation */
const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      {/* GRID WRAPPER */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 md:grid-cols-2"
      >
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            variants={item}
            className="
              rounded-2xl
              border
              border-slate-800
              bg-slate-900/50
              p-6
              transition
              hover:-translate-y-1
              hover:border-sky-500/50
            "
          >
            {/* CATEGORY TITLE */}
            <h3 className="mb-4 text-xl font-bold capitalize text-sky-400">
              {category}
            </h3>

            {/* SKILLS LIST */}
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-lg
                    border
                    border-slate-700
                    px-3
                    py-1
                    text-sm
                    text-slate-300
                    transition
                    hover:border-sky-500
                    hover:text-white
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
