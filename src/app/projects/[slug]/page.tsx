import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProject } from "@/lib/projects";

const statusColors: Record<string, string> = {
  "Fertig": "bg-green-900/40 text-green-300",
  "In Arbeit": "bg-yellow-900/40 text-yellow-300",
  "Planung": "bg-blue-900/40 text-blue-300",
};

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Back */}
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[var(--gold)] transition-colors mb-10">
        ← Alle Projekte
      </Link>

      {/* Header */}
      <div className="mb-10 space-y-4">
        <div className="flex items-center gap-3 flex-wrap">
          {project.status && (
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusColors[project.status] ?? "bg-gray-700 text-gray-300"}`}>
              {project.status}
            </span>
          )}
          {project.date && (
            <span className="text-xs text-gray-500">{project.date}</span>
          )}
        </div>
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-gray-400 text-lg">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 bg-[var(--cream-dark)] text-[var(--red)] font-medium rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)] border border-[var(--cream-dark)] rounded-lg text-sm hover:border-[var(--gold)] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
              </svg>
              GitHub
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--red)] text-white rounded-lg text-sm hover:bg-[var(--red-dark)] transition-colors">
              Live ansehen ↗
            </a>
          )}
        </div>
      </div>

      <div className="h-px bg-[var(--cream-dark)] mb-10" />

      {/* Markdown content */}
      <article
        className="prose prose-invert prose-headings:text-[var(--foreground)] prose-a:text-[var(--red)] prose-code:text-[var(--gold)] prose-strong:text-[var(--foreground)] max-w-none"
        dangerouslySetInnerHTML={{ __html: project.contentHtml }}
      />
    </div>
  );
}
