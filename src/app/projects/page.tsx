const projects = [
  {
    title: "Portfolio Website",
    description: "Diese persönliche Website — gebaut mit Next.js, TypeScript und Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    status: "In Arbeit",
    statusColor: "bg-yellow-900/40 text-yellow-300",
  },
  {
    title: "Projekt Alpha",
    description: "Eine kurze Beschreibung deines Projekts. Was hast du gebaut, welches Problem löst es?",
    tags: ["React", "Node.js"],
    status: "Fertig",
    statusColor: "bg-green-900/40 text-green-300",
  },
  {
    title: "Projekt Beta",
    description: "Beschreibe hier ein weiteres Projekt. Technologien, Ziele und Ergebnisse.",
    tags: ["Python", "API"],
    status: "Planung",
    statusColor: "bg-blue-900/40 text-blue-300",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-3">Projects</h1>
        <p className="text-gray-400">Dinge, die ich gebaut habe oder gerade baue.</p>
        <div className="mt-4 h-1 w-16 bg-[var(--gold)] rounded-full" />
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[var(--card-bg)] rounded-xl border border-[var(--cream-dark)] p-6 hover:border-[var(--gold)] hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${project.statusColor}`}>
                {project.status}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-[var(--cream-dark)] text-[var(--red)] font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
