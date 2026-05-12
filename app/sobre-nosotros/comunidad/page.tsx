import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Nuestra Comunidad",
  description:
    "Conoce a la comunidad indígena que hace posible nuestro proyecto de ecoturismo. Cultura, tradiciones y turismo comunitario.",
};

export default function ComunidadPage() {
  return (
    <div className="pt-[130px] lg:pt-[140px]">
      {/* Hero */}
      <section className="relative h-[30vh] sm:h-[35vh] bg-dark flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white uppercase">
            Nuestra Comunidad
          </h1>
          <p className="mt-3 text-white/70 text-lg">Guardianes de la selva amazónica</p>
          <div className="mt-4 h-1 w-16 bg-orange mx-auto rounded-full" />
        </div>
      </section>

      {/* Content */}
      <section className="bg-smoke py-14 md:py-18 px-4">
        <div className="mx-auto max-w-4xl">
          {/* Intro */}
          <div className="mb-12">
            <p className="text-gray-text text-base leading-relaxed mb-4">
              Nuestra comunidad indígena ha habitado estas tierras durante generaciones, desarrollando un profundo
              conocimiento del bosque amazónico y sus recursos. El proyecto de ecoturismo fue concebido y es
              gestionado por la propia comunidad, que participa activamente en todas las decisiones y se beneficia
              directamente de la actividad turística.
            </p>
            <p className="text-gray-text text-base leading-relaxed">
              Los ingresos del turismo se destinan a educación, salud, infraestructura comunitaria y programas
              de conservación, creando un círculo virtuoso que protege tanto a la gente como a la naturaleza.
            </p>
          </div>

          {/* Featured Image Placeholder */}
          <div className="mb-12 h-64 sm:h-80 bg-gradient-to-br from-teal/20 to-dark-light/30 rounded-lg flex items-center justify-center border border-gray-200">
            <span className="text-gray-text text-sm font-heading">[Imagen destacada de la comunidad]</span>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            <div>
              <h2 className="font-heading font-bold text-orange text-xl mb-3">
                Cultura y Tradiciones
              </h2>
              <p className="text-gray-text text-sm leading-relaxed">
                La comunidad mantiene vivas sus tradiciones ancestrales, incluyendo danzas ceremoniales,
                artesanías elaboradas con materiales del bosque, y una rica tradición oral que transmite
                la historia y los conocimientos de generación en generación. Los visitantes tienen la
                oportunidad de participar en talleres y presentaciones que celebran esta herencia cultural.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-orange text-xl mb-3">
                Turismo Comunitario
              </h2>
              <p className="text-gray-text text-sm leading-relaxed">
                Nuestro modelo de turismo comunitario es un ejemplo reconocido internacionalmente. La comunidad
                es propietaria y gestora del albergue, los guías son miembros capacitados de la comunidad, y los
                beneficios económicos se distribuyen equitativamente. Este modelo ha demostrado que el turismo
                puede ser una herramienta poderosa para la conservación y el desarrollo sostenible.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-orange text-xl mb-3">
                Conservación
              </h2>
              <p className="text-gray-text text-sm leading-relaxed">
                La comunidad lidera programas activos de conservación que incluyen monitoreo de biodiversidad,
                control de acceso al territorio, reforestación de áreas degradadas y educación ambiental.
                Gracias al turismo, el bosque tiene un valor económico vivo que incentiva su protección.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-orange text-xl mb-3">
                Educación y Desarrollo
              </h2>
              <p className="text-gray-text text-sm leading-relaxed">
                Los ingresos del ecoturismo financian becas educativas, capacitación profesional, mejoras
                en infraestructura comunitaria y programas de salud. Los jóvenes de la comunidad tienen
                la oportunidad de formarse como guías naturalistas bilingües, combinando sus conocimientos
                tradicionales con formación científica moderna.
              </p>
            </div>
          </div>

          {/* Gallery placeholder */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-smoke to-gray-200 rounded-lg flex items-center justify-center border border-gray-200"
              >
                <span className="text-gray-text/50 text-xs">Foto {i}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/sobre-nosotros/historia" variant="outline">
              Nuestra Historia
            </CTAButton>
            <CTAButton href="/paquetes" variant="secondary">
              Conocer Paquetes
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
