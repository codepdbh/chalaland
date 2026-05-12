import type { Metadata } from "next";
import Link from "next/link";
import VideoGrid from "@/components/VideoGrid";

export const metadata: Metadata = {
  title: "Galería de Videos",
  description:
    "Mira nuestros videos del albergue, la vida silvestre y la comunidad en la Amazonía boliviana.",
};

export default function VideosPage() {
  return (
    <div className="pt-[130px] lg:pt-[140px]">
      {/* Hero */}
      <section className="relative h-[30vh] sm:h-[35vh] bg-dark flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white uppercase">
            Galería de Videos
          </h1>
          <p className="mt-3 text-white/70 text-lg">
            Explora la Amazonía a través de nuestros videos
          </p>
          <div className="mt-4 h-1 w-16 bg-orange mx-auto rounded-full" />
        </div>
      </section>

      {/* Videos */}
      <section className="bg-smoke py-14 md:py-18 px-4">
        <div className="mx-auto max-w-5xl">
          <VideoGrid />

          {/* Link to photos */}
          <div className="mt-12 text-center">
            <Link
              href="/galeria/fotos"
              className="inline-block px-8 py-3 bg-teal text-white font-heading font-semibold rounded-full hover:bg-teal-hover transition-colors"
            >
              ← Ver Galería de Fotos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
