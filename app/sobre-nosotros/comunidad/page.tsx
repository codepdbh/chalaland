import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import PageHero from "@/components/PageHero";
import { getAssetPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ruta y Comunidades",
  description:
    "Conoce las comunidades de la ruta San Borja - Monte Rosa: Galilea, San Antonio, Campo Bello y Monte Rosa.",
};

export default function ComunidadPage() {
  return (
    <>
      <PageHero
        title="Ruta y Comunidades"
        eyebrow="Galilea, San Antonio, Campo Bello y Monte Rosa"
        subtitle="La ruta turística comunitaria conecta espacios productivos, artesanales, culturales y de hospedaje en territorio tsimane."
        image="/assets/gallery/community-3.jpg"
      />

      {/* Content */}
      <section className="canopy-section py-14 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          {/* Intro */}
          <div className="mb-12">
            <p className="text-gray-text text-base leading-relaxed mb-4">
              El recorrido inicia en San Borja y se desarrolla en diferentes tramos hasta Monte Rosa,
              donde se encuentran las cabañas principales de hospedaje. Durante el trayecto se realizan
              caminatas internas comunitarias, navegación fluvial y actividades de interacción local.
            </p>
            <p className="text-gray-text text-base leading-relaxed">
              El objetivo de la ruta es fortalecer el turismo comunitario solidario, preservando los recursos
              naturales y culturales y generando beneficios sostenibles para las comunidades anfitrionas.
            </p>
          </div>

          <div className="image-frame mb-12 h-64 sm:h-80">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${getAssetPath("/assets/gallery/community-1.jpg")})` }}
            />
          </div>

          {/* Sections */}
          <div className="space-y-10">
            <div>
              <h2 className="font-heading font-bold text-orange text-xl mb-3">
                Galilea - Artegal
              </h2>
              <p className="text-gray-text text-sm leading-relaxed">
                Galilea funciona como punto de ingreso a la ruta y se vincula con Artegal, donde se
                desarrollan actividades artesanales y de bienvenida antes de continuar hacia San Antonio.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-orange text-xl mb-3">
                San Antonio
              </h2>
              <p className="text-gray-text text-sm leading-relaxed">
                San Antonio conserva prácticas tradicionales tsimanes y recibe a visitantes con comida típica,
                danza, relatos culturales, tejidos, fogatas y espacios de convivencia comunitaria.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-orange text-xl mb-3">
                Campo Bello
              </h2>
              <p className="text-gray-text text-sm leading-relaxed">
                Campo Bello integra eco-cabañas, pesca artesanal, demostraciones de tejidos y cestería,
                gastronomía local y conexión hacia Puerto Belén y el tramo fluvial de la ruta.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-orange text-xl mb-3">
                Monte Rosa
              </h2>
              <p className="text-gray-text text-sm leading-relaxed">
                Monte Rosa es el punto de llegada por canoa desde Campo Bello. Allí se realizan actividades
                de arquería, elaboración de arcos y flechas, cantos tradicionales y descanso en cabañas.
              </p>
            </div>
          </div>

          {/* Gallery placeholder */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-2xl border border-white bg-cover bg-center shadow-sm"
                style={{
                  backgroundImage: `url(${getAssetPath(`/assets/gallery/community-${i}.jpg`)})`,
                }}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/sobre-nosotros/sobre" variant="outline">
              Sobre el Proyecto
            </CTAButton>
            <CTAButton href="/paquetes" variant="secondary">
              Conocer Paquetes
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
