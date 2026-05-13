import type { Metadata } from "next";
import Link from "next/link";
import GalleryGrid from "@/components/GalleryGrid";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Galería de Fotos",
  description:
    "Explora nuestra galería fotográfica: paisajes amazónicos, fauna silvestre, flora, el albergue y la comunidad.",
};

export default function FotosPage() {
  return (
    <>
      <PageHero
        title="Galería de Fotos"
        eyebrow="Postales vivas"
        subtitle="Paisajes, fauna, flora, comunidad y rincones del albergue para imaginar el viaje antes de llegar."
        image="/assets/gallery/landscape-5.jpg"
      />

      {/* Gallery */}
      <section className="canopy-section py-14 md:py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <GalleryGrid />

          {/* Link to videos */}
          <div className="mt-12 text-center">
            <Link
              href="/galeria/videos"
              className="inline-block px-8 py-3 bg-teal text-white font-heading font-semibold rounded-full hover:bg-teal-hover transition-colors"
            >
              Ver Galería de Videos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
