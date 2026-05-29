import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import PageHero from "@/components/PageHero";
import { getAssetPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Nuestras Instalaciones",
  description:
    "Descubre las eco-cabañas comunitarias y espacios de hospedaje de la ruta CECASEM.",
};

const facilities = [
  {
    title: "Cabañas",
    image: "/assets/gallery/lodge-2.jpg",
    description:
      "Las eco-cabañas son espacios de hospedaje comunitario vinculados a Campo Bello y Monte Rosa. Su función es recibir a visitantes durante la ruta y facilitar la convivencia con las comunidades anfitrionas.",
    features: [
      "Hospedaje en cabañas comunitarias",
      "Descanso durante la ruta",
      "Cercanía a actividades locales",
      "Atención previa coordinación",
      "Convivencia comunitaria",
    ],
  },
  {
    title: "Alimentación Comunitaria",
    image: "/assets/gallery/lodge-3.jpg",
    description:
      "La alimentación forma parte central de la experiencia: desayuno con frutas de temporada, almuerzos comunitarios, pescado local, comida típica tsimane y bebidas tradicionales.",
    features: [
      "Desayuno comunitario",
      "Almuerzo tradicional",
      "Cena en eco-cabañas",
      "Bebidas típicas",
      "Agua embotellada incluida",
    ],
  },
  {
    title: "Recorridos Internos",
    image: "/assets/gallery/landscape-4.jpg",
    description:
      "Los recorridos internos por comunidad permiten conocer senderos naturales, áreas boscosas y espacios de interacción. La ficha técnica considera dificultad media y recorridos aproximados de 3 horas de ida y 3 horas de vuelta.",
    features: [
      "Caminatas comunitarias",
      "Dificultad media",
      "Senderos naturales",
      "Espacios de interacción local",
      "Guía nativo",
    ],
  },
  {
    title: "Tramo Fluvial",
    image: "/assets/gallery/lodge-5.jpg",
    description:
      "La ruta incluye navegación en canoa desde Campo Bello hacia Monte Rosa, un tramo fluvial aproximado de 7,29 km dentro del recorrido San Borja - Monte Rosa.",
    features: [
      "Canoa / vía fluvial",
      "Campo Bello - Monte Rosa",
      "Aproximadamente 1 h 40 min",
      "Paisaje ribereño",
      "Coordinación local",
    ],
  },
];

export default function InstalacionesPage() {
  return (
    <>
      <PageHero
        title="Nuestras Instalaciones"
        eyebrow="Confort sencillo"
        subtitle="Hospedaje comunitario, alimentación local, recorridos internos y navegación fluvial dentro de la ruta San Borja - Monte Rosa."
        image="/assets/gallery/lodge-1.jpg"
      />

      {/* Content */}
      <section className="canopy-section py-14 md:py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-12">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-white bg-white shadow-sm"
              >
                <div className="relative h-52 sm:h-64">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${getAssetPath(facility.image)})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="font-heading font-bold text-orange text-xl mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed mb-4">
                    {facility.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {facility.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-text"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/paquetes" variant="secondary">
              Ver Paquetes
            </CTAButton>
            <CTAButton href="/galeria/fotos" variant="outline">
              Ver Galería de Fotos
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
