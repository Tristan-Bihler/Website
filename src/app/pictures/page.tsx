import { readdir } from "fs/promises";
import path from "path";
import Gallery from "@/components/Gallery";

async function getGalleryImages() {
  const dir = path.join(process.cwd(), "public/images/gallery");
  try {
    const files = await readdir(dir);
    return files
      .filter((f) => /\.(jpe?g|png|webp|gif|avif)$/i.test(f))
      .map((f) => ({ src: `/images/gallery/${f}`, name: f.replace(/\.[^.]+$/, "") }));
  } catch {
    return [];
  }
}

export default async function PicturesPage() {
  const images = await getGalleryImages();

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-3">Pictures</h1>
        <p className="text-gray-400">Momente, die ich festgehalten habe.</p>
        <div className="mt-4 h-1 w-16 bg-[var(--gold)] rounded-full" />
      </div>

      <Gallery images={images} />
    </div>
  );
}
