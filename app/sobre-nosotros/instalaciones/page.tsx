import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Nuestras Instalaciones",
  description:
    "Descubre las cabañas, comedor, senderos y espacios de nuestro albergue ecológico en la Amazonía.",
};

const facilities = [
  {
    title: "Cabañas",
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
    <div className="pt-[130px] lg:pt-[140px]">
      {/* Hero */}
      <section className="relative h-[30vh] sm:h-[35vh] bg-dark flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white uppercase">
            Nuestras Instalaciones
          </h1>
          <p className="mt-3 text-white/70 text-lg">Confort en armonía con la naturaleza</p>
          <div className="mt-4 h-1 w-16 bg-orange mx-auto rounded-full" />
        </div>
      </section>

      {/* Content */}
      <section className="bg-smoke py-14 md:py-18 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-12">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
              >
                {/* Placeholder Image */}
                <div className="h-48 sm:h-56 bg-gradient-to-br from-dark-light to-dark flex items-center justify-center">
                  <span className="text-white/40 text-sm font-heading">
                    [Imagen: {facility.title}]
                  </span>
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
    </div>
  );
}
