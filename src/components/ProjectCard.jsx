import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/50
        transition-all
        duration-300
      "
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
          className="
            h-60
            w-full
            object-cover
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {project.featured && (
          <span className="mb-4 inline-block rounded-full bg-sky-500/10 px-3 py-1 text-sm text-sky-400">
            Featured Project
          </span>
        )}

        <h3 className="mb-3 text-2xl font-bold">{project.title}</h3>

        <p className="mb-5 text-slate-400 leading-7">{project.description}</p>

        {/* TECH STACK */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-lg
                border
                border-slate-700
                px-3
                py-1
                text-sm
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="
              rounded-xl
              bg-sky-500
              px-4
              py-2
              font-medium
              transition
              hover:bg-sky-400
            "
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              rounded-xl
              border
              border-slate-700
              px-4
              py-2
              font-medium
              transition
              hover:border-sky-500
              hover:text-sky-400
            "
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
