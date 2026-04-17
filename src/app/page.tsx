import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* HERO — full viewport, parallax */}
      <section
        className="relative h-screen w-full flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#1a1a1a",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 flex flex-col items-center gap-6">
          <span className="text-sm font-medium tracking-widest uppercase text-[var(--gold)] border border-[var(--gold)] px-3 py-1 rounded-full">
            Welcome
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg">
            Tristan <span className="text-[var(--red)]">Bihler</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
            Hier teile ich meine Gedanken, Projekte und Fotos.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              href="/projects"
              className="px-6 py-3 bg-[var(--red)] text-white rounded-lg font-medium hover:bg-[var(--red-dark)] transition-colors shadow-lg"
            >
              Meine Projekte
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3 border border-[var(--gold)] text-[var(--gold)] rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Blog lesen
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 12L2 6h12L8 12z" />
          </svg>
        </div>
      </section>

      {/* CONTENT below hero */}
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-20">
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
                className="group block p-6 bg-[var(--card-bg)] rounded-xl border border-[var(--cream-dark)] hover:border-[var(--gold)] hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--red)] transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-gray-400">{desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
