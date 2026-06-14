export default function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <img
        src={project.image}
        alt={project.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>

        <p className="mb-4 text-slate-400">{project.description}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-slate-800 px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-lg bg-sky-500 px-4 py-2"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
}
