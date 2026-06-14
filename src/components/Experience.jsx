import Section from "./ui/Section";
import { experiences } from "../data/portfolioData";
import { motion } from "framer-motion";

/* container (stagger) */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

/* item animation */
const item = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export default function Experience() {
  return (
    <Section id="experience" title="Journey">
      <div className="relative max-w-4xl">
        {/* vertical line (animated) */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-4 top-0 h-full w-px origin-top bg-slate-700"
        />

        {/* timeline list */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-10"
        >
          {experiences.map((itemData) => (
            <motion.div
              key={itemData.year}
              variants={item}
              className="relative pl-14"
            >
              {/* DOT (pulse animation) */}
              <span className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500 opacity-30" />
                <span className="relative h-3 w-3 rounded-full bg-sky-500" />
              </span>

              {/* CARD */}
              <div
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
                <span className="text-sm font-medium text-sky-400">
                  {itemData.year}
                </span>

                <h3 className="mt-2 text-xl font-bold">{itemData.title}</h3>

                <p className="mt-3 text-slate-400 leading-7">
                  {itemData.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
