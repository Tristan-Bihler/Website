import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

const statusColors: Record<string, string> = {
  "Fertig": "bg-green-900/40 text-green-300",
  "In Arbeit": "bg-yellow-900/40 text-yellow-300",
  "Planung": "bg-blue-900/40 text-blue-300",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-3">Projects</h1>
        <p className="text-gray-400">Dinge, die ich gebaut habe oder gerade baue.</p>
        <div className="mt-4 h-1 w-16 bg-[var(--gold)] rounded-full" />
      </div>

      {projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-gray-500 border-2 border-dashed border-[var(--cream-dark)] rounded-xl">
          <span className="text-5xl mb-4">🛠️</span>
          <p className="font-medium">Noch keine Projekte vorhanden</p>
          <p className="text-sm mt-1">
            Lege Ordner in <code className="bg-[var(--cream-dark)] px-1 rounded">content/projects/</code> mit einer <code className="bg-[var(--cream-dark)] px-1 rounded">index.md</code> an.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block bg-[var(--card-bg)] rounded-xl border border-[var(--cream-dark)] p-6 hover:border-[var(--gold)] hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                <h2 className="text-xl font-semibold group-hover:text-[var(--red)] transition-colors">
                  {project.title}
                </h2>
                <div className="flex items-center gap-3">
                  {project.status && (
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusColors[project.status] ?? "bg-gray-700 text-gray-300"}`}>
                      {project.status}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 bg-[var(--cream-dark)] text-[var(--red)] font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-[var(--gold)] font-medium group-hover:underline">
                  Mehr erfahren →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
