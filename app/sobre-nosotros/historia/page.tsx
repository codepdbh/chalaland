import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import CTAButton from "@/components/CTAButton";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Nuestra Historia",
  description:
    "Conoce el origen de la ruta turística comunitaria Eco-cabañas CECASEM.",
};

const timeline = [
  {
    year: "1",
    title: "Diagnóstico del territorio",
    description:
      "La propuesta identifica potenciales turísticos, recursos naturales y culturales y condiciones para implementar turismo comunitario solidario.",
  },
  {
    year: "2",
    title: "Definición de la ruta",
    description:
      "Se estructura el recorrido San Borja - Monte Rosa, articulando Galilea, San Antonio, Campo Bello y el tramo fluvial hacia Monte Rosa.",
  },
  {
    year: "3",
    title: "Eco-cabañas comunitarias",
    description:
      "Campo Bello y Monte Rosa se integran como espacios de hospedaje, alimentación, descanso y convivencia comunitaria.",
  },
  {
    year: "4",
    title: "Experiencias por paquetes",
    description:
      "La ruta se organiza en paquetes de 2 a 5 días: Perezoso, Jochi, Paraba Azul y Peta, cada uno con diferente nivel de profundidad.",
  },
  {
    year: "5",
    title: "Turismo comunitario solidario",
    description:
      "El proyecto prioriza conservación ambiental, fortalecimiento socioeconómico y revalorización de conocimientos ancestrales.",
  },
];

export default function HistoriaPage() {
  return (
    <>
      <PageHero
        title="Nuestra Historia"
        eyebrow="Memoria y territorio"
        subtitle="La ruta nace como una herramienta para organizar el turismo comunitario y generar beneficios sostenibles para las comunidades anfitrionas."
        image="/assets/gallery/landscape-4.jpg"
      />

      <section className="canopy-section py-14 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14">
            <p className="text-gray-text text-base leading-relaxed mb-4">
              El PDF presenta la ruta como un proyecto final de CECASEM para la creación de cabañas
              eco turísticas comunitarias y una ruta turística entre San Borja, Campo Bello y Río Maniqui.
            </p>
            <p className="text-gray-text text-base leading-relaxed">
              Su implementación se plantea como una oportunidad para fomentar turismo sostenible,
              fortalecer la economía local y ordenar las actividades de visita en comunidades Tsimanes.
            </p>
          </div>

          <SectionTitle title="Proceso del proyecto" />

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-orange/20 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex gap-6">
                  <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-orange text-white items-center justify-center font-heading font-bold text-xs z-10">
                    {item.year}
                  </div>

                  <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <span className="md:hidden inline-block px-3 py-1 bg-orange text-white text-xs font-bold rounded-full mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-heading font-bold text-dark text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-text leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <CTAButton href="/sobre-nosotros/comunidad" variant="primary">
              Ver Ruta y Comunidades
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
