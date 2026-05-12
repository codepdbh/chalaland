import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce nuestro albergue ecológico comunitario en la Amazonía boliviana. Misión, visión, ubicación y actividades.",
};

export default function SobrePage() {
  return (
    <div className="pt-[130px] lg:pt-[140px]">
      {/* Hero Banner */}
      <section className="relative h-[30vh] sm:h-[35vh] bg-dark flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white uppercase">
            Sobre Nosotros
          </h1>
          <p className="mt-3 text-white/70 text-lg">Albergue Ecológico Comunitario</p>
          <div className="mt-4 h-1 w-16 bg-orange mx-auto rounded-full" />
        </div>
      </section>

      {/* Content */}
      <section className="bg-smoke py-14 md:py-18 px-4">
        <div className="mx-auto max-w-4xl">
          {/* Intro */}
          <div className="prose max-w-none mb-14">
            <p className="text-gray-text text-base leading-relaxed mb-6">
              Nuestro albergue ecológico nació del sueño de una comunidad indígena que decidió proteger su territorio
              y compartirlo con el mundo de manera sostenible. Ubicado en el corazón de un parque nacional, somos un
              modelo de turismo responsable que combina la conservación ambiental con el desarrollo comunitario.
            </p>
            <p className="text-gray-text text-base leading-relaxed">
              Desde nuestra fundación, hemos recibido visitantes de más de 50 países, todos buscando una conexión
              auténtica con la naturaleza y la cultura amazónica. Nuestros guías son miembros de la comunidad local,
              formados como naturalistas bilingües, que comparten su profundo conocimiento del bosque y sus tradiciones.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-heading font-bold text-orange text-lg mb-3">Nuestra Misión</h3>
              <p className="text-sm text-gray-text leading-relaxed">
                Promover el ecoturismo comunitario como herramienta de conservación y desarrollo sostenible,
                ofreciendo experiencias auténticas que conecten a nuestros visitantes con la naturaleza y la
                cultura amazónica, mientras generamos beneficios directos para nuestra comunidad.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-heading font-bold text-teal text-lg mb-3">Nuestra Visión</h3>
              <p className="text-sm text-gray-text leading-relaxed">
                Ser el referente mundial de turismo comunitario sostenible en la Amazonía, demostrando que la
                conservación y el desarrollo pueden ir de la mano, inspirando a otras comunidades a proteger
                sus territorios y compartir su patrimonio natural y cultural con el mundo.
              </p>
            </div>
          </div>

          {/* Activities */}
          <SectionTitle title="Nuestras Actividades" subtitle="Experiencias únicas en la selva amazónica" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
            {[
              {
                title: "Paseos por el Bosque",
                desc: "Caminatas guiadas por senderos de interpretación con observación de flora y fauna silvestre.",
              },
              {
                title: "Navegación en Canoa",
                desc: "Paseos por el lago cristalino al amanecer y atardecer para observar aves y caimanes.",
              },
              {
                title: "Miradores Panorámicos",
                desc: "Ascenso a torres y miradores con vistas impresionantes del dosel del bosque.",
              },
              {
                title: "Gastronomía Local",
                desc: "Comida preparada con ingredientes frescos y recetas tradicionales de la comunidad.",
              },
              {
                title: "Observación de Aves",
                desc: "Más de 350 especies registradas. Guías especializados en avifauna amazónica.",
              },
              {
                title: "Experiencia Cultural",
                desc: "Visita a la comunidad, talleres de artesanías y presentaciones de danzas tradicionales.",
              },
            ].map((activity, i) => (
              <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-heading font-semibold text-dark text-base mb-2">{activity.title}</h4>
                <p className="text-sm text-gray-text">{activity.desc}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/sobre-nosotros/instalaciones" variant="primary">
              Ver Instalaciones
            </CTAButton>
            <CTAButton href="/sobre-nosotros/comunidad" variant="outline">
              Nuestra Comunidad
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
