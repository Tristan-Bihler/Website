"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface GalleryProps {
  images: { src: string; name: string }[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (selected === null) return;
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") setSelected((i) => (i! + 1) % images.length);
      if (e.key === "ArrowLeft") setSelected((i) => (i! - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, images.length]);

  if (images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-gray-500 border-2 border-dashed border-[var(--cream-dark)] rounded-xl">
        <span className="text-5xl mb-4">📷</span>
        <p className="font-medium">Noch keine Bilder vorhanden</p>
        <p className="text-sm mt-1">Lege Bilder in <code className="bg-[var(--cream-dark)] px-1 rounded">public/images/gallery/</code> ab.</p>
      </div>
    );
  }

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <div
            key={img.src}
            className="relative overflow-hidden rounded-xl cursor-zoom-in break-inside-avoid border border-[var(--cream-dark)] hover:border-[var(--gold)] transition-all group"
            onClick={() => setSelected(i)}
          >
            <Image
              src={img.src}
              alt={img.name}
              width={800}
              height={600}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-6 text-white/70 hover:text-white text-3xl font-light leading-none z-10"
            onClick={() => setSelected(null)}
          >
            ✕
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-10 px-3 py-2"
            onClick={(e) => { e.stopPropagation(); setSelected((selected - 1 + images.length) % images.length); }}
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[88vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selected].src}
              alt={images[selected].name}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-10 px-3 py-2"
            onClick={(e) => { e.stopPropagation(); setSelected((selected + 1) % images.length); }}
          >
            ›
          </button>

          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {selected + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
