import Link from "next/link";

const posts = [
  {
    slug: "erster-beitrag",
    title: "Mein erster Blogbeitrag",
    date: "17. April 2026",
    excerpt: "Willkommen auf meinem Blog! Hier werde ich regelmäßig über meine Erfahrungen, Projekte und Gedanken schreiben.",
    tags: ["Allgemein"],
  },
  {
    slug: "nextjs-lernen",
    title: "Wie ich Next.js gelernt habe",
    date: "10. April 2026",
    excerpt: "Next.js ist ein fantastisches Framework für React-Anwendungen. In diesem Beitrag teile ich meine Lernreise.",
    tags: ["Tech", "Next.js"],
  },
  {
    slug: "kreativitaet-alltag",
    title: "Kreativität im Alltag",
    date: "2. April 2026",
    excerpt: "Kreativität ist keine Gabe — sie ist eine Gewohnheit. Wie ich täglich kreativ bleibe.",
    tags: ["Lifestyle"],
  },
];

export default function BlogPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-3">Blog</h1>
        <p className="text-gray-400">Gedanken, Erfahrungen und Geschichten.</p>
        <div className="mt-4 h-1 w-16 bg-[var(--gold)] rounded-full" />
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group bg-[var(--card-bg)] rounded-xl border border-[var(--cream-dark)] p-6 hover:border-[var(--gold)] hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <time className="text-xs text-gray-400 font-medium">{post.date}</time>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 bg-[var(--cream-dark)] text-[var(--gold-dark)] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-[var(--red)] transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">{post.excerpt}</p>
            <div className="mt-4">
              <span className="text-sm font-medium text-[var(--red)] hover:text-[var(--red-dark)] cursor-pointer">
                Weiterlesen →
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
