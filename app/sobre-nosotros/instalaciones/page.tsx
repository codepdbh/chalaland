import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import PageHero from "@/components/PageHero";
import { getAssetPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Nuestras Instalaciones",
  description:
    "Descubre las cabañas, comedor, senderos y espacios de nuestro albergue ecológico en la Amazonía.",
};

const facilities = [
  {
    title: "Cabañas",
    image: "/assets/gallery/lodge-2.jpg",
    description:
      "Nuestras cabañas están construidas con materiales locales y técnicas tradicionales, integrándose armoniosamente con el entorno. Cada cabaña cuenta con camas cómodas, mosquiteros, baño privado o compartido según el tipo, y vistas al bosque o al lago. La electricidad es provista por paneles solares.",
    features: [
      "Camas con mosquiteros",
      "Baño privado o compartido",
      "Construcción con materiales locales",
      "Ventilación natural cruzada",
      "Vistas al bosque o lago",
    ],
  },
  {
    title: "Comedor",
    image: "/assets/gallery/lodge-3.jpg",
    description:
      "El comedor es el corazón social del albergue. Con estructura abierta que permite disfrutar de la brisa y los sonidos del bosque mientras se degusta la cocina local. Nuestros chefs preparan platos con ingredientes frescos cultivados por la comunidad.",
    features: [
      "Estructura abierta con vista al bosque",
      "Cocina con productos locales",
      "Agua potable purificada",
      "Desayuno, almuerzo y cena incluidos",
      "Opciones vegetarianas disponibles",
    ],
  },
  {
    title: "Senderos de Interpretación",
    image: "/assets/gallery/landscape-4.jpg",
    description:
      "Más de 50 kilómetros de senderos cuidadosamente trazados atraviesan diferentes ecosistemas del bosque. Cada sendero está señalizado y mantenido por la comunidad, ofreciendo diferentes niveles de dificultad y experiencias únicas.",
    features: [
      "50+ km de senderos señalizados",
      "Diferentes niveles de dificultad",
      "Torres de observación",
      "Miradores panorámicos",
      "Mantenimiento constante",
    ],
  },
  {
    title: "Área de Descanso",
    image: "/assets/gallery/lodge-5.jpg",
    description:
      "Hamacas y espacios de lectura distribuidos en terrazas con vista al lago y al bosque. El lugar perfecto para relajarse después de una jornada de exploración y conectar con la tranquilidad del entorno.",
    features: [
      "Hamacas con vista al lago",
      "Área de lectura",
      "Terraza de observación",
      "Zona wifi limitada",
      "Espacio para yoga y meditación",
    ],
  },
];

export default function InstalacionesPage() {
  return (
    <>
      <PageHero
        title="Nuestras Instalaciones"
        eyebrow="Confort sencillo"
        subtitle="Espacios construidos para descansar, escuchar el bosque y mantener una relación amable con el entorno."
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
