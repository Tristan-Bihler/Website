const pictures = [
  { id: 1, title: "Sonnenuntergang", location: "München", color: "from-orange-200 to-rose-300" },
  { id: 2, title: "Stadtleben", location: "Berlin", color: "from-slate-200 to-blue-300" },
  { id: 3, title: "Natur", location: "Bayern", color: "from-green-200 to-emerald-300" },
  { id: 4, title: "Architektur", location: "Wien", color: "from-stone-200 to-amber-200" },
  { id: 5, title: "Portät", location: "Zuhause", color: "from-pink-100 to-rose-200" },
  { id: 6, title: "Reise", location: "Italien", color: "from-yellow-100 to-orange-200" },
];

export default function PicturesPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-3">Pictures</h1>
        <p className="text-gray-500">Momente, die ich festgehalten habe.</p>
        <div className="mt-4 h-1 w-16 bg-[var(--gold)] rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {pictures.map((pic) => (
          <div
            key={pic.id}
            className="group relative overflow-hidden rounded-xl border border-[var(--cream-dark)] hover:border-[var(--gold)] hover:shadow-lg transition-all cursor-pointer"
          >
            {/* Placeholder gradient representing the photo */}
            <div className={`h-52 bg-gradient-to-br ${pic.color} flex items-center justify-center`}>
              <span className="text-5xl opacity-40">📷</span>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-xl" />
            <div className="p-4 bg-white">
              <p className="font-semibold text-sm">{pic.title}</p>
              <p className="text-xs text-gray-400 mt-0.5">{pic.location}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-400 italic">
        Platzhalter-Bilder — ersetze sie mit deinen eigenen Fotos.
      </p>
    </div>
  );
}
