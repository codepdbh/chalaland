import type { Metadata } from "next";
import Link from "next/link";
import VideoGrid from "@/components/VideoGrid";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Galería de Videos",
  description:
    "Mira nuestros videos del albergue, la vida silvestre y la comunidad en la Amazonía boliviana.",
};

export default function VideosPage() {
  return (
    <>
      <PageHero
        title="Galería de Videos"
        eyebrow="Movimiento y sonido"
        subtitle="Recorridos, vida silvestre y escenas de comunidad para sentir el pulso del bosque."
        image="/assets/gallery/lodge-6.jpg"
      />

      {/* Videos */}
      <section className="canopy-section py-14 md:py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <VideoGrid />

          {/* Link to photos */}
          <div className="mt-12 text-center">
            <Link
              href="/galeria/fotos"
              className="inline-block px-8 py-3 bg-teal text-white font-heading font-semibold rounded-full hover:bg-teal-hover transition-colors"
            >
              Ver Galería de Fotos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
