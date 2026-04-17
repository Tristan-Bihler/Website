import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="pt-10 pb-6 flex flex-col gap-6">
        <div className="inline-block">
          <span className="text-sm font-medium tracking-widest uppercase text-[var(--gold)] border border-[var(--gold)] px-3 py-1 rounded-full">
            Welcome
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hi, ich bin{" "}
          <span className="text-[var(--red)]">Tristan Bihler</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
          Hier teile ich meine Gedanken, Projekte und Fotos. Schau dich gerne um!
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            href="/projects"
            className="px-6 py-3 bg-[var(--red)] text-white rounded-lg font-medium hover:bg-[var(--red-dark)] transition-colors"
          >
            Meine Projekte
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 border border-[var(--gold)] text-[var(--gold-dark)] rounded-lg font-medium hover:bg-[var(--cream-dark)] transition-colors"
          >
            Blog lesen
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

      {/* Quick links */}
      <section>
        <h2 className="text-2xl font-bold mb-8">
          <span className="border-b-2 border-[var(--gold)] pb-1">Erkunde</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              href: "/blog",
              title: "Blog",
              desc: "Artikel, Gedanken und Erfahrungen aus meinem Alltag.",
              icon: "✍️",
            },
            {
              href: "/pictures",
              title: "Pictures",
              desc: "Eine Sammlung meiner Lieblingsfotos.",
              icon: "📷",
            },
            {
              href: "/projects",
              title: "Projects",
              desc: "Projekte, an denen ich gearbeitet habe.",
              icon: "🛠️",
            },
          ].map(({ href, title, desc, icon }) => (
            <Link
              key={href}
              href={href}
              className="group block p-6 bg-white rounded-xl border border-[var(--cream-dark)] hover:border-[var(--gold)] hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--red)] transition-colors">
                {title}
              </h3>
              <p className="text-sm text-gray-500">{desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
