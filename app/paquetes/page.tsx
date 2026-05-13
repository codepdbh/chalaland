import type { Metadata } from "next";
import { packages } from "@/data/packages";
import SectionTitle from "@/components/SectionTitle";
import PackageCard from "@/components/PackageCard";
import CTAButton from "@/components/CTAButton";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Nuestros Paquetes",
  description:
    "Descubre nuestros paquetes turísticos para explorar la Amazonía. Desde 3 hasta 6 días de aventura, naturaleza y cultura.",
};

export default function PaquetesPage() {
  return (
    <>
      <PageHero
        title="Nuestros Paquetes"
        eyebrow="Ritmos de viaje"
        subtitle="Elige una experiencia según tu tiempo, energía y ganas de internarte en la selva."
        image="/assets/gallery/landscape-2.jpg"
      />

      {/* Packages Grid */}
      <section className="canopy-section py-14 md:py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.slug}
                slug={pkg.slug}
                title={pkg.title}
                duration={pkg.duration}
                nights={pkg.nights}
                image={pkg.image}
                shortDescription={pkg.shortDescription}
              />
            ))}
          </div>

          {/* Custom Packages Section */}
          <div id="medida" className="mt-16 text-center scroll-mt-40">
            <SectionTitle
              title="Paquetes a Medida"
              subtitle="¿Necesitas algo diferente? Diseñamos tu aventura personalizada"
            />
            <p className="text-gray-text text-sm max-w-2xl mx-auto mb-6">
              Si ninguno de nuestros paquetes estándar se ajusta a tus necesidades, podemos crear
              un itinerario personalizado según tu tiempo, intereses y presupuesto. Contáctanos
              para diseñar juntos tu experiencia ideal en la Amazonía.
            </p>
            <CTAButton href="/contacto" variant="secondary">
              Solicitar Paquete Personalizado
            </CTAButton>
          </div>

          {/* Regional Section */}
          <div id="region" className="mt-16 text-center scroll-mt-40">
            <SectionTitle
              title="Lo Mejor de la Región"
              subtitle="Combinaciones especiales con otros destinos amazónicos"
            />
            <p className="text-gray-text text-sm max-w-2xl mx-auto mb-6">
              Combina tu visita al albergue con otros destinos increíbles de la región. Ofrecemos
              paquetes que incluyen visitas a reservas cercanas, comunidades vecinas y paisajes
              únicos de la Amazonía boliviana.
            </p>
            <CTAButton href="/contacto" variant="outline">
              Consultar Disponibilidad
            </CTAButton>
          </div>

          {/* National Promo */}
          <div id="nacionales" className="mt-16 scroll-mt-40">
            <div className="dark-card rounded-2xl p-8 text-center max-w-2xl mx-auto shadow-xl">
              <h3 className="font-heading font-bold text-teal text-xl mb-3">
                🇧🇴 Tour Especial para Nacionales
              </h3>
              <p className="text-white/70 text-sm mb-6">
                Si eres boliviano/a, tenemos precios especiales y paquetes diseñados especialmente
                para ti. Porque creemos que los bolivianos merecen conocer las maravillas de su propio país.
              </p>
              <CTAButton href="/contacto" variant="primary">
                Consultar Precios Nacionales
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
