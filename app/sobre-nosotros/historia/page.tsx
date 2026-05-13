import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import CTAButton from "@/components/CTAButton";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Nuestra Historia",
  description:
    "Conoce la historia de nuestro albergue ecológico, desde sus orígenes hasta convertirse en un referente del turismo comunitario.",
};

const timeline = [
  {
    year: "1990",
    title: "El Sueño Comienza",
    description:
      "La comunidad indígena comienza a explorar alternativas sostenibles para proteger su territorio frente a la deforestación y la explotación minera.",
  },
  {
    year: "1995",
    title: "Proyecto de Ecoturismo",
    description:
      "Con apoyo de organizaciones internacionales, nace el proyecto de ecoturismo comunitario como herramienta de conservación y desarrollo.",
  },
  {
    year: "1998",
    title: "Construcción del Albergue",
    description:
      "Se construye el albergue utilizando técnicas tradicionales y materiales locales, en armonía con el entorno natural.",
  },
  {
    year: "2001",
    title: "Primeros Visitantes",
    description:
      "El albergue abre sus puertas al turismo internacional, recibiendo sus primeros visitantes de Europa y Norteamérica.",
  },
  {
    year: "2005",
    title: "Primer Premio Internacional",
    description:
      "Reconocimiento internacional como modelo de turismo sostenible y comunitario en Latinoamérica.",
  },
  {
    year: "2010",
    title: "Expansión y Mejoras",
    description:
      "Ampliación de cabañas, mejora de senderos y capacitación continua de guías naturalistas bilingües.",
  },
  {
    year: "2015",
    title: "10,000 Visitantes",
    description:
      "Celebramos haber recibido más de 10,000 visitantes de más de 50 países, manteniendo nuestro compromiso con la conservación.",
  },
  {
    year: "Hoy",
    title: "Mirando al Futuro",
    description:
      "Seguimos innovando y mejorando, con nuevos programas de conservación, energía solar y proyectos educativos para la comunidad.",
  },
];

export default function HistoriaPage() {
  return (
    <>
      <PageHero
        title="Nuestra Historia"
        eyebrow="Memoria y territorio"
        subtitle="Un camino de conservación y comunidad contado desde quienes decidieron cuidar el bosque desde adentro."
        image="/assets/gallery/landscape-4.jpg"
      />

      {/* Content */}
      <section className="canopy-section py-14 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          {/* Intro */}
          <div className="mb-14">
            <p className="text-gray-text text-base leading-relaxed mb-4">
              La historia de nuestro albergue es la historia de una comunidad que decidió tomar las riendas
              de su futuro, protegiendo su hogar ancestral y compartiéndolo con el mundo de manera respetuosa
              y sostenible.
            </p>
            <p className="text-gray-text text-base leading-relaxed">
              El nombre de nuestro proyecto se inspira en la riqueza natural que nos rodea y en el compromiso
              de preservarla para las futuras generaciones.
            </p>
          </div>

          {/* Timeline */}
          <SectionTitle title="Línea de Tiempo" />

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-orange/20 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Year Circle */}
                  <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-orange text-white items-center justify-center font-heading font-bold text-xs z-10">
                    {item.year}
                  </div>

                  {/* Card */}
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

          {/* CTA */}
          <div className="mt-14 flex justify-center">
            <CTAButton href="/sobre-nosotros/comunidad" variant="primary">
              Conoce Nuestra Comunidad
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
